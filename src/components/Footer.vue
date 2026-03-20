<template>
  <footer class="bg-cad-navy text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-xl font-bold text-cad-blue mb-4">CAD Services Scotland</h3>
          <p class="text-gray-300 text-sm mb-4">
            Professional CAD draughting services since 1998. Expert solutions for engineering, construction, and beyond.
          </p>
          <p class="text-gray-400 text-xs">
            Confidentiality • Quality • Fast Turnaround
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-300 hover:text-cad-blue transition-colors">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-cad-blue transition-colors">
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="text-gray-300 hover:text-cad-blue transition-colors">
                Services
              </router-link>
            </li>
            <li>
              <router-link to="/gallery" class="text-gray-300 hover:text-cad-blue transition-colors">
                Gallery
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Our Services</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/service/2d-drawings" class="text-gray-300 hover:text-cad-blue transition-colors">
                2D CAD Drawings
              </router-link>
            </li>
            <li>
              <router-link to="/service/3d-modeling" class="text-gray-300 hover:text-cad-blue transition-colors">
                3D CAD Modeling
              </router-link>
            </li>
            <li>
              <router-link to="/service/structural-steel" class="text-gray-300 hover:text-cad-blue transition-colors">
                Structural Steel
              </router-link>
            </li>
            <li>
              <router-link to="/service/piping-systems" class="text-gray-300 hover:text-cad-blue transition-colors">
                Piping Systems
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-cad-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.81l.286 1.643a1 1 0 01-.502 1.21l-1.197.604A1 1 0 005.45 9.65c2.56 2.559 5.828 5.821 8.383 8.38a1 1 0 001.12.231l.604-1.199a1 1 0 011.21-.502l1.643.286a1 1 0 01.81.986V17a1 1 0 01-1 1H2a1 1 0 01-1-1V3z"></path>
              </svg>
              <div class="text-gray-300">
                <p>+44 (0)1382 432345</p>
              </div>
            </div>
            <div class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-cad-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <div class="text-gray-300">
                <p><a href="mailto:info@cadservices.co.uk" class="hover:text-cad-blue">info@cadservices.co.uk</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-700 pt-8">
        <div class="text-center text-gray-400 text-sm">
          <p>&copy; {{ currentYear }} CAD Services Scotland Ltd. All rights reserved. | Established 1998</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
  margin-top: auto;
}
</style>

