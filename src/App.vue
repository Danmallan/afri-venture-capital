<script setup>
import Hero from './components/hero/afri_hero.vue'
import Partners from './components/partners/partners.vue'
import AfriVenturesCTA from './components/afri-cta/afri_cta.vue'
import GarageCTA from './components/garage-cta/afri_cta.vue'
import ToomtiCTA from './components/toomti-cta/toomti_cta.vue'
import AfriVenturesCTA2 from './components/afri-cta2/afri_cta.vue'
import Features from './components/features/afri_features.vue'
import Footer from './components/footer/afri_footer.vue'
</script>

<template>
  <main>
    <Hero />
    <Partners />
    <AfriVenturesCTA />
    <GarageCTA />
    <AfriVenturesCTA2 />
    <Features />
    <Footer />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
