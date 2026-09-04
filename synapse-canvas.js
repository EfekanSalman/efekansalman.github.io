/**
 * @fileoverview Interactive Synaptic Neural Network Background Canvas.
 * Simulates a Spiking Neural Network (SNN) with Leaky Integrate-and-Fire (LIF)
 * dynamics, action potential propagation, and cursor-based excitation.
 */

// UPDATE: Added Synaptic Canvas simulation for computational neuroscience theme.

class SynapticCanvas {
  /**
   * Initializes the Synaptic Canvas simulation.
   * 
   * @param {string} canvasId - DOM ID of the target canvas element.
   * @param {Object} [options={}] - Custom configuration parameters.
   */
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      console.warn(`[SynapticCanvas] Canvas #${canvasId} not found.`);
      return;
    }
    this.ctx = this.canvas.getContext('2d');

    // Canvas configuration
    this.config = {
      maxDistance: options.maxDistance || 150,
      neuronCountRatio: options.neuronCountRatio || 0.00006, // Neurons per pixel area
      minNeurons: options.minNeurons || 45,
      maxNeurons: options.maxNeurons || 110,
      restingPotential: 0.1,
      thresholdPotential: 0.82,
      leakRate: 0.008,
      refractoryTime: 25,
      spikeSpeed: 3.2,
      cursorRadius: 180,
      cursorExcitatoryCurrent: 0.04,
      neuronColor: 'rgba(56, 189, 248, ',     // #38bdf8
      spikeColor: 'rgba(34, 211, 238, ',      // #22d3ee
      synapseColor: 'rgba(125, 211, 252, ',   // #7dd3fc
      ...options,
    };

    this.neurons = [];
    this.actionPotentials = [];
    this.cursor = { x: -1000, y: -1000, active: false };
    this.dpr = window.devicePixelRatio || 1;
    this.animId = null;
    this.isPaused = false;

    this.init();
  }

  /**
   * Sets up dimensions, particles, and event listeners.
   * 
   * @returns {void}
   */
  init() {
    this.handleResize();
    this.createNetwork();
    this.bindEvents();
    this.start();
  }

  /**
   * Binds window resize, visibility, and pointer tracking events.
   * 
   * @returns {void}
   */
  bindEvents() {
    window.addEventListener('resize', () => {
      this.handleResize();
      this.createNetwork();
    });

    window.addEventListener('mousemove', (e) => {
      this.cursor.x = e.clientX;
      this.cursor.y = e.clientY;
      this.cursor.active = true;
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.cursor.x = e.touches[0].clientX;
        this.cursor.y = e.touches[0].clientY;
        this.cursor.active = true;
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      this.cursor.active = false;
      this.cursor.x = -1000;
      this.cursor.y = -1000;
    });

    window.addEventListener('touchend', () => {
      this.cursor.active = false;
      this.cursor.x = -1000;
      this.cursor.y = -1000;
    });

    // Pause rendering when tab is inactive to conserve system resources
    document.addEventListener('visibilitychange', () => {
      this.isPaused = document.hidden;
      if (!this.isPaused && !this.animId) {
        this.start();
      }
    });
  }

  /**
   * Resizes the canvas to match viewport size with high-DPI scaling.
   * 
   * @returns {void}
   */
  handleResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = window.devicePixelRatio || 1;

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(this.dpr, this.dpr);
  }

  /**
   * Populates the neural network with soma nodes.
   * 
   * @returns {void}
   */
  createNetwork() {
    const area = this.width * this.height;
    let targetCount = Math.floor(area * this.config.neuronCountRatio);
    targetCount = Math.max(this.config.minNeurons, Math.min(this.config.maxNeurons, targetCount));

    this.neurons = [];
    this.actionPotentials = [];

    for (let i = 0; i < targetCount; i++) {
      this.neurons.push({
        id: i,
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: 2.2 + Math.random() * 2.0,
        potential: this.config.restingPotential + Math.random() * 0.3, // Membrane voltage V(t)
        refractory: 0,                                               // Refractory timer
        baseDriftX: (Math.random() - 0.5) * 0.1,
        baseDriftY: (Math.random() - 0.5) * 0.1,
      });
    }
  }

  /**
   * Simulates Leaky Integrate-and-Fire (LIF) dynamics for all neurons.
   * Formula: V(t+dt) = V(t) - (V(t) - V_rest) * lambda + I_ext
   * 
   * @returns {void}
   */
  updateNeurons() {
    const { restingPotential, thresholdPotential, leakRate, cursorRadius, cursorExcitatoryCurrent } = this.config;

    for (let i = 0; i < this.neurons.length; i++) {
      const n = this.neurons[i];

      // Update position with soft boundary bouncing
      n.x += n.vx;
      n.y += n.vy;

      if (n.x < 0 || n.x > this.width) n.vx *= -1;
      if (n.y < 0 || n.y > this.height) n.vy *= -1;

      // Refractory period management
      if (n.refractory > 0) {
        n.refractory--;
        n.potential = restingPotential;
        continue;
      }

      // 1. Membrane voltage leak towards resting potential
      n.potential -= (n.potential - restingPotential) * leakRate;

      // 2. External current stimulation from mouse cursor (Electrode effect)
      if (this.cursor.active) {
        const dx = this.cursor.x - n.x;
        const dy = this.cursor.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < cursorRadius) {
          const stimulus = (1 - dist / cursorRadius) * cursorExcitatoryCurrent;
          n.potential += stimulus;

          // Slight gentle magnetic pull towards the cursor
          n.vx += (dx / dist) * 0.015;
          n.vy += (dy / dist) * 0.015;
        }
      }

      // Clamp velocity to avoid instability
      const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
      if (speed > 1.2) {
        n.vx = (n.vx / speed) * 1.2;
        n.vy = (n.vy / speed) * 1.2;
      }

      // Random spontaneous baseline mini-excitations (biological background noise)
      if (Math.random() < 0.003) {
        n.potential += 0.15 + Math.random() * 0.2;
      }

      // 3. Action Potential Trigger (Spike threshold reached)
      if (n.potential >= thresholdPotential) {
        this.fireNeuron(n);
      }
    }
  }

  /**
   * Fires a neuron, initiating an action potential wave to adjacent synapses.
   * 
   * @param {Object} presynapticNeuron - The spiking neuron.
   * @returns {void}
   */
  fireNeuron(presynapticNeuron) {
    presynapticNeuron.potential = 1.0; // Peak spike amplitude
    presynapticNeuron.refractory = this.config.refractoryTime;

    const maxDistSq = this.config.maxDistance * this.config.maxDistance;

    // Propagate action potentials across all connected postsynaptic partners
    for (let j = 0; j < this.neurons.length; j++) {
      const postsynapticNeuron = this.neurons[j];
      if (postsynapticNeuron.id === presynapticNeuron.id) continue;

      const dx = postsynapticNeuron.x - presynapticNeuron.x;
      const dy = postsynapticNeuron.y - presynapticNeuron.y;
      const distSq = dx * dx + dy * dy;

      if (distSq < maxDistSq) {
        const totalDist = Math.sqrt(distSq);
        this.actionPotentials.push({
          startX: presynapticNeuron.x,
          startY: presynapticNeuron.y,
          targetId: postsynapticNeuron.id,
          progress: 0,
          speed: this.config.spikeSpeed / totalDist, // Progress per frame
          weight: 1 - totalDist / this.config.maxDistance,
        });
      }
    }
  }

  /**
   * Updates traveling action potentials along synaptic clefts.
   * 
   * @returns {void}
   */
  updateActionPotentials() {
    for (let i = this.actionPotentials.length - 1; i >= 0; i--) {
      const ap = this.actionPotentials[i];
      ap.progress += ap.speed;

      if (ap.progress >= 1.0) {
        // Excite target postsynaptic neuron (EPSP injection)
        const target = this.neurons.find((n) => n.id === ap.targetId);
        if (target && target.refractory === 0) {
          target.potential += ap.weight * 0.35; // Excitatory Post-Synaptic Potential
        }
        this.actionPotentials.splice(i, 1);
      }
    }
  }

  /**
   * Draws synaptic connections, action potential pulses, and neuron somas.
   * 
   * @returns {void}
   */
  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    const maxDistSq = this.config.maxDistance * this.config.maxDistance;
    const { synapseColor, neuronColor, spikeColor } = this.config;

    // 1. Draw Synaptic Fibers (Axons / Dendrites)
    for (let i = 0; i < this.neurons.length; i++) {
      const n1 = this.neurons[i];
      for (let j = i + 1; j < this.neurons.length; j++) {
        const n2 = this.neurons[j];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDistSq) {
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / this.config.maxDistance) * 0.38;
          
          this.ctx.beginPath();
          this.ctx.moveTo(n1.x, n1.y);
          this.ctx.lineTo(n2.x, n2.y);
          this.ctx.strokeStyle = `${synapseColor}${alpha})`;
          this.ctx.lineWidth = 0.9 + (1 - dist / this.config.maxDistance) * 1.0;
          this.ctx.stroke();
        }
      }

      // Synaptic fibers to cursor (Electrode probe visualization)
      if (this.cursor.active) {
        const cdx = this.cursor.x - n1.x;
        const cdy = this.cursor.y - n1.y;
        const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

        if (cdist < this.config.cursorRadius) {
          const calpha = (1 - cdist / this.config.cursorRadius) * 0.55;
          this.ctx.beginPath();
          this.ctx.moveTo(n1.x, n1.y);
          this.ctx.lineTo(this.cursor.x, this.cursor.y);
          this.ctx.strokeStyle = `rgba(34, 211, 238, ${calpha})`;
          this.ctx.lineWidth = 1.4;
          this.ctx.stroke();
        }
      }
    }

    // 2. Draw Traveling Action Potentials (Sparks / Voltage Pulses)
    for (let i = 0; i < this.actionPotentials.length; i++) {
      const ap = this.actionPotentials[i];
      const target = this.neurons.find((n) => n.id === ap.targetId);
      if (!target) continue;

      const currentX = ap.startX + (target.x - ap.startX) * ap.progress;
      const currentY = ap.startY + (target.y - ap.startY) * ap.progress;

      this.ctx.beginPath();
      this.ctx.arc(currentX, currentY, 3.2, 0, Math.PI * 2);
      this.ctx.fillStyle = `${spikeColor}1.0)`;
      this.ctx.shadowColor = '#22d3ee';
      this.ctx.shadowBlur = 14;
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // Reset shadow
    }

    // 3. Draw Neuron Somas
    for (let i = 0; i < this.neurons.length; i++) {
      const n = this.neurons[i];
      const isSpiking = n.refractory > 18;
      const glowAlpha = Math.min(1.0, Math.max(0.3, n.potential));

      this.ctx.beginPath();
      this.ctx.arc(n.x, n.y, isSpiking ? n.radius * 1.6 : n.radius, 0, Math.PI * 2);

      if (isSpiking) {
        this.ctx.fillStyle = '#ffffff';
        this.ctx.shadowColor = '#ffffff';
        this.ctx.shadowBlur = 20;
      } else {
        this.ctx.fillStyle = `${neuronColor}${glowAlpha})`;
        this.ctx.shadowColor = '#38bdf8';
        this.ctx.shadowBlur = n.potential * 10;
      }

      this.ctx.fill();
      this.ctx.shadowBlur = 0; // Reset
    }
  }

  /**
   * Main animation loop executing physics and rendering steps.
   * 
   * @returns {void}
   */
  loop() {
    if (this.isPaused) {
      this.animId = null;
      return;
    }

    this.updateNeurons();
    this.updateActionPotentials();
    this.render();

    this.animId = requestAnimationFrame(() => this.loop());
  }

  /**
   * Starts the simulation animation loop.
   * 
   * @returns {void}
   */
  start() {
    if (!this.animId) {
      this.loop();
    }
  }

  /**
   * Updates rendering colors dynamically when theme changes.
   * 
   * @param {Object} colors - New color palette settings.
   * @returns {void}
   */
  updateColors(colors = {}) {
    if (colors.neuronColor) this.config.neuronColor = colors.neuronColor;
    if (colors.spikeColor) this.config.spikeColor = colors.spikeColor;
    if (colors.synapseColor) this.config.synapseColor = colors.synapseColor;
  }

  /**
   * Stops the simulation animation loop.
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

// Instantiate and attach globally on load
window.SynapticCanvas = SynapticCanvas;
