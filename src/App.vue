<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/filters">Filters</router-link>
      <select v-model="selectedTheme" style="margin-left: 1rem">
        <option :key="theme" v-for="theme in themes" :value="theme">{{ theme }}</option>
      </select>
      <button @click="changeTheme()">Save theme</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selectedTheme: 'white.css',
      themes: ['white.css', 'red.css', 'blue.css'],
    }
  },
  methods: {
    changeTheme() {
      const theme = document.createElement('link')
      theme.className = 'theme-switcher'
      theme.rel = 'stylesheet'
      theme.href = `https://jelmerveen.github.io/Playground/css/${this.selectedTheme}`
      document.getElementsByTagName('head')[0].append(theme)
      document.getElementsByClassName('theme-switcher')[0].remove();
    },
  },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
