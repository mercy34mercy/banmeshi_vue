<template>
  <div class="row pt-4 justify-content-center">
    <button class="random-button col-4 col-xs-1 p-0 pt-2 pb-2" @click="random()">今日の晩飯deyo</button>

    <div>userLocation {{childData}}</div>
  </div>
</template>

<script>
import { inject } from 'vue'
import axios from "axios";


export default {
  name: 'SearchOne',
  props: {
    msg: String
  },
  setup() {
    const userLocation = inject ('location', 'The Universe')
    const userGeolocation = inject < { userGeolocation: 0, latitude: 20 } > ('geolocation')
    const updateUserLocation = inject('updateLocation')
    const childData = inject ('datas', 'datas')
    const childrefData = inject ('refdata', 'refdata')


    return {
      userLocation,
      userGeolocation,
      updateUserLocation,
      childData,
      childrefData,
    }
  },
  methods: {
    random() {
      // this.updateUserLocation();
      // this.userLocation = "upudated"
      // this.userLocation = {data:"datadayo"}
//       this.userLocation = {
//     "foodImageUrl": "https://image.space.rakuten.co.jp/d/strg/ctrl/3/00224f52c58693c74a4ae303ae426c5c352b5b9f.25.2.3.2.jpg",
//     "mediumImageUrl": "https://image.space.rakuten.co.jp/d/strg/ctrl/3/00224f52c58693c74a4ae303ae426c5c352b5b9f.25.2.3.2.jpg?thum=54",
//     "recipeCost": "500円前後",
//     "recipeId": "1540010826",
//     "recipeMaterial": [
//         "とうもろこし",
//         "バター・黒胡椒・しょうゆ"
//     ],
//     "recipeTitle": "粒たっぷり！とうもろこしごはん",
//     "recipeUrl": "https://recipe.rakuten.co.jp/recipe/1540010826/",
//     "smallImageUrl": "https://image.space.rakuten.co.jp/d/strg/ctrl/3/00224f52c58693c74a4ae303ae426c5c352b5b9f.25.2.3.2.jpg?thum=55"
// };
      // console.log(this.userLocation);
 
      axios
        .get(
          "https://banmeshii.herokuapp.com/random_one"
        )
        .then(
          (response) => (
            (this.childData = response.data.data,this.childrefData = response.data.data,console.log("result is ",this.childData[0]))

          )
        )
        .catch(function (error) {
          console.log(error);
        });
    },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.random-button {
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  color: #fcfdfe;
  border: none;
  outline: none;
  background-color: #fe7a47;
}
</style>
