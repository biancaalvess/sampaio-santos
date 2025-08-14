<template>
  <div id="app">
    <!-- Header -->
    <Header />
    
    <!-- Hero Section -->
    <Hero />
    
    <!-- Serviços -->
    <Services />
    
    <!-- Projetos -->
    <Projects />
    
    <!-- Footer -->
    <Footer />
    
    <!-- Modal de zoom interativo -->
    <ZoomModal 
      v-if="showZoomModal"
      :image-src="selectedImage"
      @close="closeZoomModal"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
import ZoomModal from './components/ZoomModal.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Services,
    Projects,
    Footer,
    ZoomModal
  },
  data() {
    return {
      showZoomModal: false,
      selectedImage: ''
    }
  },
  methods: {
    openZoomModal(imageSrc) {
      this.selectedImage = imageSrc
      this.showZoomModal = true
    },
    closeZoomModal() {
      this.showZoomModal = false
      this.selectedImage = ''
    }
  },
  provide() {
    return {
      openZoomModal: this.openZoomModal
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
