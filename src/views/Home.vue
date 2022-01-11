<template>
  <div class="container h-100 w-100">
    <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="row justify-content-center pt-4 align-items-center">
      <div class="search col-5 col-sm-4">
        <div class="row justify-content-center">
          <input type="text" v-model="mate" placeholder="食材を入力" class="search-input col-9 p-0 ps-2"/>
          <button @click="get_recipe()" :disabled="button_state" class="search-button col-2 col-md-1 p-0 pe-sm-1">
          </button>
        </div>
      </div>
    </div>
    <div class="row pt-4 justify-content-center">
      <button class="random-button col-3 col-sm-1 p-0" v-on="random_">盤めし</button>
    </div>
    <div v-show="show">
            <div class="row justify-content-center">
        <div v-for="item in this.material.data" v-bind:key="item" class="col-1 p-0">
          <div>{{ item }}</div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="data in this.datas" v-bind:key="data" class="recipe-box col-10 col-sm-3 m-3">
            <div><img v-bind:src="data['mediumImageUrl']" class="h-auto"></div>
            <div>{{ data["recipeTitle"] }}</div>
            <div>{{ data["recipeMaterial"] }}</div>
            <div>{{ data["recipeCost"] }}</div>
            <a :href="data['recipeUrl']" target="”_blank”"><button>レシピ詳細</button></a>
        </div>
      </div>
      <!-- <div style="text-align: center">
      <table class="table">
        <thead>
          <tr>
            <th class="col">タイトル</th>
            <th class="col">材料</th>
            <th class="col">値段</th>
            <th class="col">詳細</th>
            <th class="col"></th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="data in this.datas" v-bind:key="data">
            <th>{{ data["recipeTitle"] }}</th>
            <th>{{ data["recipeMaterial"] }}</th>
            <th>{{ data["recipeCost"] }}</th>
            <th>
              <a :href="data['recipeUrl']" target="”_blank”"><button>レシピ詳細</button></a>
            </th>
            <th><img v-bind:src="data['mediumImageUrl']" /></th>
          </tr>
        </tbody>
      </table>
      </div> -->
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
    show: true
  }),
  mounted() {},
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
</style>