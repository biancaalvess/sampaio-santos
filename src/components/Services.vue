<template>
  <section id="servicos" class="services-section">
    <div class="container">
      <h2 class="section-title">Serviços</h2>
      <div class="services-grid">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="service-item" 
          @click="openServiceModal(service.id)"
        >
          <i :class="service.icon"></i>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          id: 'service1',
          icon: 'fas fa-comments',
          title: 'Projetos Arquitetônicos',
          description: 'Consultoria completa para a criação de projetos arquitetônicos.'
        },
        {
          id: 'service2',
          icon: 'fas fa-drafting-compass',
          title: 'Projetos Estruturais',
          description: 'Desenvolvimento de projetos para estruturas de concreto, aço e madeira.'
        },
        {
          id: 'service3',
          icon: 'fas fa-hard-hat',
          title: 'Projetos Elétricos',
          description: 'Planejamento e execução de projetos elétricos.'
        },
        {
          id: 'service4',
          icon: 'fas fa-tint',
          title: 'Projetos Hidráulicos',
          description: 'Elaboração de projetos hidráulicos.'
        },
        {
          id: 'service5',
          icon: 'fas fa-cogs',
          title: 'Regularização de Imóveis',
          description: 'Assessoria na regularização de imóveis.'
        },
        {
          id: 'service6',
          icon: 'fas fa-building',
          title: 'Fachadas',
          description: 'Projeto de fachadas comerciais e residenciais.'
        }
      ]
    }
  },
  methods: {
    openServiceModal(serviceId) {
      // Implementar modal de serviço se necessário
      console.log('Serviço selecionado:', serviceId)
    }
  }
}
</script>

<style scoped>
.services-section {
  padding: 120px 0;
  background: var(--dark);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.service-item {
  background: var(--dark-800);
  padding: 40px 30px;
  border-radius: 15px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid var(--dark-700);
  cursor: pointer;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.service-item::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.service-item:hover::before {
  opacity: 0.1;
}

.service-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: var(--primary);
}

.service-item i {
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 25px;
  display: inline-block;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.service-item:hover i {
  transform: scale(1.2) rotate(10deg);
}

.service-item h3 {
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: #fff;
}

.service-item p {
  color: var(--gray-500);
  line-height: 1.7;
}

/* Responsividade */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
