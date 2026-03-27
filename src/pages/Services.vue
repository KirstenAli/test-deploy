<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-cad-navy to-cad-blue text-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p class="text-xl text-gray-200">Professional CAD draughting solutions for every industry</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Service Categories</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link
            v-for="service in services"
            :key="service.id"
            :to="`/service/${service.id}`"
            class="card p-8 hover:scale-105 transition-transform cursor-pointer"
          >
            <div class="text-5xl mb-4">{{ service.icon }}</div>
            <h3 class="text-2xl font-bold text-cad-navy mb-3">{{ service.name }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <div class="text-cad-blue font-semibold flex items-center">
              Learn More <span class="ml-2">→</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Industries Served -->
    <section class="py-16 md:py-24 bg-cad-light">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Industries We Serve</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="industry in industries" :key="industry.id" class="card p-6 text-center">
            <div class="text-4xl mb-3">{{ industry.icon }}</div>
            <h3 class="text-lg font-bold text-cad-navy">{{ industry.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Services -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Why Choose Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-8">
            <div class="text-4xl mb-4">✓</div>
            <h3 class="text-xl font-bold text-cad-navy mb-3">Expert Knowledge</h3>
            <p class="text-gray-600">
              With 40+ years of experience, we understand the nuances of CAD design across multiple industries
            </p>
          </div>
          <div class="card p-8">
            <div class="text-4xl mb-4">⚡</div>
            <h3 class="text-xl font-bold text-cad-navy mb-3">Fast Turnaround</h3>
            <p class="text-gray-600">
              Quick delivery without compromising quality. We meet deadlines because we know time is money
            </p>
          </div>
          <div class="card p-8">
            <div class="text-4xl mb-4">🎯</div>
            <h3 class="text-xl font-bold text-cad-navy mb-3">Precision & Accuracy</h3>
            <p class="text-gray-600">
              Every drawing is created to your exact specifications with meticulous attention to detail
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-24 bg-cad-blue text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your specific CAD draughting needs
        </p>
        <router-link to="/contact" class="btn-secondary">
          Request a Quote
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          id: '2d-drawings',
          name: '2D CAD Drawings',
          description: 'Precise 2D technical drawings for all applications',
          icon: '📐'
        },
        {
          id: '3d-modeling',
          name: '3D CAD Modeling',
          description: 'Complex 3D assemblies and detailed part models',
          icon: '🎯'
        },
        {
          id: 'concept-design',
          name: 'Concept Design',
          description: 'From initial concept to detailed fabrication drawings',
          icon: '💡'
        },
        {
          id: 'structural-steel',
          name: 'Structural Steel',
          description: 'Construction and offshore structural design',
          icon: '🏗️'
        },
        {
          id: 'mechanical-design',
          name: 'Mechanical Design',
          description: 'Mechanical assemblies and systems design',
          icon: '⚙️'
        },
        {
          id: 'piping-systems',
          name: 'Piping & Hydraulics',
          description: 'Complex piping and hydraulic power systems',
          icon: '🔧'
        }
      ],
      industries: [
        { id: 1, name: 'Engineering', icon: '🏢' },
        { id: 2, name: 'Construction', icon: '🏗️' },
        { id: 3, name: 'Oil & Gas', icon: '⛽' },
        { id: 4, name: 'Offshore', icon: '⚓' },
        { id: 5, name: 'Subsea', icon: '🌊' },
        { id: 6, name: 'Mechanical', icon: '⚙️' },
        { id: 7, name: 'Piping', icon: '🔧' },
        { id: 8, name: 'Water Treatment', icon: '💧' },
        { id: 9, name: 'Railway', icon: '🚂' },
        { id: 10, name: 'Motorway', icon: '🛣️' },
        { id: 11, name: 'structural', icon: '🏗️' },
        { id: 12, name: 'Glazed Structures', icon: '🪟' }
      ]
    }
  },
  mounted() {
    document.title = 'Services - CAD Services Scotland'
  }
}
</script>

<style scoped>
</style>

