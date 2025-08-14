# 🏗️ **Sampaio Santos - Projetos de Engenharia**

## 📋 **Descrição do Projeto**

Site profissional moderno e responsivo para a empresa **Sampaio Santos**, especializada em projetos de engenharia civil, arquitetura e consultoria técnica. O projeto foi desenvolvido em **Vue.js 3** com foco em **responsividade absoluta** e **experiência do usuário premium**.

---

## 🚀 **Tecnologias Utilizadas**

### **Frontend Framework**
- **Vue.js 3** - Framework progressivo para interfaces
- **Vite** - Build tool ultra-rápido para desenvolvimento
- **Composition API** - Sistema de reatividade moderno

### **Estilização**
- **CSS3** com variáveis customizadas
- **Flexbox & Grid** para layouts responsivos
- **Media Queries** para breakpoints precisos
- **Animações CSS** para transições suaves

### **Funcionalidades**
- **Carousel customizado** para projetos
- **Modal de zoom interativo** para imagens
- **Navegação responsiva** adaptativa
- **Auto-play** inteligente

---

## 🏗️ **Estrutura do Projeto**

```
sampaio-santos/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Header.vue          # Cabeçalho com navegação
│   │   ├── Hero.vue            # Seção principal com perfil
│   │   ├── Services.vue        # Serviços oferecidos
│   │   ├── Projects.vue        # Carousel de projetos
│   │   ├── Footer.vue          # Rodapé com contatos
│   │   └── ZoomModal.vue       # Modal de zoom interativo
│   ├── App.vue                 # Componente raiz
│   └── main.js                 # Ponto de entrada
├── 📁 public/
│   └── 📁 image/               # Imagens dos projetos
├── index.html                  # HTML principal
├── style.css                   # Estilos globais
├── package.json                # Dependências e scripts
├── vite.config.js              # Configuração do Vite
└── README.md                   # Documentação
```

---

## 🎯 **Funcionalidades Implementadas**

### **1. 🖼️ Carousel de Projetos**
- **Carousel customizado** desenvolvido do zero
- **Navegação lateral** com botões elegantes
- **7 indicadores** para navegação direta
- **Auto-play** a cada 5 segundos
- **Responsividade total** para todos os dispositivos

#### **📱 Breakpoints Responsivos:**
- **Desktop (>1024px)**: 3 slides visíveis (450px cada)
- **Tablet (≤1024px)**: 2 slides visíveis (400px cada)
- **Mobile (≤768px)**: 1 slide visível (350px cada)
- **Mobile pequeno (≤480px)**: 1 slide visível (300px cada)

### **2. 🔍 Modal de Zoom Interativo**
- **Click para expandir** qualquer imagem
- **Zoom livre** com scroll do mouse
- **Arrastar imagem** para navegar
- **Pinch-to-zoom** para dispositivos touch
- **Duplo-clique** para resetar zoom
- **Tecla ESC** para fechar

#### **🎮 Controles do Zoom:**
- **Mouse wheel**: Zoom in/out
- **Drag & Drop**: Mover imagem
- **Touch gestures**: Pinch para zoom
- **Double-click**: Resetar para 100%
- **ESC key**: Fechar modal

### **3. 🎨 Design System**
- **Paleta de cores** consistente com variáveis CSS
- **Tipografia hierárquica** para melhor legibilidade
- **Sombras e elevações** para profundidade visual
- **Transições suaves** para interações
- **Hover effects** responsivos

#### **🎨 Variáveis CSS:**
```css
:root {
  --primary: #dc2626;        # Vermelho principal
  --primary-light: #ef4444;  # Vermelho claro
  --dark-800: #1f2937;      # Fundo escuro
  --dark-700: #374151;      # Cards escuros
  --gray-100: #f3f4f6;      # Texto claro
  --gray-300: #d1d5db;      # Bordas
}
```

---

## 🚀 **Instalação e Execução**

### **Pré-requisitos**
- **Node.js** versão 16+ 
- **npm** ou **yarn**

### **Passos para Instalação**

1. **Clone o repositório**
```bash
git clone [URL_DO_REPOSITORIO]
cd sampaio-santos
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### **Scripts Disponíveis**
```json
{
  "dev": "vite",           # Servidor de desenvolvimento
  "build": "vite build",   # Build para produção
  "preview": "vite preview" # Preview do build
}
```

---

## 🧩 **Componentes Vue.js**

### **App.vue (Componente Raiz)**
- **Gerenciamento de estado** do modal de zoom
- **Layout principal** com todas as seções
- **Provide/Inject** para comunicação entre componentes

### **Header.vue**
- **Navegação responsiva** com links principais
- **Scroll-triggered** para mudanças de estilo
- **Logo e menu** adaptativo

### **Hero.vue**
- **Seção principal** com foto profissional
- **Texto introdutório** da empresa
- **Animações de entrada** suaves

### **Services.vue**
- **Grid de serviços** oferecidos
- **Cards informativos** com ícones
- **Layout responsivo** adaptativo

### **Projects.vue**
- **Carousel customizado** para projetos
- **Navegação lateral** e indicadores
- **Integração com zoom** modal
- **Responsividade total** implementada

### **Footer.vue**
- **Informações de contato** da empresa
- **Links para redes sociais**
- **Dados da empresa** organizados

### **ZoomModal.vue**
- **Modal de zoom** interativo
- **Controles de zoom** avançados
- **Suporte touch** e mouse
- **Animações suaves** de entrada/saída

---

## 📱 **Responsividade e Breakpoints**

### **Desktop (>1024px)**
- Layout completo com todas as funcionalidades
- 3 slides visíveis no carousel
- Navegação lateral completa
- Hover effects ativos

### **Tablet (≤1024px)**
- Layout adaptado para telas médias
- 2 slides visíveis no carousel
- Navegação otimizada
- Touch-friendly

### **Mobile (≤768px)**
- Layout mobile-first
- 1 slide visível no carousel
- Navegação simplificada
- Gestos touch otimizados

### **Mobile Pequeno (≤480px)**
- Layout ultra-compacto
- Elementos redimensionados
- Navegação minimalista
- Performance otimizada

---

## 🎨 **Sistema de Cores e Design**

### **Paleta Principal**
- **Vermelho (#dc2626)**: Cor primária para destaque
- **Escuro (#1f2937)**: Fundo principal
- **Cinza (#374151)**: Cards e elementos secundários
- **Branco (#f3f4f6)**: Texto e elementos claros

### **Tipografia**
- **Títulos**: 2.5rem (desktop) → 1.8rem (mobile)
- **Subtítulos**: 2.2rem (desktop) → 1.6rem (mobile)
- **Texto**: 1rem com peso 400
- **Links**: 1rem com peso 500

### **Espaçamentos**
- **Seções**: 100px (desktop) → 60px (mobile)
- **Elementos**: 30px (desktop) → 15px (mobile)
- **Gaps**: 30px (desktop) → 15px (mobile)

---

## 🔧 **Configurações Técnicas**

### **Vite Configuration**
```javascript
export default {
  plugins: [vue()],
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
}
```

### **Vue.js Features**
- **Composition API** para lógica reutilizável
- **Provide/Inject** para comunicação entre componentes
- **Event handling** otimizado
- **Lifecycle hooks** para gerenciamento de estado

### **CSS Architecture**
- **Variáveis CSS** para consistência
- **Scoped styles** nos componentes Vue
- **Media queries** para responsividade
- **Flexbox/Grid** para layouts modernos

---

## 📊 **Performance e Otimizações**

### **Carregamento**
- **Lazy loading** de imagens
- **Code splitting** automático do Vite
- **Tree shaking** para eliminar código não utilizado

### **Interações**
- **Debounced resize** events
- **Throttled scroll** events
- **Optimized animations** com CSS transforms

### **Responsividade**
- **Breakpoints precisos** para cada dispositivo
- **Adaptive layouts** sem JavaScript
- **Touch-friendly** para dispositivos móveis

---

## 🚀 **Deploy e Produção**

### **Build de Produção**
```bash
npm run build
```

### **Arquivos Gerados**
- **dist/** - Pasta com arquivos otimizados
- **HTML, CSS, JS** minificados
- **Assets** otimizados e comprimidos

### **Servidor de Preview**
```bash
npm run preview
```

---

## 🐛 **Solução de Problemas**

### **Erro de Porta**
Se encontrar erro `EACCES: permission denied`:
- Altere a porta no `vite.config.js`
- Use porta 5173 (padrão) ou outra disponível

### **Problemas de Zoom**
- Verifique se o modal está sendo injetado corretamente
- Confirme se as imagens estão carregando
- Teste em diferentes dispositivos

### **Responsividade**
- Use DevTools para testar breakpoints
- Verifique se as media queries estão funcionando
- Teste em dispositivos reais

---

## 📝 **Changelog**

### **v1.0.0 - Versão Final**
- ✅ **Conversão completa** para Vue.js 3
- ✅ **Carousel customizado** responsivo
- ✅ **Modal de zoom** interativo
- ✅ **Design system** consistente
- ✅ **Responsividade absoluta** implementada
- ✅ **Performance otimizada**
- ✅ **Código limpo** e organizado

---

## 👨‍💻 **Desenvolvimento**

### **Estrutura de Commits**
```
feat: nova funcionalidade
fix: correção de bug
style: mudanças de estilo
refactor: refatoração de código
docs: documentação
```

### **Padrões de Código**
- **ESLint** para qualidade do código
- **Prettier** para formatação
- **Vue.js Style Guide** seguido
- **Componentes reutilizáveis**

---

## 📞 **Suporte e Contato**

Para dúvidas técnicas ou suporte:
- **Issues**: Abra uma issue no repositório
- **Documentação**: Consulte este README
- **Vue.js**: [Documentação oficial](https://vuejs.org/)

---

## 📄 **Licença**

Este projeto está sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🎉 **Agradecimentos**

- **Vue.js Team** pelo framework incrível
- **Vite** pela ferramenta de build ultra-rápida
- **Comunidade Vue** pelo suporte e recursos

---

**Desenvolvido com ❤️ e Vue.js 3**

