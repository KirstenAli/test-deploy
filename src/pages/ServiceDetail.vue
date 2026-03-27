<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-cad-navy to-cad-blue text-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ serviceDetail.name }}</h1>
        <p class="text-xl text-gray-200">{{ serviceDetail.tagline }}</p>
      </div>
    </section>

    <!-- Service Overview -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-cad-navy mb-6">{{ serviceDetail.title }}</h2>
            <p class="text-gray-600 mb-4 leading-relaxed">
              {{ serviceDetail.description }}
            </p>
            <ul class="space-y-3 mb-6">
              <li v-for="feature in serviceDetail.features" :key="feature" class="flex items-start">
                <span class="text-cad-blue font-bold mr-3">✓</span>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
            <router-link to="/contact" class="btn-primary">
              Request a Quote
            </router-link>
          </div>
          <div class="bg-gradient-to-br from-cad-blue to-cad-navy rounded-lg p-12 text-center">
            <div class="text-8xl mb-6">{{ serviceDetail.icon }}</div>
            <p class="text-white text-lg">Professional CAD Solutions</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries -->
    <section class="py-16 md:py-24 bg-cad-light">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Industries Served</h2>
        <p class="section-subtitle">This service is used across multiple industries</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="industry in serviceDetail.industries" :key="industry" class="card p-6 text-center">
            <p class="font-semibold text-cad-navy">{{ industry }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h2 class="section-title">What's Included</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="feature in serviceDetail.detailedFeatures" :key="feature.id" class="card p-8">
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-xl font-bold text-cad-navy mb-3">{{ feature.name }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose This Service -->
    <section class="py-16 md:py-24 bg-cad-light">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Why Choose This Service</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="reason in serviceDetail.reasons" :key="reason.id" class="flex items-start space-x-4">
            <div class="text-3xl">{{ reason.icon }}</div>
            <div>
              <h3 class="text-xl font-bold text-cad-navy mb-2">{{ reason.title }}</h3>
              <p class="text-gray-600">{{ reason.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Services -->
    <section v-if="relatedServices.length > 0" class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Related Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <router-link
            v-for="service in relatedServices"
            :key="service.id"
            :to="`/service/${service.id}`"
            class="card p-8 hover:scale-105 transition-transform"
          >
            <div class="text-5xl mb-4">{{ service.icon }}</div>
            <h3 class="text-xl font-bold text-cad-navy mb-2">{{ service.name }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <span class="text-cad-blue font-semibold">Learn More →</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-24 bg-cad-blue text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss how {{ serviceDetail.name }} can benefit your project
        </p>
        <router-link to="/contact" class="btn-secondary">
          Contact Us Today
        </router-link>
      </div>
    </section>

    <!-- Back to Services -->
    <div class="py-8 bg-gray-50">
      <div class="container mx-auto px-4">
        <router-link to="/services" class="text-cad-blue hover:underline flex items-center">
          <span class="mr-2">←</span> Back to All Services
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceDetail',
  data() {
    return {
      serviceDetails: {
        '2d-drawings': {
          id: '2d-drawings',
          name: '2D CAD Drawings',
          tagline: 'Precise technical drawings for all applications',
          icon: '📐',
          title: 'Professional 2D CAD Drawings',
          description: 'From initial concept design through to detailed fabrication shop drawings, we create precise 2D technical drawings that meet your exact specifications. we provide general cad drawings for any business type, from site marked up electrical, fire & security to surveying machinery and factories to layout drawings.',
          features: [
            'General Arrangement (GA) drawings',
            'Detailed fabrication shop drawings',
            'Fine geometric toleranced mechanical drawings',
            'Isometric and schematic views',
            'Assembly and part drawings',
            'DWG, PDF, and DXF formats'
          ],
          industries: ['Engineering', 'Construction', 'Manufacturing', 'Oil & Gas'],
          detailedFeatures: [
            { id: 1, icon: '🎯', name: 'Precision', description: 'Accurate to your specifications with proper tolerancing' },
            { id: 2, icon: '⚡', name: 'Fast Turnaround', description: 'Quick delivery without compromising quality' },
            { id: 3, icon: '🔒', name: 'Professional Standards', description: 'Compliance with industry standards and best practices' }
          ],
          reasons: [
            { id: 1, icon: '✓', title: 'Expert Draughtsmen', description: 'Experienced team with 40+ years in the industry' },
            { id: 2, icon: '⚡', title: 'Quick Delivery', description: 'Fast turnaround without compromising quality' },
            { id: 3, icon: '📐', title: 'Precision', description: 'Meticulous attention to detail and accuracy' },
            { id: 4, icon: '🔒', title: 'Confidential', description: 'All your information is kept strictly confidential' }
          ]
        },
        '3d-modeling': {
          id: '3d-modeling',
          name: '3D CAD Modeling',
          tagline: 'Complex 3D assemblies and detailed part models',
          icon: '🎯',
          title: 'Professional 3D CAD Modeling',
          description: 'We create detailed 3D models and assemblies that bring your designs to life. From mechanical assemblies to subsea equipment, our 3D modeling services provide photorealistic visualization and production-ready drawings.',
          features: [
            'Complex mechanical assemblies',
            'Detailed part models',
            'Photorealistic renderings',
            'Assembly documentation',
            'Exploded view drawings',
            'Production-ready 2D drawings from 3D models'
          ],
          industries: ['Mechanical Engineering', 'Offshore', 'Subsea', 'Manufacturing'],
          detailedFeatures: [
            { id: 1, icon: '🎨', name: 'Visualization', description: 'Realistic 3D renderings for presentations and approvals' },
            { id: 2, icon: '⚙️', name: 'Engineering', description: 'Accurate 3D models for analysis and manufacturing' },
            { id: 3, icon: '📊', name: 'Documentation', description: 'Complete assembly and part drawings derived from 3D models' }
          ],
          reasons: [
            { id: 1, icon: '🎨', title: 'Professional Visualizations', description: 'Photorealistic renderings for client presentations' },
            { id: 2, icon: '⚙️', title: 'Precision Engineering', description: 'Accurate models suitable for analysis and manufacturing' },
            { id: 3, icon: '📐', title: 'Complete Documentation', description: 'Production-ready drawings generated from 3D models' },
            { id: 4, icon: '⚡', title: 'Efficient Updates', description: 'Easy modifications and design changes in 3D format' }
          ]
        },
        'structural-steel': {
          id: 'structural-steel',
          name: 'Structural Steel Drawings',
          tagline: 'Construction and offshore structural solutions',
          icon: '🏗️',
          title: 'Structural Steel Drawings',
          description: 'Our structural steel expertise spans from building frameworks to offshore platforms. We provide complete drawings packages including general arrangements, fabrication details, and assembly drawings.',
          features: [
            'Building frameworks and structures',
            'Offshore platform structures',
            'Bridge and crossing designs',
            'Fabrication detail drawings',
            'Assembly and erection drawings',
            'Connection details and specifications'
          ],
          industries: ['Construction', 'Offshore', 'Infrastructure', 'Oil & Gas'],
          detailedFeatures: [
            { id: 1, icon: '🏗️', name: 'Structural Drawings', description: 'Complete structural steel drawings and analysis' },
            { id: 2, icon: '📋', name: 'Fabrication Drawings', description: 'Detailed shop drawings for fabrication' },
            { id: 3, icon: '🔧', name: 'Assembly Details', description: 'Clear assembly and erection instructions' }
          ],
          reasons: [
            { id: 1, icon: '✓', title: 'Extensive Experience', description: 'Proven track record in structural steel drawings' },
            { id: 2, icon: '🏗️', title: 'Complete Solutions', description: 'From drawings to fabrication documentation' },
            { id: 3, icon: '⚡', title: 'Standards Compliance', description: 'All work complies with relevant engineering standards' },
            { id: 4, icon: '🔒', title: 'Confidential Service', description: 'Your drawings and specifications are protected' }
          ]
        },
        'mechanical-design': {
          id: 'mechanical-design',
          name: 'Mechanical Design',
          tagline: 'Complex mechanical assemblies and systems',
          icon: '⚙️',
          title: 'Mechanical Design & CAD',
          description: 'From concept to detailed production drawings, we handle all aspects of mechanical design. Our services include concept design of subsea assemblies, pipe laying equipment of ships, hydraulic power units.',
          features: [
            'Machine and equipment design',
            'Complex assemblies and subassemblies',
            'Precision component drawings',
            'Tolerance specifications',
            'Assembly instructions',
            '3D to 2D conversion'
          ],
          industries: ['Manufacturing', 'Mechanical Engineering', 'Oil & Gas', 'Subsea'],
          detailedFeatures: [
            { id: 1, icon: '⚙️', name: 'Mechanical Engineering', description: 'Expert mechanical design and analysis' },
            { id: 2, icon: '📐', name: 'Precision', description: 'Accurate drawings with proper tolerancing' },
            { id: 3, icon: '🔧', name: 'Production Ready', description: 'Drawings ready for manufacturing' }
          ],
          reasons: [
            { id: 1, icon: '⚙️', title: 'Mechanical Expertise', description: '40+ years in mechanical design and CAD' },
            { id: 2, icon: '🎯', title: 'Precision & Accuracy', description: 'Meticulous attention to detail in all drawings' },
            { id: 3, icon: '⚡', title: 'Fast Delivery', description: 'Quick turnaround without quality compromises' },
            { id: 4, icon: '🤝', title: 'Collaborative Approach', description: 'We work closely with your team for perfect results' }
          ]
        },
        'piping-systems': {
          id: 'piping-systems',
          name: 'Piping & Hydraulics',
          tagline: 'Complex piping and hydraulic systems design',
          icon: '🔧',
          title: 'Piping & Hydraulic Systems',
          description: 'Specialized in complex piping networks and hydraulic power systems for oil & gas, offshore, and industrial applications. We provide isometric views, schematic diagrams, and detailed routing plans.',
          features: [
            'Isometric piping drawings',
            'Schematic piping diagrams',
            'Hydraulic system design',
            'Pressure and flow analysis',
            'Bill of materials',
            'Installation specifications'
          ],
          industries: ['Oil & Gas', 'Offshore', 'Mechanical', 'Industrial'],
          detailedFeatures: [
            { id: 1, icon: '🔧', name: 'Piping Design', description: 'Complex piping network design and routing' },
            { id: 2, icon: '💧', name: 'Hydraulics', description: 'Hydraulic power systems and schematics' },
            { id: 3, icon: '📋', name: 'Documentation', description: 'Complete isometric and schematic drawings' }
          ],
          reasons: [
            { id: 1, icon: '🔧', title: 'Piping Expertise', description: 'Specialized knowledge in complex piping systems' },
            { id: 2, icon: '⚡', title: 'Industry Standards', description: 'Full compliance with piping design standards' },
            { id: 3, icon: '📐', title: 'Precision Routing', description: 'Optimal routing and configuration' },
            { id: 4, icon: '💡', title: 'Problem Solving', description: 'Expert solutions for challenging layouts' }
          ]
        }
      }
    }
  },
  computed: {
    serviceDetail() {
      const id = this.$route.params.id
      return this.serviceDetails[id] || this.serviceDetails['2d-drawings']
    },
    relatedServices() {
      const currentId = this.$route.params.id
      const serviceIds = Object.keys(this.serviceDetails)
      return serviceIds
        .filter(id => id !== currentId)
        .slice(0, 3)
        .map(id => ({
          id,
          ...this.serviceDetails[id]
        }))
    }
  },
  mounted() {
    document.title = `${this.serviceDetail.name} - CAD Services Scotland`
  },
  watch: {
    '$route'() {
      document.title = `${this.serviceDetail.name} - CAD Services Scotland`
    }
  }
}
</script>

<style scoped>
</style>

