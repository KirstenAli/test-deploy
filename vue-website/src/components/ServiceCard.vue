<template>
  <div class="card p-8 flex flex-col hover:scale-105 transition-transform cursor-pointer">
    <div class="text-5xl mb-4">{{ service.icon }}</div>
    <h3 class="text-xl font-bold text-cad-navy mb-2">{{ service.name }}</h3>
    <p class="text-gray-600 flex-grow">{{ service.description }}</p>
    <router-link
      v-if="service.id"
      :to="`/service/${service.id}`"
      class="text-cad-blue font-semibold hover:underline mt-4 inline-block"
    >
      Learn More →
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>

