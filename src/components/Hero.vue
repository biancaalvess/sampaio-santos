<template>
  <section id="hero" class="hero-section">
    <div class="container hero-container">
      <div class="hero-image">
        <img
          src="/image/foto-profissional.png"
          alt="Foto do Profissional"
          class="profile-img"
        />
      </div>
      <div class="hero-text">
        <h1>Engenheiro Civil - Sampaio Santos</h1>
        <p>CREA-BA: 051958901-7</p>
        <p>
          Sou engenheiro civil, trabalho na área há mais de 4 anos e tenho
          experiência em desenvolvimento de projetos.
        </p>
        <p>
          Se seu objetivo é fazer um projeto bem elaborado, seguro, com baixo
          custo e do jeitinho que você sempre sonhou, meus serviços são 100%
          ideais para você.
        </p>
        <a href="https://api.whatsapp.com/send/?phone=5575998041767&text&type=phone_number&app_absent=0" class="cta-button">Entre em Contato</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, var(--dark) 0%, var(--dark-800) 100%);
  padding: 180px 0 120px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0a0a0a;
  background-size: cover;
  opacity: 0.1;
  z-index: 0;
  animation: pulse 10s infinite alternate;
}

@keyframes pulse {
  0% {
    opacity: 0.05;
  }
  100% {
    opacity: 0.15;
  }
}

.hero-container {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 50px;
}

.hero-image {
  flex: 0 0 auto;
  width: 400px;
  position: relative;
}

.hero-image::after {
  content: "";
  position: absolute;
  top: 20px;
  left: 20px;
  right: -20px;
  bottom: -20px;
  border: 2px solid var(--primary);
  z-index: -1;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.hero-image:hover::after {
  top: 10px;
  left: 10px;
  right: -10px;
  bottom: -10px;
}

.profile-img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.profile-img:hover {
  transform: scale(1.03) rotate(-1deg);
}

.hero-text {
  flex: 1;
}

.hero-text h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, var(--primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  animation: fadeInUp 1s ease-out;
}

.hero-text p {
  font-size: 1.2rem;
  color: var(--gray-300);
  margin-bottom: 30px;
  animation: fadeInUp 1s ease-out 0.2s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cta-button {
  display: inline-block;
  padding: 15px 40px;
  background: var(--primary);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  border: 2px solid var(--primary);
  animation: fadeInUp 1s ease-out 0.4s both;
}

.cta-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: all 0.5s ease;
}

.cta-button:hover {
  background: transparent;
  color: var(--primary);
  box-shadow: 0 5px 15px rgba(203, 0, 0, 0.4);
  transform: translateY(-3px);
}

.cta-button:hover::before {
  left: 100%;
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }

  .hero-image {
    width: 100%;
    max-width: 300px;
    margin: 0 auto 30px;
  }

  .hero-text h1 {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 2.5rem;
  }

  .cta-button {
    padding: 12px 30px;
    font-size: 0.9rem;
  }
}
</style>
