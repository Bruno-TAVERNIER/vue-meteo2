<template>
  <p>
    <label>Ville à rechercher</label>
    <input v-model="ville" />
    <button @click="rechercher">Rechercher</button>
  </p>
  <p v-if="resultat">
    <ul>
      <li v-for="(v, i) in resultat" :key="i" @click="ajoutVille(v)"> 
        {{v.nom}} ({{ v.departement.nom }})
      </li>
    </ul>
  </p>
</template>

<script>
  import LSMixin from '@/mixins/LSMixin'
  export default {
    name: 'ConfigView',
    mixins: [LSMixin],
    data() {
      return {
        ville: null,
        resultat: []
      }
    },
    methods: {
      rechercher() {
        this.$http.get('https://geo.api.gouv.fr/communes',
          { params: 
            { fields: 'centre,departement',
              nom: this.ville }})
        .then(response => {
          console.log(response);
          this.resultat = response.data;
        });
      },
      ajoutVille(ville) {
        let newVille = {
          nom: ville.nom,
          dept: ville.departement.nom,
          lat: ville.centre.coordinates[1],
          lon: ville.centre.coordinates[0]
        }
        //console.log(newVille);
        this.ajoutLs(newVille);
        //retour à l'accueil
        this.$router.push({path: '/'});
      }
    }
  }
</script>