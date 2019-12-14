<template>
  <main id='app'>
    <Weather></Weather>
  </main>
</template>

<script>
import Weather from './components/Weather.vue'

export default {
  name: 'app',
  components: {
    Weather
  },
  data () {
    return {
      date: new Date()
    }
  },
  computed: {
    year () {
      return this.date.getFullYear()
    }
  }
}
</script>

<style>
  body{
    background: url("assets/img/1399735.jpg") no-repeat center center fixed;
    background-size: cover;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  .container {
    background: #372bff;
    background: radial-gradient(ellipse at top, #433be6, transparent),
    radial-gradient(ellipse at bottom, #4d9f0c, transparent);
    position: fixed; /* or absolute */
    top: 20%;
    left: 30%;
    margin: 7px; /* Значение отступов */
    padding: 10px; /* Поля вокруг текста */
    border: 4px solid black; /* Параметры границы */
  }
  .text-left {text-align: left}
  .text-center {text-align: center}
  .text-right {text-align: right}
  .text-info {color: rgb(7, 218, 189)}

  .text-warning {color: rgb(130, 0, 248)
  }
  .text-white {color: #cef5ff
  }
</style>
