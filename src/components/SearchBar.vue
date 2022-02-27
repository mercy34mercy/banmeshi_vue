<template>
  <div class="row justify-content-center pt-4 align-items-center">
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
    const materials = inject('materials')

    return {
      userLocation,
      userGeolocation,
      updateUserLocation,
      materials
    }
  },
  methods: {
    get_recipe() {
      this.show = true;
      this.button_state = true;
      this.material.data = this.mate.replaceAll("　", " ").split(" ");
      if (this.material.data[0] == "") {
        window.alert("材料を入力してください");
        this.button_state = false;
        this.show = false;
        return null;
      }
      // console.log(this.material.data);
      axios
        .post(
          "https://banmeshii.herokuapp.com/get_recipe",
          this.material
        )
        .then(
          (response) => (
            (this.datas = response.data.data),
            // console.log(response.data),
            (this.button_state = false)
          )
        )
        .catch(function (error) {
          console.log(error);
          this.button_state = false;
        });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search {
  // border: solid;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.search-input {
  background: none;
  color: #100e29;
  border: none;
  outline: none;
}

.search-button {
  border: none;
  cursor: pointer;
  background: none;
  background-image: url("../assets/baseline_search_black_24dp.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
