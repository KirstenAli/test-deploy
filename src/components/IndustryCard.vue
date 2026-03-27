<template>
  <div class="card p-6 text-center hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
    <div class="text-4xl mb-3">{{ industry.icon }}</div>
    <h3 class="text-lg font-bold text-cad-navy mb-2">{{ industry.name }}</h3>
    <p class="text-sm text-gray-600">{{ industry.desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'IndustryCard',
  props: {
    industry: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>

