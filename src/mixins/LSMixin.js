export default {
  created() {
    console.log('mixin ok');
  },
  mounted() {
    this.recupLs();
  },
  data() {
    return {
      liste: [],
      ls: 'villes'
    }
  },
  methods: {
    // récupérer le contenu du LS et remplir la liste
    recupLs() {
      if(localStorage.getItem(this.ls))
      {
        let tmp = localStorage.getItem(this.ls); 
        this.liste = JSON.parse(tmp);
      }
    },
    // ajouter un élément à la liste et sauvegarder le LS
    ajoutLs(obj) {
      // on vérifie si l'élément n'est pas déjà dans la liste
      let exist = this.liste.find((x) => x.nom == obj.nom);
      if(typeof exist == 'undefined') {
        this.liste.push(obj);
        localStorage.setItem(this.ls, JSON.stringify(this.liste));
      } 
    },
    // suppression de tout le LS
    clearLs() {
      localStorage.clear();
    },
    //suppression de l'élément courant dans le LS
    removeLs() {
      localStorage.removeItem(this.ls);
    },
    // suppression d'un élément de la liste et sauvegarde du LS
    removeElem(obj){
      console.log(obj);
      let newListe = this.liste.filter((el) => el.nom != obj.nom);
      this.liste = newListe;
      localStorage.setItem(this.ls, JSON.stringify(this.liste));
    }
  }
}