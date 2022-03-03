<template>
  <div class="container h-100 w-100 justify-content-center align-self-center">
    <div class="home">
      <img alt="Vue logo" src="../assets/artboard.png" />
    </div>
    <SearchBar></SearchBar>
    <SearchOne></SearchOne>
    <div>refData {{ refData[0] }}</div>

    <div v-show="show">
      <div class="row justify-content-center">
        <div
          v-for="item in this.materials"
          v-bind:key="item"
          class="col-3 col-xs-1 p-0 mt-3"
        >
          <div>{{ item }}</div>
        </div>
      </div>
      <div class="row justify-content-center mw-100 m-auto">
        <div
          v-for="data in this.refData"
          v-bind:key="data"
          class="recipe-box col-lg-5 col-md-5 col-xs-9 m-3"
        >
          <div
            class="row align-items-center justify-content-center"
            style="height: 300px"
          >
            <div class="col-5">
              <img
                v-bind:src="data['foodImageUrl']"
                class="w-100 mt-2"
                style="height: 230px; object-fit: cover"
              />
            </div>
            <div class="col-6" style="text-align: left">
              <div class="fw-bold recipe-title" style="height: 4.5rem">
                {{ data["recipeTitle"] }}
              </div>
              <div style="height: 1.5rem"></div>
              <div class="text-truncate">{{ data["recipeMaterial"] }}</div>
              <!-- <div class="text-truncate">{{ data["recipeMaterial"][1] }}</div>
              <div class="text-truncate">{{ data["recipeMaterial"][2] }}</div> -->
              <div style="height: 1.5rem"></div>
              <div>{{ data["recipeCost"] }}</div>
            </div>
            <a :href="data['recipeUrl']" target="”_blank”">
              <button class="recipe-button">レシピ詳細</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import SearchBar from "@/components/SearchBar";
import SearchOne from "@/components/SearchOne";
import { provide, ref, reactive } from "vue";

export default {
  name: "Home",
  components: {
    SearchBar,
    SearchOne,
  },
  setup() {
    const location = ref("hahahahahhah");
    const geolocation = reactive({
      userGeolocation: 90,
      latitude: 135,
    });

    const refData = ref({
      foodImageUrl: "",
      mediumImageUrl: "",
      recipeCost: "",
      recipeId: "",
      recipeMaterial: [""],
      recipeTitle: "",
      recipeUrl: "",
      smallImageUrl: "",
    });
    const button_state = ref(false);
    const show = ref(false);
    const recipe_material = ref(false);
    const mate = ref("");
    const materials = ref({
      data:[]
    });

    const updateLocation = () => {
      location.value = "South Pole";
    };

    provide("location", location);
    provide("geolocation", geolocation);
    provide("updateLocation", updateLocation);

    provide("refData", refData);

    return {
      location,
      geolocation,
      updateLocation,
      refData,
      button_state,
      show,
      recipe_material,
      mate,
      materials,
    };
  },
  data: () => ({
    // materials: {
    //   data: [],
    // },
    // mate: "",
    // title: [],
    // url: [],
    // refData: null,
    // button_state: false,
    // show: true,
    // recipe_material: []
  }),

  mounted() {},
  methods: {
    // random() {
    //   axios
    //     .get(
    //       "https://banmeshii.herokuapp.com/random_one"
    //     )
    //     .then(
    //       (response) => (
    //         (this.refData = response.data.data)
    //       )
    //     )
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
    // get_recipe() {
    //   this.show = true;
    //   this.button_state = true;
    //   this.materials.data = this.mate.replaceAll("", " ").split(" ");
    //   if (this.materials.data[0] == "") {
    //     window.alert("材料を入力してください");
    //     this.button_state = false;
    //     this.show = false;
    //     return null;
    //   }
    //   // console.log(this.materials.data);
    //   axios
    //     .post(
    //       "https://banmeshii.herokuapp.com/get_recipe",
    //       this.materials
    //     )
    //     .then(
    //       (response) => (
    //         (this.refData = response.data.data),
    //         // console.log(response.data),
    //         (this.button_state = false)
    //       )
    //     )
    //     .catch(function (error) {
    //       console.log(error);
    //       this.button_state = false;
    //     });
    // },
  },
};
</script>
<style lang="scss" scoped>
//milk #fcfdfe
//strawberry #d8412f
//papaya #fe7a47
//granola #f5ca99
//black #100E29
* {
  color: #100e29;
}
img {
  max-width: 800px;
}

.recipe-box {
  background-color: #f5ca99;
  // max-width: 350px;
}

.recipe-button {
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  color: #fcfdfe;
  border: none;
  outline: none;
  background-color: #d8412f;
}

.recipe-title {
  text-overflow: ellipsis;
  overflow: hidden;
  overflow-wrap: break-word;
}
</style>