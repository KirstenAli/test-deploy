<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-cad-navy to-cad-blue text-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
        <p class="text-xl text-gray-200">Showcasing our CAD draughting expertise across industries</p>
      </div>
    </section>

    <!-- Filters -->
    <section class="py-8 bg-cad-light">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap gap-4 justify-center">
          <button
            @click="selectedIndustry = null"
            :class="['px-4 py-2 rounded transition-colors',
                     selectedIndustry === null ? 'bg-cad-blue text-white' : 'bg-white text-cad-navy border-2 border-cad-blue']"
          >
            All Projects
          </button>
          <button
            v-for="industry in industries"
            :key="industry"
            @click="selectedIndustry = industry"
            :class="['px-4 py-2 rounded transition-colors',
                     selectedIndustry === industry ? 'bg-cad-blue text-white' : 'bg-white text-cad-navy border-2 border-cad-blue']"
          >
            {{ industry }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="card overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
            @click="selectedProject = project"
          >
            <div class="h-48 bg-gradient-to-br from-cad-blue to-cad-navy flex items-center justify-center">
              <div class="text-6xl">{{ project.icon }}</div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-cad-navy mb-2">{{ project.name }}</h3>
              <p class="text-gray-600 text-sm mb-2">{{ project.industry }}</p>
              <p class="text-gray-600 text-sm">{{ project.description }}</p>
            </div>
          </div>
        </div>
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <p class="text-gray-600 text-lg">No projects found for this industry</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div v-if="selectedProject" class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" @click="selectedProject = null">
      <div class="bg-white rounded-lg max-w-2xl w-full" @click.stop>
        <div class="flex justify-between items-center p-6 border-b">
          <h2 class="text-2xl font-bold text-cad-navy">{{ selectedProject.name }}</h2>
          <button @click="selectedProject = null" class="text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="p-6">
          <div class="mb-6 h-64 bg-gradient-to-br from-cad-blue to-cad-navy rounded flex items-center justify-center">
            <div class="text-8xl">{{ selectedProject.icon }}</div>
          </div>
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-cad-navy">Industry</h3>
              <p class="text-gray-600">{{ selectedProject.industry }}</p>
            </div>
            <div>
              <h3 class="font-semibold text-cad-navy">Project Type</h3>
              <p class="text-gray-600">{{ selectedProject.type }}</p>
            </div>
            <div>
              <h3 class="font-semibold text-cad-navy">Description</h3>
              <p class="text-gray-600">{{ selectedProject.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      selectedProject: null,
      selectedIndustry: null,
      industries: ['Oil & Gas', 'Structural Steel', 'Mechanical', 'Piping', 'Offshore'],
      projects: [
        {
          id: 1,
          name: 'Offshore Platform Layout',
          industry: 'Oil & Gas',
          type: '2D & 3D CAD',
          description: 'Comprehensive platform drawings with mechanical systems',
          details: 'Complex offshore oil and gas platform with detailed mechanical, piping, and structural components.',
          icon: '⛽'
        },
        {
          id: 2,
          name: 'Bridge Structural Drawings',
          industry: 'Structural Steel',
          type: 'Structural Drawings',
          description: 'Large span bridge with detailed fabrication drawings',
          details: 'Detailed structural steel drawings with all fabrication and assembly drawings.',
          icon: '🌉'
        },
        {
          id: 3,
          name: 'Mechanical Subsea System',
          industry: 'Offshore',
          type: '3D Modeling',
          description: 'Subsea control module assembly',
          details: 'Complex 3D mechanical subsea equipment with precision drawings.',
          icon: '🌊'
        },
        {
          id: 4,
          name: 'Piping Network Design',
          industry: 'Piping',
          type: 'Piping Systems',
          description: 'Industrial piping system layout and routing',
          details: 'Complex piping network with isometric and schematic drawings.',
          icon: '🔧'
        },
        {
          id: 5,
          name: 'Pump Assembly',
          industry: 'Mechanical',
          type: '3D & 2D Drawings',
          description: 'Industrial pump with detailed component drawings',
          details: 'Detailed 3D model and production-ready 2D drawings for manufacturing.',
          icon: '⚙️'
        },
        {
          id: 6,
          name: 'Industrial Gearbox',
          industry: 'Mechanical',
          type: 'Mechanical Design',
          description: 'Heavy-duty gearbox assembly drawings',
          details: 'Complete gearbox assembly with tolerance specifications.',
          icon: '⚙️'
        },
        {
          id: 7,
          name: 'Process Vessel',
          industry: 'Oil & Gas',
          type: 'Pressure Equipment',
          description: 'Pressure vessel for hydrocarbon processing',
          details: 'Detailed pressure vessel drawings with all fittings and nozzles.',
          icon: '⛽'
        },
        {
          id: 8,
          name: 'Structural Frame',
          industry: 'Structural Steel',
          type: 'Structural Drawings',
          description: 'Multi-story building structural framework',
          details: 'Complete structural steel frame with all connections and details.',
          icon: '🏗️'
        },
        {
          id: 9,
          name: 'Subsea Manifold',
          industry: 'Offshore',
          type: '3D Modeling',
          description: 'Subsea production manifold assembly',
          details: 'Complex subsea manifold with integrated control systems.',
          icon: '🌊'
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (!this.selectedIndustry) {
        return this.projects
      }
      return this.projects.filter(p => p.industry === this.selectedIndustry)
    }
  },
  mounted() {
    document.title = 'Gallery - CAD Services Scotland'
  }
}
</script>

<style scoped>
</style>

