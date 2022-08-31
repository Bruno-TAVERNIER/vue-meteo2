<template>
  <h1>Prévisions Météo</h1>
  <h2> {{ $route.params.id }}</h2>
  <DetailMeteo :meteo="current" type="current" v-if="current"/>
  <!-- prévisions à 8 jours -->
  <div v-if="previsions">
    <DetailMeteo v-for="(p,i) in previsions" :key="i" :meteo="p" type="prevs" />
  </div>
</template>

<script>
  import LSMixin from "@/mixins/LSMixin";
  import DetailMeteo from "@/components/DetailMeteoComponent.vue";
  export default {
    name: 'VilleView',
    mixins: [LSMixin],
    components: {
      DetailMeteo
    },
    data() {
      return {
        ville: null,
        previsions: null,
        current: null
      }
    },
    mounted() {
      //récupérer les infos de la ville en cours
      this.ville = this.liste.find(v => v.nom == this.$route.params.id);
      //récupération de la météo avec prévisions
      this.$http.get('https://api.openweathermap.org/data/2.5/onecall', {
        params: {
          lat: this.ville.lat,
          lon: this.ville.lon,
          units: 'metric',
          lang: 'fr',
          exclude: 'minutely,hourly',
          appid: 'd2e33b810d399f2fb3d6791d161388ec'
        }
      })
      .then(response => { 
       // console.log(response);
        this.current = response.data.current;
        this.previsions = response.data.daily;
      });
    }
  }
</script>