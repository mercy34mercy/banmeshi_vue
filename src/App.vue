<template>
<link rel="apple-touch-icon" href="<%= htmlWebpackPlugin.files.publicPath %>static/img/icons/apple-touch-icon-152x152.png">

<meta name="msapplication-TileImage" content="<%= htmlWebpackPlugin.files.publicPath %>static/img/icons/mstile-150x150.png">

<meta name="twitter:card" content="summary">
<meta property="og:url" content="https://banmeshikun.com">
<meta property="og:title" content="banmeshi">
<meta property="og:description" content="食材から晩飯ガチャをひこう">
<meta property="og:image" content="./assets/artboard.png">

  <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> -->
    <!-- <router-link to="/about">About</router-link> -->
  <!-- </div> -->
  <router-view/>
</template>

<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #100E29;
  background-color: #fcfdfe;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #100E29;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
