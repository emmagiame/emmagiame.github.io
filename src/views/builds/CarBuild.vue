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
        <span class="badge completed-badge">Completed Upgrades</span>
        <span class="badge planned-badge">Planned Roadmap</span>
      </div>
      <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight">
        Automotive Modding & Engineering
      </h1>
      <p class="text-xl text-gray-600 mt-2 max-w-3xl">
        Hands-on vehicle enhancements focusing on electrical integration, CANbus error mitigation, thermal efficiency, and chassis dynamics.
      </p>
    </header>

    <!-- Completed Projects -->
    <section class="mb-12">
      <h2 class="section-heading">Completed Modifications</h2>

      <div class="mod-card">
        <div class="mod-header">
          <div>
            <h3 class="mod-title">Full Exterior & Interior Halogen to LED Conversion</h3>
            <div class="mod-tags">
              <span class="tag">Electrical</span>
              <span class="tag">CANbus Integration</span>
              <span class="tag">OEM Retrofit</span>
            </div>
          </div>
          <span class="status-pill status-done">Completed</span>
        </div>
        <p class="mod-desc">
          Replaced factory incandescent and halogen lighting with custom LED assemblies across exterior headlights (H7), rear tail light assemblies, brake units, and interior cabin lighting.
        </p>
        <div class="details-box mt-4">
          <h4 class="font-semibold text-gray-800 mb-2">Technical Execution & Challenges:</h4>
          <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
            <li>
              <strong>OEM Housing Inspection:</strong> Inspected factory assemblies and decoded OEM part numbers to confirm socket types and fitment envelopes across inner and outer housings.
            </li>
            <li>
              <strong>Resistance & Error Triage:</strong> Addressed modern vehicle CANbus bulb-out warnings and hyper-flashing by utilizing properly ballasted, CANbus-ready drivers to match factory resistance expectations.
            </li>
            <li>
              <strong>Beam Alignment & Thermal Dissipation:</strong> Verified cutoff geometry in reflector housings to prevent glare for oncoming drivers, while evaluating heatsink clearance within tight factory headlight housings.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Planned Roadmap -->
    <section class="mb-12">
      <h2 class="section-heading">Planned Performance Upgrades</h2>

      <div class="space-y-6">
        <!-- Open-Air Intake -->
        <div class="mod-card">
          <div class="mod-header">
            <div>
              <h3 class="mod-title">Open-Air Performance Intake System</h3>
              <div class="mod-tags">
                <span class="tag">Thermodynamics</span>
                <span class="tag">Acoustics & Flow</span>
                <span class="tag">Powertrain</span>
              </div>
            </div>
            <span class="status-pill status-planned">Planned</span>
          </div>
          <p class="mod-desc">
            Replacing the restrictive factory baffled airbox with a high-flow open-element cone filter, smooth silicone turbo inlet pipe, and a dedicated heat shield.
          </p>
          <div class="details-box mt-4">
            <h4 class="font-semibold text-gray-800 mb-2">Engineering Rationale & Considerations:</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>
                <strong>Flow Restriction & Spool Response:</strong> Eliminating factory internal baffles and corrugated plastic tubing to reduce intake tract drag, maximizing volumetric efficiency and turbo spool response.
              </li>
              <li>
                <strong>Acoustic Resonance:</strong> Unlocking distinct diverter valve blow-off and turbo induction acoustics that are otherwise muted by OEM resonators.
              </li>
              <li>
                <strong>Thermal Deflection Strategy:</strong> Integrating a secondary heat shield and ducting cold ambient air from the front grille scoop to minimize radiant engine-bay heat soak while running an exposed filter element.
              </li>
            </ul>
          </div>
        </div>

        <!-- Sway Bar -->
        <div class="mod-card">
          <div class="mod-header">
            <div>
              <h3 class="mod-title">Upgraded Rear Sway Bar (Anti-Roll Bar) & End Links</h3>
              <div class="mod-tags">
                <span class="tag">Chassis Dynamics</span>
                <span class="tag">Suspension</span>
                <span class="tag">Mechanical Handling</span>
              </div>
            </div>
            <span class="status-pill status-planned">Planned</span>
          </div>
          <p class="mod-desc">
            Installing a larger diameter, solid rear sway bar paired with reinforced end links to tune chassis balance and cornering agility.
          </p>
          <div class="details-box mt-4">
            <h4 class="font-semibold text-gray-800 mb-2">Engineering Rationale:</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>
                <strong>Mitigating Front-Wheel-Drive Understeer:</strong> Increasing rear roll stiffness to redistribute lateral load transfer, producing a more neutral handling profile during high-load cornering.
              </li>
              <li>
                <strong>Body Roll Reduction:</strong> Reducing chassis lean without compromising ride compliance or daily suspension travel on straightaways.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
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
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.completed-badge {
  background: #f0fdf4;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.planned-badge {
  background: #eff6ff;
  color: #1e40af;
  border: 1px solid #bfdbfe;
}

.section-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.25rem;
  border-bottom: 2px solid #f3f4f6;
  padding-bottom: 0.5rem;
}

.mod-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.mod-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  gap: 1rem;
}

.mod-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.mod-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  background: #f3f4f6;
  color: #4b5563;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
}

.status-pill {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  white-space: nowrap;
}

.status-done {
  background: #dcfce7;
  color: #15803d;
}

.status-planned {
  background: #dbeafe;
  color: #1d4ed8;
}

.mod-desc {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
}

.details-box {
  background: #f9fafb;
  border-left: 3px solid #0d9488;
  padding: 0.85rem 1rem;
  border-radius: 0 6px 6px 0;
}
</style>