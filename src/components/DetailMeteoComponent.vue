<template>
  <h2>{{ dte() }}</h2>
  <h3>Lever {{ sunrise }}</h3>
  <h3>Coucher {{ sunset }}</h3>
  <div>
    <img :src="'http://openweathermap.org/img/wn/' +  meteo.weather[0].icon +'@2x.png'" :alt="meteo.weather[0].description" />
    <h4>{{ meteo.weather[0].description }}</h4>
    <div v-show="type=='current'">
      <p>Température: {{ meteo.temp }}°C</p>
      <p>Ressenti: {{ meteo.feels_like }}°C</p>
    </div>
    <div v-show="type=='prevs'">
      <table>
        <tr>
          <th></th>
          <th>Matin</th>
          <th>Jour</th>
          <th>Soir</th>
          <th>Nuit</th>
        </tr>
        <tr>
          <td>Température</td>
          <td>{{ meteo.temp.morn }}°C</td>
          <td>{{ meteo.temp.day }}°C</td>
          <td>{{ meteo.temp.eve }}°C</td>
          <td>{{ meteo.temp.night }}°C</td>
        </tr>
        <tr>
          <td>Ressenti</td>
          <td>{{ meteo.feels_like.morn }}°C</td>
          <td>{{ meteo.feels_like.day }}°C</td>
          <td>{{ meteo.feels_like.eve }}°C</td>
          <td>{{ meteo.feels_like.night }}°C</td>
        </tr>
      </table>
    </div>
    <p>Humidité: {{ meteo.humidity }}%</p>
    <p>Pression: {{ meteo.pressure }} hPa</p>
  </div>
  <div>Vent: {{ vitesse }} km/h - {{meteo.wind_deg}}°N</div>
  <div v-show="meteo.wind_gust">Réfales: {{ rafales }} km/h</div>
  <div>Nuages: {{ meteo.clouds}}%</div>
  <div>Index UV: {{ meteo.uvi }}</div>
  <div v-show="type=='prevs'">Risque de précipitations: {{meteo.pop / 100}}%</div>
  <div v-show="meteo.rain">Précipitations: {{meteo.rain }}mm</div>
  <div v-show="meteo.snow">Neige: {{ meteo.snow }}mm</div>
  <hr>
</template>

<script>
  export default {
    name: "DetailMeteo",
    props: {
      meteo: Object,
      type: String
    },
    data() {
      return {
        sunrise: null,
        sunset: null,
        vitesse: null,
        rafales: null
      }
    },
    mounted() {
      //console.log(this.meteo);
      this.sunrise = this.hre(this.meteo.sunrise);
      this.sunset = this.hre(this.meteo.sunset);
      this.vitesse = Number(this.meteo.wind_speed * 3.6).toFixed(2);
      if(this.meteo.wind_gust) this.rafales = Number(this.meteo.wind_gust * 3.6).toFixed(2);
    },
    methods: {
      dte() {
        let mois = ['janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        let jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        let day = new Date(this.meteo.dt * 1000);
        return jours[day.getDay()] + ' '+ ("0" + day.getDate()).slice(-2) +" " + mois[day.getMonth()] + ' ' + day.getFullYear();
      },
      hre(value) {
        let day = new Date(value * 1000);
        return ("0" + day.getHours()).slice(-2) + ':' + ("0" + day.getMinutes()).slice(-2);
      }
    }
  }
</script>

<style>
  table {
    margin: 0 auto;
  }
</style>