<template>
  <div class="page-container">
    <Button 
      label="Back to Builds" 
      icon="pi pi-arrow-left" 
      text 
      @click="$router.push('/projects/custombuilds')" 
      class="mb-6"
    />

    <!-- Header Section -->
    <header class="mb-10">
      <div class="flex items-center gap-3 mb-2">
        <span class="badge">Embedded Systems</span>
        <span class="badge">Hardware Prototyping</span>
      </div>
      <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight">
        Portable e-Paper E-Reader
      </h1>
      <p class="text-xl text-gray-600 mt-2 max-w-3xl">
        A custom standalone handheld e-reader engineered with an RP2040 microcontroller, an ultra-low-power e-Paper display, external MicroSD storage, and custom MicroPython firmware.
      </p>
    </header>

    <!-- Project Overview Grid -->
    <div class="specs-grid mb-12">
      <div class="spec-card">
        <div class="spec-label">Microcontroller</div>
        <div class="spec-val">Raspberry Pi Pico (RP2040)</div>
      </div>
      <div class="spec-card">
        <div class="spec-label">Display</div>
        <div class="spec-val">Waveshare 3.7" e-Paper Display</div>
      </div>
      <div class="spec-card">
        <div class="spec-label">Protocols & I/O</div>
        <div class="spec-val">Dual SPI (Display & MicroSD) + GPIO</div>
      </div>
      <div class="spec-card">
        <div class="spec-label">Power & Firmware</div>
        <div class="spec-val">LiPo + TP4056 | MicroPython</div>
      </div>
    </div>

    <!-- Main Content Breakdown -->
    <article class="content-body space-y-10 text-gray-700">
      <section>
        <h2 class="section-heading">Project Motivation & Objectives</h2>
        <p>
          The goal of this project was to design and prototype a distraction-free, highly portable e-reader from the ground up. Rather than relying on a commercial operating system, I wanted to explore low-level hardware control, power management optimization, and peripheral bus communication on an ARM Cortex-M0+ architecture.
        </p>
      </section>

      <section>
        <h2 class="section-heading">Hardware Architecture & Bus Segregation</h2>
        <p>
          One of the core architectural decisions was managing multiple SPI peripherals without line contention:
        </p>
        <ul class="list-disc list-inside space-y-2 mt-3 ml-2">
          <li>
            <strong>Dedicated SPI Buses:</strong> Dedicated the primary SPI bus to the Waveshare e-Paper display and routed external MicroSD card operations to a secondary SPI bus to prevent clock-rate mismatches and transfer collisions.
          </li>
          <li>
            <strong>Hardware Handshaking:</strong> Implemented low-level status monitoring of the display’s hardware <code>BUSY</code> pin to ensure clean frame-buffer commits before issuing subsequent refresh or sleep commands.
          </li>
          <li>
            <strong>Power Management:</strong> Integrated a rechargeable LiPo battery managed by a TP4056 charging circuit and low-dropout regulation to maintain 3.3V rail stability during peak display refresh cycles.
          </li>
        </ul>
      </section>

      <section>
        <h2 class="section-heading">Firmware & Software Implementation</h2>
        <p>
          The firmware was built using <strong>MicroPython</strong>, designed for modularity and minimal memory footprint:
        </p>
        <div class="callout-box mt-3">
          <ul class="space-y-2">
            <li><strong>Display Driver & LUTs:</strong> Configured custom lookup tables (LUTs) for partial vs. full screen refreshes to reduce page-turn latency while eliminating ghosting artifacts.</li>
            <li><strong>File System & Parsing:</strong> Developed custom file-parsing scripts to stream text blocks and images directly from the MicroSD FAT filesystem into the Pico's SRAM frame buffer.</li>
            <li><strong>GPIO Event Handling:</strong> Configured interrupt-driven tactile buttons for tactile navigation (page forward, backward, wake/sleep) to conserve compute cycles.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="section-heading">Key Takeaways & Next Steps</h2>
        <p>
          Through breadboard testing, signal debugging, and power profiling, the prototype successfully validated low-energy rendering and reliable filesystem indexing. Future iterations include designing a custom PCB with a compact RP2040-Zero footprint and 3D printing an ergonomic enclosure modeled in SolidWorks.
        </p>
      </section>
    </article>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
</script>

<style scoped>
.page-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.badge {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  background: #f0fdf4;
  color: #166534;
  border: 1px solid #bbf7d0;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.spec-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
}

.spec-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #6b7280;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}

.spec-val {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1f2937;
}

.section-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  border-bottom: 2px solid #f3f4f6;
  padding-bottom: 0.5rem;
}

.content-body p {
  line-height: 1.75;
  font-size: 1.05rem;
}

.callout-box {
  background: #f8fafc;
  border-left: 4px solid #0d9488;
  padding: 1rem 1.25rem;
  border-radius: 0 8px 8px 0;
}
</style>