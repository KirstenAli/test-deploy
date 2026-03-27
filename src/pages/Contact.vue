<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-cad-navy to-cad-blue text-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p class="text-xl text-gray-200">Get in touch for a free consultation</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Contact Info Cards -->
          <div class="card p-8 text-center">
            <div class="text-4xl mb-4">📞</div>
            <h3 class="text-xl font-bold text-cad-navy mb-2">Phone</h3>
            <p class="text-gray-600">+44(0)141 563 4276</p>
          </div>
          <div class="card p-8 text-center">
            <div class="text-4xl mb-4">📧</div>
            <h3 class="text-xl font-bold text-cad-navy mb-2">Email</h3>
            <p class="text-gray-600">
              <a href="mailto:cadservicesscotland@gmail.com" class="text-cad-blue hover:underline">
                cadservicesscotland@gmail.com
              </a>
            </p>
          </div>
          <div class="card p-8 text-center">
            <div class="text-4xl mb-4">🕐</div>
            <h3 class="text-xl font-bold text-cad-navy mb-2">Response Time</h3>
            <p class="text-gray-600">Usually within 24 hours</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="max-w-2xl mx-auto card p-8 md:p-12">
          <h2 class="text-3xl font-bold text-cad-navy mb-8 text-center">Send us a Message</h2>

          <form @submit.prevent="submitForm" v-if="!submitted">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <!-- Name Field -->
              <div>
                <label class="block text-gray-700 font-semibold mb-2">
                  Name *
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cad-blue"
                  placeholder="Your Name"
                  @blur="validateField('name')"
                >
                <p v-if="errors.name" class="text-red-600 text-sm mt-1">{{ errors.name }}</p>
              </div>

              <!-- Email Field -->
              <div>
                <label class="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cad-blue"
                  placeholder="your@email.com"
                  @blur="validateField('email')"
                >
                <p v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email }}</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <!-- Phone Field -->
              <div>
                <label class="block text-gray-700 font-semibold mb-2">
                  Phone
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cad-blue"
                  placeholder="+44 (0)1234 567890"
                >
              </div>

              <!-- Company Field -->
              <div>
                <label class="block text-gray-700 font-semibold mb-2">
                  Company
                </label>
                <input
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cad-blue"
                  placeholder="Your Company"
                >
              </div>
            </div>

            <!-- Project Type Field -->
            <div class="mb-6">
              <label class="block text-gray-700 font-semibold mb-2">
                Project Type *
              </label>
              <select
                v-model="form.projectType"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cad-blue"
                @blur="validateField('projectType')"
              >
                <option value="">Select a project type</option>
                <option value="2d-drawings">2D CAD Drawings</option>
                <option value="3d-modeling">3D CAD Modeling</option>
                <option value="structural">Structural Design</option>
                <option value="mechanical">Mechanical Design</option>
                <option value="piping">Piping Systems</option>
                <option value="other">Other</option>
              </select>
              <p v-if="errors.projectType" class="text-red-600 text-sm mt-1">{{ errors.projectType }}</p>
            </div>

            <!-- Message Field -->
            <div class="mb-6">
              <label class="block text-gray-700 font-semibold mb-2">
                Message *
              </label>
              <textarea
                v-model="form.message"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cad-blue"
                placeholder="Tell us about your project..."
                rows="6"
                @blur="validateField('message')"
              ></textarea>
              <p v-if="errors.message" class="text-red-600 text-sm mt-1">{{ errors.message }}</p>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-center">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div v-else class="text-center py-12">
            <div class="text-6xl mb-4">✓</div>
            <h3 class="text-2xl font-bold text-cad-navy mb-4">Thank You!</h3>
            <p class="text-gray-600 mb-6">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button
              @click="resetForm"
              class="btn-secondary"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Info Section -->
    <section class="py-16 md:py-24 bg-cad-light">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Let's Collaborate</h2>
        <p class="section-subtitle max-w-2xl mx-auto">
          Whether you have a new project or need support for an existing one, we're here to help.
          Contact us today to discuss how we can provide expert CAD draughting solutions for your business.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="card p-8 text-center">
            <div class="text-4xl mb-4">🎯</div>
            <h3 class="text-xl font-bold text-cad-navy mb-3">Qualified Team</h3>
            <p class="text-gray-600">
              Experienced CAD professionals ready to deliver your project
            </p>
          </div>
          <div class="card p-8 text-center">
            <div class="text-4xl mb-4">⚡</div>
            <h3 class="text-xl font-bold text-cad-navy mb-3">Quick Response</h3>
            <p class="text-gray-600">
              We prioritize your inquiry and respond promptly
            </p>
          </div>
          <div class="card p-8 text-center">
            <div class="text-4xl mb-4">🔒</div>
            <h3 class="text-xl font-bold text-cad-navy mb-3">Confidential</h3>
            <p class="text-gray-600">
              Your information and designs are completely secure with us
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      },
      errors: {},
      submitted: false,
      isSubmitting: false
    }
  },
  methods: {
    validateField(field) {
      this.errors[field] = ''

      if (field === 'name' && !this.form.name) {
        this.errors.name = 'Name is required'
      }

      if (field === 'email') {
        if (!this.form.email) {
          this.errors.email = 'Email is required'
        } else if (!this.isValidEmail(this.form.email)) {
          this.errors.email = 'Please enter a valid email address'
        }
      }

      if (field === 'projectType' && !this.form.projectType) {
        this.errors.projectType = 'Please select a project type'
      }

      if (field === 'message' && !this.form.message) {
        this.errors.message = 'Message is required'
      }
    },

    validateForm() {
      this.errors = {}

      if (!this.form.name) {
        this.errors.name = 'Name is required'
      }

      if (!this.form.email) {
        this.errors.email = 'Email is required'
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address'
      }

      if (!this.form.projectType) {
        this.errors.projectType = 'Please select a project type'
      }

      if (!this.form.message) {
        this.errors.message = 'Message is required'
      }

      return Object.keys(this.errors).length === 0
    },

    isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    },

    async submitForm() {
      if (!this.validateForm()) {
        return
      }

      this.isSubmitting = true

      try {
        // Send to Formspree
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form)
        })

        if (!response.ok) {
          throw new Error('Failed to send message')
        }

        console.log('Form submitted:', this.form)

        this.submitted = true
      } catch (error) {
        console.error('Error submitting form:', error)
        this.errors.submit = 'Failed to send message. Please try again.'
      } finally {
        this.isSubmitting = false
      }
    },

    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      }
      this.errors = {}
      this.submitted = false
    }
  },
  mounted() {
    document.title = 'Contact Us - CAD Services Scotland'
  }
}
</script>

<style scoped>
</style>

