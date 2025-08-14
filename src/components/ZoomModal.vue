<template>
  <div class="zoom-modal" @click="closeModal">
    <div 
      class="zoom-container"
      :style="containerStyle"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @touchstart="startTouchDrag"
      @touchmove="onTouchDrag"
      @touchend="stopDrag"
      @dblclick="resetZoom"
      @wheel="handleWheel"
    >
      <img 
        :src="imageSrc" 
        :style="imageStyle"
        class="zoom-image" 
        alt="Imagem com Zoom"
        draggable="false"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZoomModal',
  props: {
    imageSrc: {
      type: String,
      required: true
    }
  },
  emits: ['close'],
  data() {
    return {
      currentZoom: 1,
      isDragging: false,
      startX: 0,
      startY: 0,
      translateX: 0,
      translateY: 0,
      lastTouchDistance: 0
    }
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate(-50%, -50%) translate(${this.translateX}px, ${this.translateY}px)`,
        cursor: this.currentZoom > 1 ? (this.isDragging ? 'grabbing' : 'grab') : 'default'
      }
    },
    imageStyle() {
      return {
        transform: `scale(${this.currentZoom})`
      }
    }
  },
  mounted() {
    // Adicionar listeners para teclas
    document.addEventListener('keydown', this.handleKeydown)
    // Prevenir scroll do body
    document.body.style.overflow = 'hidden'
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
    document.body.style.overflow = ''
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    
    handleWheel(e) {
      e.preventDefault()
      const delta = e.deltaY > 0 ? 0.95 : 1.05
      const newZoom = Math.max(0.5, Math.min(8, this.currentZoom * delta))
      
      // Ajustar a posição para manter o ponto de zoom no centro do mouse
      if (newZoom !== this.currentZoom) {
        const rect = e.currentTarget.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        
        const scaleChange = newZoom / this.currentZoom
        this.translateX = mouseX - (mouseX - this.translateX) * scaleChange
        this.translateY = mouseY - (mouseY - this.translateY) * scaleChange
        
        this.currentZoom = newZoom
      }
    },
    
    zoomIn() {
      this.currentZoom = Math.min(this.currentZoom * 1.5, 8)
      this.updateCursor()
    },
    
    zoomOut() {
      this.currentZoom = Math.max(this.currentZoom / 1.5, 0.5)
      this.updateCursor()
    },
    
    resetZoom() {
      this.currentZoom = 1
      this.translateX = 0
      this.translateY = 0
      this.isDragging = false
      this.updateCursor()
    },
    
    updateCursor() {
      // O cursor é atualizado via computed property
    },
    
    startDrag(e) {
      if (this.currentZoom > 1) {
        this.isDragging = true
        this.startX = e.clientX - this.translateX
        this.startY = e.clientY - this.translateY
        e.preventDefault()
      }
    },
    
    onDrag(e) {
      if (this.isDragging && this.currentZoom > 1) {
        const newX = e.clientX - this.startX
        const newY = e.clientY - this.startY
        
        // Limitar o movimento para que a imagem não saia muito da tela
        const maxMove = (this.currentZoom - 1) * 200
        this.translateX = Math.max(-maxMove, Math.min(maxMove, newX))
        this.translateY = Math.max(-maxMove, Math.min(maxMove, newY))
        
        e.preventDefault()
      }
    },
    
    stopDrag() {
      this.isDragging = false
    },
    
    startTouchDrag(e) {
      if (e.touches.length === 1 && this.currentZoom > 1) {
        const touch = e.touches[0]
        this.startX = touch.clientX - this.translateX
        this.startY = touch.clientY - this.translateY
        this.isDragging = true
        e.preventDefault()
      } else if (e.touches.length === 2) {
        // Pinch to zoom
        this.lastTouchDistance = this.getTouchDistance(e.touches)
        e.preventDefault()
      }
    },
    
    onTouchDrag(e) {
      if (e.touches.length === 1 && this.isDragging) {
        const touch = e.touches[0]
        const newX = touch.clientX - this.startX
        const newY = touch.clientY - this.startY
        
        // Limitar o movimento para que a imagem não saia muito da tela
        const maxMove = (this.currentZoom - 1) * 200
        this.translateX = Math.max(-maxMove, Math.min(maxMove, newX))
        this.translateY = Math.max(-maxMove, Math.min(maxMove, newY))
        
        e.preventDefault()
      } else if (e.touches.length === 2) {
        // Pinch to zoom
        const currentDistance = this.getTouchDistance(e.touches)
        const scale = currentDistance / this.lastTouchDistance
        
        if (this.lastTouchDistance > 0) {
          this.currentZoom = Math.max(0.5, Math.min(8, this.currentZoom * scale))
          this.updateCursor()
        }
        
        this.lastTouchDistance = currentDistance
        e.preventDefault()
      }
    },
    
    getTouchDistance(touches) {
      return Math.hypot(
        touches[0].clientX - touches[1].clientX,
        touches[0].clientY - touches[1].clientY
      )
    },
    
    handleKeydown(e) {
      switch (e.key) {
        case 'Escape':
          this.closeModal()
          break
        case '+':
        case '=':
          e.preventDefault()
          this.zoomIn()
          break
        case '-':
          e.preventDefault()
          this.zoomOut()
          break
        case '0':
          e.preventDefault()
          this.resetZoom()
          break
      }
    }
  }
}
</script>

<style scoped>
.zoom-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.98);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}

.zoom-container {
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: grab;
  transition: transform 0.1s ease;
}

.zoom-container:active {
  cursor: grabbing;
}

.zoom-image {
  max-width: 95vw;
  max-height: 95vh;
  object-fit: contain;
  transform-origin: center;
  transition: transform 0.1s ease;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
}

/* Animações suaves */
.zoom-modal {
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.zoom-container {
  animation: scaleIn 0.2s ease-out;
}

@keyframes scaleIn {
  from {
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}

/* Responsividade para dispositivos móveis */
@media (max-width: 768px) {
  .zoom-modal {
    background: rgba(0, 0, 0, 0.99);
  }
}

/* Estilo para quando a imagem está ampliada */
.zoom-container[style*="scale"] {
  cursor: grab;
}

.zoom-container[style*="scale"]:active {
  cursor: grabbing;
}
</style>
