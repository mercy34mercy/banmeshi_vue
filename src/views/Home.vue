<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <div>
    <input type = "text" v-model="mate">
    <button @click="add_material()">追加</button>
  </div>
  <div>
  <tr v-for="item in this.material.data" v-bind:key="item">
      <th>{{item}}</th>
  </tr>
  </div>
  <div>
    <button @click="get_recipe()">検索</button>
  </div>
  <div>
    <tr v-for="data in this.datas " v-bind:key="data">
        <th>{{data["recipeTitle"]}}</th>
        <img v-bind:src="data['foodImageUrl']">
            </tr>
  </div>
  

</template>
<script>
import axios from "axios";

export default {
  name: 'Home',
  components: {
    
  },
  data: () =>({
      material: {
        "data":[]
      },
      
      mate:"",
      title:[],
      url:[],
      datas:null
  }),
  mounted(){

  },
  methods: {
    get_recipe(){
      axios.post('https://banmeshi.azurewebsites.net/get_db_recipe_one',this.material.data)
      .then(response => (this.datas = response.data.data
      ),)
  .catch(function (error) {
    console.log(error);
  });
    },
    add_material(){
        this.material.data.push(this.mate)
        this.mate = ""
    }
  }
}
</script>
<style lang="scss" scoped>
img{
  max-width: 800px;
}
</style>