<template>
  <div>
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-cad-navy to-cad-blue text-white py-20 md:py-32">
      <div class="container mx-auto px-4 text-center animate-fade-in">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Expert CAD Solutions</h1>
        <p class="text-xl md:text-2xl mb-4 text-gray-200">For Every Project, Every Industry</p>
        <p class="text-lg md:text-xl mb-8 text-gray-300">Professional draughting services since 1998</p>
        <router-link to="/contact" class="btn-primary inline-block hover:scale-105 transition-transform">
          Get a Quote
        </router-link>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :service="service"
          />
        </div>
        <div class="text-center mt-12">
          <router-link to="/services" class="btn-secondary">
            View All Services
          </router-link>
        </div>
      </div>
    </section>

    <!-- Industries Served -->
    <section class="py-16 md:py-24 bg-cad-light">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Industries We Serve</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <IndustryCard
            v-for="industry in industries.slice(0, 8)"
            :key="industry.id"
            :industry="industry"
          />
        </div>
        <div class="text-center mt-12">
          <router-link to="/services" class="btn-primary">
            Explore All Industries
          </router-link>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Why Choose CAD Services Scotland?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-8">
            <div class="text-4xl mb-4">⚡</div>
            <h3 class="text-2xl font-bold text-cad-navy mb-3">Quick Turnaround</h3>
            <p class="text-gray-600">
              Fast delivery without compromising quality. We understand that time is money and deliver on schedules.
            </p>
          </div>
          <div class="card p-8">
            <div class="text-4xl mb-4">🔒</div>
            <h3 class="text-2xl font-bold text-cad-navy mb-3">Confidential</h3>
            <p class="text-gray-600">
              All information is kept strictly confidential. We're happy to sign NDAs to protect your IP.
            </p>
          </div>
          <div class="card p-8">
            <div class="text-4xl mb-4">✓</div>
            <h3 class="text-2xl font-bold text-cad-navy mb-3">Reliable & Professional</h3>
            <p class="text-gray-600">
              Established reputation with 40+ years experience. We deliver promises we can keep, building long-term relationships.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-cad-blue text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Have a project that needs expert CAD draughting? Contact us today for a free consultation.
        </p>
        <router-link to="/contact" class="btn-secondary">
          Contact Us Now
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from '../components/ServiceCard.vue'
import IndustryCard from '../components/IndustryCard.vue'

export default {
  name: 'Home',
  components: {
    ServiceCard,
    IndustryCard
  },
  data() {
    return {
      services: [
        { id: 1, name: '2D CAD Drawings', description: 'Precise 2D technical drawings', icon: '📐' },
        { id: 2, name: '3D CAD Modeling', description: 'Complex 3D assemblies and parts', icon: '🎯' },
        { id: 3, name: 'Structural Steel', description: 'Construction and offshore structures', icon: '🏗️' },
        { id: 4, name: 'Mechanical Design', description: 'Mechanical assemblies and systems', icon: '⚙️' }
      ],
      industries: [
        { id: 1, name: 'Engineering', desc: 'General engineering solutions', icon: '🏢' },
        { id: 2, name: 'Construction', desc: 'Building and infrastructure', icon: '🏗️' },
        { id: 3, name: 'Oil & Gas', desc: 'Energy sector expertise', icon: '⛽' },
        { id: 4, name: 'Offshore', desc: 'Offshore platform design', icon: '⚓' },
        { id: 5, name: 'Subsea', desc: 'Subsea systems', icon: '🌊' },
        { id: 6, name: 'Mechanical', desc: 'Mechanical systems', icon: '⚙️' },
        { id: 7, name: 'Piping', desc: 'Piping & hydraulics', icon: '🔧' },
        { id: 8, name: 'Water Treatment', desc: 'Water systems', icon: '💧' }
      ]
    }
  },
  mounted() {
    document.title = 'CAD Services Scotland - Expert CAD Draughting Services'
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #1a1f3a 0%, #0066cc 100%);
}
</style>

