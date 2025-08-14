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