<template>
  <div class="home">
    <h1>Météo</h1>
    <ResumeMeteo v-for="(v,i) in liste" :key="i" :ville="v" @supVille="supVille" />
</div>
</template>

<script>
// @ is an alias to /src
import LSMixin from '@/mixins/LSMixin';
import ResumeMeteo from '@/components/ResumeMeteoComponent.vue'
export default {
  name: 'HomeView',
  components: {
    ResumeMeteo
  },
  mixins: [LSMixin],
  methods: {
    supVille(ville) {
      this.removeElem(ville);
    }
  }
}
</script>
