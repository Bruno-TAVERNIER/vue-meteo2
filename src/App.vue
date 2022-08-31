<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" alt="logo"/>
      <div>
        <h1>Météo Vue</h1>
        <h2>Version 2</h2>
      </div>
    </header>
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/config">Configuration</router-link> |
      <router-link to="/about">Crédits</router-link>
    </nav>
    <router-view/>
    <footer>Copyright &copy; 2022 - Moi</footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  width: 450px;
  margin: 0 auto;
  display: flex;
}
header img {
  max-width: 150px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
