<template>
  <div class="container h-100 w-100">
    <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="row justify-content-center pt-4 align-items-center">
      <div class="search col-5 col-sm-4">
        <div class="row justify-content-center">
          <input type="text" v-model="mate" placeholder="食材を入力" class="search-input col-9 p-2"/>
          <button @click="get_recipe()" :disabled="button_state" class="search-button col-2 col-md-1 p-0 pe-sm-1">
          </button>
        </div>
      </div>
    </div>
    <div class="row pt-4 justify-content-center">
      <button class="random-button col-4 col-xs-1 p-0 pt-2 pb-2" @click="random()">今日の晩飯</button>
    </div>
    <div v-show="show">
      <div class="row justify-content-center">
        <div v-for="item in this.material.data" v-bind:key="item" class="col-3 col-xs-1 p-0 mt-3">
          <div>{{ item }}</div>
        </div>
      </div>
      <div class="row justify-content-center mw-100 m-auto" >
        <div v-for="data in this.datas" v-bind:key="data" class="recipe-box col-lg-5 col-md-5 col-xs-9 m-3 ">
          <div class="row align-items-center justify-content-center" style="height:300px;">
            <div class="col-5"><img v-bind:src="data['foodImageUrl']" class="w-100 mt-2" style="height:230px; object-fit:cover;"></div>
            <div class="col-6" style="text-align:left;">
              <div class="fw-bold recipe-title" style="height: 4.5rem;">{{ data["recipeTitle"] }}</div>
              <div style="height:1.5rem;"></div>
              <div class="text-truncate">{{ data["recipeMaterial"][0]}}</div>
              <div class="text-truncate">{{ data["recipeMaterial"][1]}}</div>
              <div class="text-truncate">{{ data["recipeMaterial"][2]}}</div>
              <div style="height:1.5rem;"></div>
              <div>{{ data["recipeCost"] }}</div>
            </div>
              <a :href="data['recipeUrl']" target="”_blank”"><button class="recipe-button">レシピ詳細</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

export default {
  name: "Home",
  components: {},
  data: () => ({
    material: {
      data: [],
    },
    mate: "",
    title: [],
    url: [],
    datas: null,
    button_state: false,
    show: true,
    recipe_material:[]
  }),
  mounted() {},
  methods: {
    random(){
      axios
        .get(
          "https://banmeshii.herokuapp.com/random_one"
        )
        .then(
          (response) => (
            (this.datas = response.data.data)
          )
        )
        .catch(function (error) {
          console.log(error);
        });
    },
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
};
</script>
<style lang="scss" scoped>
//milk #fcfdfe
//strawberry #d8412f
//papaya #fe7a47
//granola #f5ca99
//black #100E29
*{
  color:#100E29;
}
img {
  max-width: 800px;
}

.search{
  // border: solid;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.search-input {
  background: none;
  color: #100E29;
  border: none;
  outline: none;
}

.search-button {
  border: none;
  cursor: pointer;
  background: none;
  background-image:url("../assets/baseline_search_black_24dp.png");
  background-repeat: no-repeat;
  background-position: center;
}

.random-button{
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  color: #fcfdfe;
  border: none;
  outline: none;
  background-color: #fe7a47;
}

.recipe-box{
  background-color:#f5ca99;
  // max-width: 350px;
}

.recipe-button{
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  color: #fcfdfe;
  border: none;
  outline: none;
  background-color: #d8412f;
}

.recipe-title{
    text-overflow: ellipsis;
    overflow: hidden;
    overflow-wrap: break-word;
}
</style>