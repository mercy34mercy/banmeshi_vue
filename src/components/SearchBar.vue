<template>
  <div class="hello">
    <div>{{ userLocation }}</div>
    <div>{{ userGeolocation }}</div>
    <div>{{ updateUserLocation }}</div>
    <div>
      <button @click="update()">update</button>
    </div>
    <div>
      <button @click="update2()">update</button>
    </div>
    <div class="search col-5 col-sm-4">
      <div class="row justify-content-center">
        <input type="text" v-model="mate" placeholder="食材を入力" class="search-input col-9 p-2" />
        <button
          @click="get_recipe()"
          :disabled="button_state"
          class="search-button col-2 col-md-1 p-0 pe-sm-1"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import axios from "axios";

export default {
  name: 'SearchBar',
  props: {
    msg: String
  },

  setup() {
    const userLocation = inject('location', 'The Universe')
    const userGeolocation = inject('geolocation')
    const updateUserLocation = inject('updateLocation')

    const material22 = inject('material22')
    const button_state22 = inject('button_state22')
    const show22 = inject('show22')
    const datas22 = inject('datas22')

    return {
      userLocation,
      userGeolocation,
      updateUserLocation,
      material22,
      button_state22,
      show22,
      datas22,
    }
  },
  methods: {
    update() {
      this.updateUserLocation();
    },
    update2() {
      this.userLocation = "updated!!"
    },
    get_recipe() {
      this.show22 = true;
      this.button_state22 = true;
      this.material22.data = this.mate.replaceAll("　", " ").split(" ");
      if (this.material22.data[0] == "") {
        window.alert("材料を入力してください");
        this.button_state22 = false;
        this.show22 = false;
        return null;
      }
      // console.log(this.material.data);
      axios
        .post(
          "https://banmeshii.herokuapp.com/get_recipe",
          this.material22
        )
        .then(
          (response) => (
            (this.datas22 = response.data.data),
            // console.log(response.data),
            (this.button_state22 = false)
          )
        )
        .catch(function (error) {
          console.log(error);
          this.button_state22 = false;
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
