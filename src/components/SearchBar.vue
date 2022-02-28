<template>
  <div class="hello">
  <div>{{userLocation}}</div>
  <div>{{userGeolocation}}</div>
  <div>{{updateUserLocation}}</div>
  <div><button @click="update()">update</button></div>
  <div><button @click="update2()">update</button></div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'SearchBar',
  props: {
    msg: String
  },

  setup() {
    const userLocation = inject('location', 'The Universe')
    const userGeolocation = inject('geolocation')
    const updateUserLocation = inject('updateLocation')

    return {
      userLocation,
      userGeolocation,
      updateUserLocation,
    }
  },
  methods: {
    update(){
      this.updateUserLocation();
    },
    update2(){
      this.userLocation="updated!!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
