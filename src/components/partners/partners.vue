<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="relative overflow-hidden" ref="scrollContainer">
        <div class="animate-scroll flex space-x-16 logo-container">
          <img v-for="(logo, index) in logos" :key="index" class="max-h-12 w-auto object-contain" :src="logo.src" :alt="logo.alt" />
          <img v-for="(logo, index) in logos" :key="`duplicate-${index}`" class="max-h-12 w-auto object-contain" :src="logo.src" :alt="logo.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const scrollContainer = ref(null);

const logos = [
  { src: "./assets/x_ncc.png", alt: "Transistor" },
  { src: "./assets/x_outsource.png", alt: "Reform" },
  { src: "./assets/x_sudo.png", alt: "Tuple" },
  { src: "./assets/x_roundstone.png", alt: "SavvyCal" },
  { src: "./assets/x_afreximbank.png", alt: "Statamic" },
];

onMounted(() => {
  const container = scrollContainer.value;
  const logoContainer = container.querySelector('.logo-container');
  const containerWidth = logoContainer.offsetWidth / 2; // Divide by 2 because we duplicated the logos
  const animationDuration = containerWidth / 30; // Adjust speed here (lower number = faster)
  document.documentElement.style.setProperty('--animation-duration', `${animationDuration}s`);
});
</script>

<style scoped>
.logo-container {
  width: max-content;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll var(--animation-duration) linear infinite;
}
</style>