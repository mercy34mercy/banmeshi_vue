<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <div>
    <input type="text" v-model="mate" />
    <button @click="get_recipe()" :disabled="button_state">検索</button>
  </div>
  <div>
    <tr v-for="item in this.material.data" v-bind:key="item">
      <th>{{ item }}</th>
    </tr>
  </div>
  <div style="text-align: center">
    <table>
      <tr>
        <th>タイトル</th>
        <th>材料</th>
        <th>値段</th>
        <th>詳細</th>
        <th></th>
      </tr>
      <tr v-for="data in this.datas" v-bind:key="data">
        <th>{{ data["recipeTitle"] }}</th>
        <th>{{ data["recipeMaterial"] }}</th>
        <th>{{ data["recipeCost"] }}</th>
        <th>
          <a :href="data['recipeUrl']" target="”_blank”"
            ><button>レシピ詳細</button></a
          >
        </th>
        <th><img v-bind:src="data['mediumImageUrl']" /></th>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";

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
  }),
  mounted() {},
  methods: {
    get_recipe() {
      this.button_state = true;
      this.material.data = this.mate.replaceAll("　", " ").split(" ");
      if (this.material.data[0] == "") {
        window.alert("材料を入力してください");
        this.button_state = false;
        return null;
      }
      // console.log(this.material.data);
      axios
        .post(
          "https://banmeshirakuten.azurewebsites.net/get_db_recipe_one",
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
img {
  max-width: 800px;
}
</style>