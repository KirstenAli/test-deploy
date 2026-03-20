<template>
  <header class="bg-cad-navy text-white shadow-lg sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
        <div class="text-2xl font-bold text-cad-blue">CAD</div>
        <div class="text-lg">Services Scotland</div>
      </router-link>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex items-center space-x-8">
        <li>
          <router-link
            to="/"
            class="hover:text-cad-blue transition-colors"
            :class="{ 'text-cad-blue': $route.path === '/' }"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="hover:text-cad-blue transition-colors"
            :class="{ 'text-cad-blue': $route.path === '/about' }"
          >
            About Us
          </router-link>
        </li>
        <li>
          <router-link
            to="/services"
            class="hover:text-cad-blue transition-colors"
            :class="{ 'text-cad-blue': $route.path === '/services' }"
          >
            Services
          </router-link>
        </li>
        <li>
          <router-link
            to="/gallery"
            class="hover:text-cad-blue transition-colors"
            :class="{ 'text-cad-blue': $route.path === '/gallery' }"
          >
            Gallery
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="btn-primary"
          >
            Contact Us
          </router-link>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-white focus:outline-none"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Navigation -->
    <transition name="slide-down">
      <div v-if="mobileMenuOpen" class="md:hidden bg-cad-navy border-t border-gray-700">
        <ul class="container mx-auto px-4 py-4 space-y-2">
          <li>
            <router-link
              to="/"
              class="block py-2 hover:text-cad-blue"
              @click="mobileMenuOpen = false"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="block py-2 hover:text-cad-blue"
              @click="mobileMenuOpen = false"
            >
              About Us
            </router-link>
          </li>
          <li>
            <router-link
              to="/services"
              class="block py-2 hover:text-cad-blue"
              @click="mobileMenuOpen = false"
            >
              Services
            </router-link>
          </li>
          <li>
            <router-link
              to="/gallery"
              class="block py-2 hover:text-cad-blue"
              @click="mobileMenuOpen = false"
            >
              Gallery
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="btn-primary block text-center"
              @click="mobileMenuOpen = false"
            >
              Contact Us
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  watch: {
    '$route'() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

