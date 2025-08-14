<template>
  <footer id="contato" class="footer-section">
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>Engenharia Civil</h3>
          <p>Transformando ideias em realidade</p>
        </div>
        <div class="footer-column">
          <h3>Contato</h3>
          <p>Email: eng.sampaiosantos@gmail.com</p>
          <p>WhatsApp: (75) 99804-1767</p>
        </div>
        <div class="footer-column">
          <h3>Redes Sociais</h3>
          <div class="social-icons">
            <a
              href="https://www.instagram.com/eng.sampaiosantos/?igsh=aGp1azZwbzNoc2I0#"
              class="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <p class="copyright">
        &copy; 2025 - Bianca Alves. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-section {
  background: var(--dark);
  color: var(--gray-300);
  padding: 80px 0 30px;
  position: relative;
}

.footer-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  margin-bottom: 50px;
}

.footer-column h3 {
  font-size: 1.3rem;
  margin-bottom: 25px;
  color: #fff;
  position: relative;
  padding-bottom: 15px;
  display: inline-block;
}

.footer-column h3::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--primary);
}

.footer-column p {
  margin-bottom: 15px;
  color: var(--gray-500);
}

.social-icons {
  display: flex;
  gap: 20px;
}

.social-icon {
  color: var(--gray-300);
  font-size: 1.5rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-decoration: none;
}

.social-icon:hover {
  color: var(--primary);
  transform: translateY(-3px);
}

.copyright {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid var(--dark-700);
  color: var(--gray-500);
  font-size: 0.9rem;
}

/* Responsividade */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-column h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
