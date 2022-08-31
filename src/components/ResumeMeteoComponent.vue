<template>
  <div id="resume" >
    <h1>{{ ville.nom }}</h1>
    <p>Température: {{ temperature }}</p>
    <p>Temps: {{ temps }} <img :src="icon" :alt="temps"/></p>
    <p>Pression: {{ pression }}</p>
    <p>Indice UV: {{ uv }}</p>
    <router-link :to="{name: 'ville', params: {id: ville.nom}}">Prévisions</router-link>
    <button @click="suppVille(ville)">X</button>
  </div>
</template>

<script>
  export default {
    name: 'ResumeMeteo',
    props: {
      ville: Object
    },
    data() {
      return {
        temps: null,
        temperature: null,
        pression: null,
        uv: null,
        icon: null,
      }
    }, 
    methods: {
      suppVille(lieu) {
        this.$emit('supVille', lieu);
      }
    },
    created() {
      //récupérer la météo de la ville
      this.$http.get('https://api.openweathermap.org/data/2.5/onecall', {
        params: {
          lat: this.ville.lat,
          lon: this.ville.lon,
          units: 'metric',
          lang: 'fr',
          exclude: 'minutely,hourly,daily',
          appid: 'd2e33b810d399f2fb3d6791d161388ec'
        }
      })
      .then(response => {
        console.log(response);
        this.temps = response.data.current.weather[0].description;
        this.temperature = response.data.current.temp + ' °C';
        this.pression = response.data.current.pressure + ' hPa';
        this.uv = response.data.current.uvi;
        this.icon = 'http://openweathermap.org/img/wn/' 
                     + response.data.current.weather[0].icon 
                     + '@2x.png';
      });
    }
  }
</script>
<style scoped>
  #resume {
    border: 1px solid silver;
    width: 400px;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .2); 
  }
  button {
    position: relative;
    right: -130px;
    top: -280px;
    background: red;  
    color: white;
    border: none;
    cursor: pointer;
  }
</style>