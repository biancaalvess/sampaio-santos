<template>
  <div class="projects">
    <div v-for="project in projects" :key="project.title" class="project">
      <img :src="project.image" :alt="project.title" />
      <p>{{ project.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'Projeto 1',
          image: '/src/assets/projeto-01.png'
        },
        {
          title: 'Projeto 2',
          image: '/src/assets/projeto-02.png'
        },
        {
          title: 'Projeto 3',
          image: '/src/assets/projeto-03.png'
        },
        {
          title: 'Projeto 4',
          image: '/src/assets/projeto-04.png'
        },
        {
          title: 'Projeto 5',
          image: '/src/assets/projeto-05.jpg'
        },
        {
          title: 'Projeto 6',
          image: '/src/assets/projeto-06.jpg'
        },
        {
          title: 'Projeto 7',
          image: '/src/assets/projeto-07.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.project {
  width: 200px;
  text-align: center;
}
.project img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>