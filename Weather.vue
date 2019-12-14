<template>

  <section>

    <div class="container text-white">

      <!-- weather information start -->
      <ul class="text-center" style="margin-top: 100px">
        <li>
          <div style="font-size: 100px; padding-bottom: 20px" class="text-warning">
            <span>{{weatherData.temperature}}</span> &deg;C
          </div>
          <div style="font-size: 2rem; font-weight: bold;" class="text-center" >
            {{weatherData.status | capitalize}}
          </div>
        </li>
        <li></li>
        <li style="margin-left: 60px">
          <table  class="text-left">
            <thead></thead>
            <tbody>
            <tr>
              <th>City:</th>
              <td>{{weatherData.city}}</td>
            </tr>
            <tr>
              <th>Humidity:</th>
              <td>{{weatherData.humidity}} %</td>
            </tr>
            <tr>
              <th>Pressure:</th>
              <td>{{weatherData.pressure}} atm</td>
            </tr>
            <tr>
              <th>Wind Speed:</th>
              <td>{{weatherData.wind.direction}} m/s</td>
            </tr>
            <tr>
              <th>Wind Direction:</th>
              <td>{{weatherData.wind.direction}}&deg; (meteorological)</td>
            </tr>
            </tbody>
          </table>
        </li>
      </ul><!-- weather information end -->
      <div class="text-center" style="margin-top: 150px;">
        <button @click="fetchWeatherData"
                style="padding: 10px">
          Click to check weather info
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Weather',
  data () {
    return {
      lon: null,
      lat: null,
      weatherData: {
        city: '-',
        status: '---',
        temperature: '-',
        humidity: '-',
        pressure: '-',
        wind: {
          speed: '-',
          direction: '-'
        }
      },
      API_KEY: '91b0ab3c5cc120add5f863222da4ad73'
    }
  },
  created () {
    this.$getLocation({
      enableHighAccuracy: true,
      timeout: Infinity
    })
      .then(coordinates => {
        this.lon = coordinates.lng
        this.lat = coordinates.lat
        this.isLocation = true
      })
  },
  methods: {
    async fetchWeatherData () {
      const axios = require('axios').default
      const apiUri = 'https://api.openweathermap.org/data/2.5/weather?lat=' + this.lat + '&&lon=' + this.lon + '&&appid=' + this.API_KEY

      if (this.isLocation) {
        try {
          const response = await axios.get(apiUri)
          this.setWeatherData(response.data)
        } catch (err) {
          alert(err)
        }
      } else {
        alert('Please allow to access your location!')
      }
    },
    setWeatherData (data) {
      this.weatherData.city = data.name
      this.weatherData.status = data.weather[0].description

      this.weatherData.wind.speed = data.wind.speed
      this.weatherData.wind.direction = data.wind.deg
      this.weatherData.humidity = data.main.humidity
      this.weatherData.pressure = (data.main.pressure * 0.001).toFixed(3)
      this.weatherData.temperature = (data.main.temp - 273).toFixed(0)
    }
  }
}
</script>

<style scoped>
  section {
    padding-top: 30px;
    min-height: 400px;
    text-align: left;
  }
  th, td {font-size: 1.1rem;}
  td {padding-left: 10px; color: rgb(97, 229, 231)
  }
  li {
    display: inline-block;
    list-style: none
  }

</style>
