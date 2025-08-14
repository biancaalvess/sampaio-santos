<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="logo">JS</div>
      <nav>
        <ul class="nav-list">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style scoped>
header {
  background: rgba(10, 10, 10, 0.95);
  padding: 20px 0;
  position: fixed;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

header.scrolled {
  padding: 15px 0;
  background: rgba(10, 10, 10, 0.98);
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

header .logo::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

header .logo:hover::after {
  width: 100%;
}

header .nav-list {
  list-style: none;
  display: flex;
  gap: 30px;
}

header .nav-list li a {
  color: var(--gray-300);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  padding: 5px 0;
}

header .nav-list li a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

header .nav-list li a:hover {
  color: #fff;
}

header .nav-list li a:hover::after {
  width: 100%;
}

/* Responsividade */
@media (max-width: 768px) {
  header .nav-list {
    display: none;
  }
}
</style>
