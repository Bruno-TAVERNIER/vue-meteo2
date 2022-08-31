<template>
  <div class="about">
    <h1>Crédits</h1>
    <ul>
      <li v-for="cd in credits" :key="cd.nom">
        <a :href="cd.url" target="_blank">{{ cd.nom }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'AboutView',
    data() {
      return {
        credits: [
          {nom: 'Vue JS', url: 'https://vuejs.org'},
          {nom: 'Vue Router', url: 'https://router.vuejs.org'},
          {nom: 'API GEO', url: 'https://geo.api.gouv.fr'},
          {nom: 'OpenWeatherMap', url: 'https://openweathermap.org/api'},
        ]
      }
    }
  }
</script>

<style>
  ul {
    list-style-type: none;
    width: 300px;
    margin: 0 auto;
  }
  li {
    font-size: 1.5em;
    border: 1px solid silver;
    padding: 5px;
  }
</style>
