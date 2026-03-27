<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-cad-navy to-cad-blue text-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">About CAD Services Scotland</h1>
        <p class="text-xl text-gray-200">Professional draughting excellence since 1998</p>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-cad-navy mb-6">Who We Are</h2>
            <p class="text-gray-600 mb-4 leading-relaxed">
              CAD Services Scotland Ltd has been a trusted partner in professional draughting services since 1998.
              With over 40 years of experience, we understand what industry demands: professional service, flexibility,
              and quick turnaround times.
            </p>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Our core mission is simple: deliver the highest quality work in a timely manner. We recognise the importance
              of deadlines because we know "time is money". You only pay for the time spent on your project – if there's
              a hold-up waiting for information from a third party, it costs you nothing.
            </p>
            <p class="text-gray-600 leading-relaxed">
              All information provided by you will be kept strictly confidential. We are happy to sign non-disclosure
              agreements to protect your intellectual property and business interests.
            </p>
          </div>
          <div class="bg-cad-light rounded-lg p-8">
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="text-3xl">✓</div>
                <div>
                  <h3 class="text-xl font-bold text-cad-navy mb-2">Established Reputation</h3>
                  <p class="text-gray-600">40+ years of trusted service in CAD draughting</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="text-3xl">⚡</div>
                <div>
                  <h3 class="text-xl font-bold text-cad-navy mb-2">Fast Delivery</h3>
                  <p class="text-gray-600">Quick turnaround without compromising quality</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="text-3xl">🔒</div>
                <div>
                  <h3 class="text-xl font-bold text-cad-navy mb-2">Confidentiality</h3>
                  <p class="text-gray-600">NDA support and strict information protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience & Expertise -->
    <section class="py-16 md:py-24 bg-cad-light">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Our Expertise</h2>
        <p class="section-subtitle">We have many years of experience across multiple industries and disciplines</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="expertise in expertiseAreas" :key="expertise.id" class="card p-6">
            <h3 class="text-lg font-bold text-cad-navy mb-3">{{ expertise.title }}</h3>
            <p class="text-gray-600 text-sm">{{ expertise.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h2 class="section-title">What We Offer</h2>
        <p class="section-subtitle">Comprehensive CAD draughting services for every need</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start space-x-4">
            <div class="text-2xl">📐</div>
            <div>
              <h3 class="text-xl font-bold text-cad-navy mb-2">General Arrangement Drawings</h3>
              <p class="text-gray-600">From concept design through to detailed fabrication shop drawings</p>
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <div class="text-2xl">🎯</div>
            <div>
              <h3 class="text-xl font-bold text-cad-navy mb-2">Precision Drawings</h3>
              <p class="text-gray-600">Fine geometric toleranced mechanical drawings to exact specifications</p>
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <div class="text-2xl">⚙️</div>
            <div>
              <h3 class="text-xl font-bold text-cad-navy mb-2">Mechanical Design</h3>
              <p class="text-gray-600">Complex mechanical assemblies, piping systems, and hydraulic power systems</p>
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <div class="text-2xl">🏗️</div>
            <div>
              <h3 class="text-xl font-bold text-cad-navy mb-2">Structural Drawings</h3>
              <p class="text-gray-600">Structural steel for construction and offshore applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overflow Work -->
    <section class="py-16 md:py-24 bg-cad-light">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-cad-navy mb-6 text-center">Overstretched Drawing Office?</h2>
        <p class="text-gray-600 text-center mb-8 max-w-2xl mx-auto text-lg">
          If your company already has an existing drawing office but is overstretched, we can take on board your excess
          work. Let us help you meet your deadlines while you focus on your core activities.
        </p>
        <div class="text-center">
          <router-link to="/contact" class="btn-primary">
            Let's Talk About Your Project
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      expertiseAreas: [
        {
          id: 1,
          title: 'General Engineering & Construction',
          description: 'Comprehensive solutions for engineering and construction projects'
        },
        {
          id: 2,
          title: 'Oil & Gas',
          description: 'Specialized expertise in oil and gas industry draughting'
        },
        {
          id: 3,
          title: 'Offshore & Subsea',
          description: 'Subsea projects and surface vessel projects for subsea'
        },
        {
          id: 4,
          title: 'Structural Steel',
          description: 'Structural steel drawings for construction and offshore applications'
        },
        {
          id: 5,
          title: 'Mechanical Systems',
          description: 'Mechanical assemblies, hydraulic and piping systems'
        },
        {
          id: 6,
          title: 'Infrastructure',
          description: 'Water treatment plants, railway and motorway structures'
        }
      ]
    }
  },
  mounted() {
    document.title = 'About Us - CAD Services Scotland'
  }
}
</script>

<style scoped>
</style>

