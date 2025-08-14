<template>
  <section id="projetos" class="projects-section">
    <h2 class="section-title">Projetos</h2>
    
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div 
          class="carousel-track"
          :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }"
        >
          <div 
            v-for="(project, index) in projects" 
            :key="index"
            class="carousel-slide"
            :style="{ width: slideWidth + 'px' }"
          >
            <div class="project-card">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="project-image"
                @click="openZoomModal(project.image)"
              />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Botões de navegação -->
      <button 
        class="nav-btn prev-btn" 
        @click="previousSlide"
        :disabled="currentIndex === 0"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button 
        class="nav-btn next-btn" 
        @click="nextSlide"
        :disabled="currentIndex === maxIndex"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
      
      <!-- Indicadores -->
      <div class="indicators">
        <button 
          v-for="(project, index) in projects" 
          :key="index"
          class="indicator"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  inject: ['openZoomModal'],
  data() {
    return {
      currentIndex: 0,
      slideWidth: 400,
      projects: [
        {
          title: 'Projeto 1',
          image: '/image/projeto-01.png'
        },
        {
          title: 'Projeto 2',
          image: '/image/projeto-02.png'
        },
        {
          title: 'Projeto 3',
          image: '/image/projeto-03.png'
        },
        {
          title: 'Projeto 4',
          image: '/image/projeto-04.png'
        },
        {
          title: 'Projeto 5',
          image: '/image/projeto-05.jpg'
        },
        {
          title: 'Projeto 6',
          image: '/image/projeto-06.jpg'
        },
        {
          title: 'Projeto 7',
          image: '/image/projeto-07.jpg'
        }
      ]
    }
  },
  computed: {
    maxIndex() {
      return Math.max(0, this.projects.length - this.getSlidesPerView())
    }
  },
  mounted() {
    this.updateSlideWidth()
    window.addEventListener('resize', this.updateSlideWidth)
    this.startAutoPlay()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateSlideWidth)
    this.stopAutoPlay()
  },
  methods: {
    updateSlideWidth() {
      if (window.innerWidth <= 480) {
        this.slideWidth = 300
      } else if (window.innerWidth <= 768) {
        this.slideWidth = 350
      } else if (window.innerWidth <= 1024) {
        this.slideWidth = 400
      } else {
        this.slideWidth = 450
      }
    },
    getSlidesPerView() {
      if (window.innerWidth <= 480) return 1
      if (window.innerWidth <= 768) return 1
      if (window.innerWidth <= 1024) return 2
      return 3
    },
    nextSlide() {
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex++
      }
    },
    previousSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    goToSlide(index) {
      this.currentIndex = index
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        if (this.currentIndex >= this.maxIndex) {
          this.currentIndex = 0
        } else {
          this.currentIndex++
        }
      }, 5000)
    },
    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval)
      }
    }
  }
}
</script>

<style scoped>
.projects-section {
  padding: 100px 20px;
  background: var(--dark-800);
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 60px;
  color: var(--gray-100);
  text-align: center;
  font-weight: 600;
}

.carousel-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.carousel-wrapper {
  overflow: hidden;
  border-radius: 20px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  gap: 30px;
}

.carousel-slide {
  flex-shrink: 0;
}

.project-card {
  background: var(--dark-700);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.project-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.project-image:hover {
  transform: scale(1.05);
}

/* Botões de navegação */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.8);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.nav-btn:hover:not(:disabled) {
  background: var(--primary);
  transform: translateY(-50%) scale(1.1);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.prev-btn {
  left: -25px;
}

.next-btn {
  right: -25px;
}

/* Indicadores */
.indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: var(--primary);
  transform: scale(1.3);
}

.indicator:hover {
  background: var(--primary);
}

/* Responsividade */
@media (max-width: 1024px) {
  .carousel-track {
    gap: 25px;
  }
  
  .project-image {
    height: 320px;
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 80px 20px;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  
  .carousel-track {
    gap: 20px;
  }
  
  .nav-btn {
    width: 45px;
    height: 45px;
  }
  
  .prev-btn {
    left: -20px;
  }
  
  .next-btn {
    right: -20px;
  }
  
  .project-image {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .projects-section {
    padding: 60px 20px;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
  
  .carousel-track {
    gap: 15px;
  }
  
  .nav-btn {
    width: 40px;
    height: 40px;
  }
  
  .prev-btn {
    left: -15px;
  }
  
  .next-btn {
    right: -15px;
  }
  
  .project-image {
    height: 280px;
  }
  
  .indicators {
    gap: 10px;
    margin-top: 30px;
  }
  
  .indicator {
    width: 10px;
    height: 10px;
  }
}
</style>
