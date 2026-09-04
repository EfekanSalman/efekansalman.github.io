/**
 * @fileoverview 3D Holographic Brain Connectome Visualizer powered by Three.js.
 * Simulates a rotating biophysical brain network with anatomical lobes,
 * neural fiber tracts, and real-time action potential spikes.
 */

// UPDATE: Added 3D Holographic Brain Connectome simulation.

class HolographicBrain3D {
  /**
   * Initializes the 3D Holographic Brain instance.
   * 
   * @param {string} containerId - DOM ID of the container element.
   * @param {Object} [options={}] - Custom configuration parameters.
   */
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container || typeof THREE === 'undefined') {
      console.warn('[HolographicBrain3D] Container or Three.js not available.');
      return;
    }

    this.options = {
      pointCount: 1600,
      tractCount: 45,
      autoRotateSpeed: 0.004,
      pointColor: options.pointColor || 0x34d399,
      tractColor: options.tractColor || 0x059669,
      sparkColor: options.sparkColor || 0x6ee7b7,
      ...options,
    };

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.brainGroup = null;
    this.pointCloud = null;
    this.tractLines = [];
    this.sparks = [];
    this.animId = null;
    this.isMouseDown = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotX = 0.2;
    this.targetRotY = 0;
    this.isIntersecting = true;

    this.init();
  }

  /**
   * Sets up Three.js scene, camera, procedural brain geometry, and event listeners.
   * 
   * @returns {void}
   */
  init() {
    const width = this.container.clientWidth || 360;
    const height = this.container.clientHeight || 260;

    // 1. Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 18;

    // 2. WebGL Renderer with Alpha transparency
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.container.appendChild(this.renderer.domElement);

    // 3. Brain Group Container
    this.brainGroup = new THREE.Group();
    this.scene.add(this.brainGroup);

    // 4. Generate Procedural Connectome & Points
    this.generateBrainPointCloud();
    this.generateConnectomeTracts();

    // 5. Events & Render Loop
    this.bindEvents();
    this.start();
  }

  /**
   * Procedurally generates a realistic anatomical brain shape using coordinate transforms.
   * Modulates coordinates for Left/Right hemispheres, sulci fissures, cerebellum, and brainstem.
   * 
   * @returns {void}
   */
  generateBrainPointCloud() {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const sizes = [];

    const baseColor = new THREE.Color(this.options.pointColor);
    const highlightColor = new THREE.Color(this.options.sparkColor);

    this.anatomicalHubs = [];

    for (let i = 0; i < this.options.pointCount; i++) {
      let x, y, z;
      const type = Math.random();

      if (type < 0.78) {
        // Cerebral Hemispheres (Left / Right with longitudinal fissure)
        const u = Math.random() * Math.PI * 2;
        const v = Math.acos(Math.random() * 2 - 1);
        const radius = 5.2 + (Math.random() - 0.5) * 0.9;

        // Anatomic ellipsoid elongation
        const side = Math.random() > 0.5 ? 1 : -1;
        const hemiGap = 0.55 * side;

        x = (Math.sin(v) * Math.cos(u) * 4.2 + hemiGap) * (1 + 0.08 * Math.cos(5 * u) * Math.sin(4 * v));
        y = (Math.cos(v) * 3.8) * (1 + 0.06 * Math.sin(6 * u));
        z = (Math.sin(v) * Math.sin(u) * 5.2) * (1 + 0.05 * Math.cos(4 * v));

        // Frontal / Occipital taper
        if (z > 0) y *= 0.92; // Frontal pole
        if (z < -1.5) y *= 0.85; // Occipital lobe
      } else if (type < 0.90) {
        // Cerebellum (Lower posterior region)
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = 2.2 * Math.cbrt(Math.random());

        x = r * Math.sin(phi) * Math.cos(theta) * 1.5;
        y = -2.8 + r * Math.cos(phi) * 0.8;
        z = -2.6 + r * Math.sin(phi) * Math.sin(theta) * 1.1;
      } else {
        // Brainstem (Central descending pillar)
        const h = Math.random() * 3.2;
        const r = (0.8 - h * 0.15) * Math.sqrt(Math.random());
        const theta = Math.random() * Math.PI * 2;

        x = r * Math.cos(theta);
        y = -2.2 - h;
        z = -0.6 + r * Math.sin(theta);
      }

      positions.push(x, y, z);

      // Select distinct hub nodes for tract endpoints
      if (i % 35 === 0) {
        this.anatomicalHubs.push(new THREE.Vector3(x, y, z));
      }

      // Vertex color mixing
      const lerpFactor = Math.random() * 0.6;
      const c = baseColor.clone().lerp(highlightColor, lerpFactor);
      colors.push(c.r, c.g, c.b);
      sizes.push(1.8 + Math.random() * 2.2);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

    // Shader Material or PointsMaterial
    const material = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    this.pointCloud = new THREE.Points(geometry, material);
    this.brainGroup.add(this.pointCloud);
  }

  /**
   * Generates 3D Spline / Bezier Neural Tracts bridging anatomical brain hubs.
   * 
   * @returns {void}
   */
  generateConnectomeTracts() {
    if (this.anatomicalHubs.length < 2) return;

    this.tractMaterial = new THREE.LineBasicMaterial({
      color: this.options.tractColor,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    for (let i = 0; i < this.options.tractCount; i++) {
      const idx1 = Math.floor(Math.random() * this.anatomicalHubs.length);
      let idx2 = Math.floor(Math.random() * this.anatomicalHubs.length);
      if (idx1 === idx2) idx2 = (idx1 + 1) % this.anatomicalHubs.length;

      const p1 = this.anatomicalHubs[idx1];
      const p2 = this.anatomicalHubs[idx2];

      // Create arched 3D curve through inner brain
      const mid = new THREE.Vector3()
        .addVectors(p1, p2)
        .multiplyScalar(0.5)
        .multiplyScalar(0.5 + Math.random() * 0.4); // Pull towards center

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const points = curve.getPoints(24);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const line = new THREE.Line(geometry, this.tractMaterial);
      this.brainGroup.add(line);
      this.tractLines.push({ curve, line });

      // Action potential spark moving along tract
      this.sparks.push({
        curve,
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.012,
        mesh: this.createSparkMesh(),
      });
    }
  }

  /**
   * Creates a luminous sphere mesh for action potential sparks.
   * 
   * @returns {THREE.Mesh}
   */
  createSparkMesh() {
    const geo = new THREE.SphereGeometry(0.09, 8, 8);
    const mat = new THREE.MeshBasicMaterial({
      color: this.options.sparkColor,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const mesh = new THREE.Mesh(geo, mat);
    this.brainGroup.add(mesh);
    return mesh;
  }

  /**
   * Triggers a synchronous action potential burst across the entire 3D connectome.
   * 
   * @returns {void}
   */
  triggerSpikeCascade() {
    this.sparks.forEach((s) => {
      s.progress = 0;
      s.speed = 0.035; // Fast burst speed
    });

    if (this.pointCloud && this.pointCloud.material) {
      this.pointCloud.material.size = 0.32;
      setTimeout(() => {
        if (this.pointCloud && this.pointCloud.material) {
          this.pointCloud.material.size = 0.18;
        }
      }, 300);
    }
  }

  /**
   * Updates colors dynamically to synchronize with active theme palette.
   * 
   * @param {Object} colors - Hex color codes for points, tracts, and sparks.
   * @returns {void}
   */
  updateColors(colors = {}) {
    if (colors.pointColor) {
      this.options.pointColor = colors.pointColor;
      if (this.pointCloud) {
        const positions = this.pointCloud.geometry.attributes.position;
        const colorAttr = this.pointCloud.geometry.attributes.color;
        const base = new THREE.Color(colors.pointColor);
        const spark = new THREE.Color(colors.sparkColor || colors.pointColor);

        for (let i = 0; i < colorAttr.count; i++) {
          const c = base.clone().lerp(spark, Math.random() * 0.5);
          colorAttr.setXYZ(i, c.r, c.g, c.b);
        }
        colorAttr.needsUpdate = true;
      }
    }

    if (colors.tractColor && this.tractMaterial) {
      this.tractMaterial.color.set(colors.tractColor);
    }

    if (colors.sparkColor) {
      this.sparks.forEach((s) => {
        s.mesh.material.color.set(colors.sparkColor);
      });
    }
  }

  /**
   * Binds pointer and touch drag interaction for 360 degree rotation.
   * 
   * @returns {void}
   */
  bindEvents() {
    const dom = this.renderer.domElement;

    dom.addEventListener('mousedown', (e) => {
      this.isMouseDown = true;
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isMouseDown) return;
      const dx = e.clientX - this.mouseX;
      const dy = e.clientY - this.mouseY;

      this.targetRotY += dx * 0.008;
      this.targetRotX += dy * 0.008;

      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    // Touch support
    dom.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isMouseDown = true;
        this.mouseX = e.touches[0].clientX;
        this.mouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.isMouseDown = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!this.isMouseDown || e.touches.length === 0) return;
      const dx = e.touches[0].clientX - this.mouseX;
      const dy = e.touches[0].clientY - this.mouseY;

      this.targetRotY += dx * 0.008;
      this.targetRotX += dy * 0.008;

      this.mouseX = e.touches[0].clientX;
      this.mouseY = e.touches[0].clientY;
    }, { passive: true });

    // Observe viewport visibility to pause rendering when offscreen (GPU saver)
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          this.isIntersecting = entry.isIntersecting;
          if (this.isIntersecting && !this.animId) {
            this.start();
          } else if (!this.isIntersecting && this.animId) {
            this.stop();
          }
        });
      }, { threshold: 0.05 });

      this.observer.observe(this.container);
    }

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.options.autoRotateSpeed = 0;
    }

    // Handle container resize
    window.addEventListener('resize', () => {
      if (!this.container) return;
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      if (w > 0 && h > 0) {
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
      }
    });
  }

  /**
   * Main Three.js render loop.
   * 
   * @returns {void}
   */
  render() {
    if (!this.isIntersecting) {
      this.animId = null;
      return;
    }

    // Smooth rotation interpolation
    if (!this.isMouseDown) {
      this.targetRotY += this.options.autoRotateSpeed;
    }

    this.brainGroup.rotation.y += (this.targetRotY - this.brainGroup.rotation.y) * 0.08;
    this.brainGroup.rotation.x += (this.targetRotX - this.brainGroup.rotation.x) * 0.08;

    // Update Action Potential Sparks
    for (let i = 0; i < this.sparks.length; i++) {
      const s = this.sparks[i];
      s.progress += s.speed;
      if (s.progress >= 1.0) {
        s.progress = 0;
        s.speed = 0.006 + Math.random() * 0.012; // Reset speed
      }
      const pos = s.curve.getPoint(s.progress);
      s.mesh.position.copy(pos);
    }

    this.renderer.render(this.scene, this.camera);
    this.animId = requestAnimationFrame(() => this.render());
  }

  /**
   * Starts animation loop.
   * 
   * @returns {void}
   */
  start() {
    if (!this.animId && this.isIntersecting) {
      this.render();
    }
  }

  /**
   * Stops animation loop.
   * 
   * @returns {void}
   */
  stop() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }
}

// Global attachment
window.HolographicBrain3D = HolographicBrain3D;
