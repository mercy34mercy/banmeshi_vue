<template>
    <div class="container h-100 w-100 justify-content-center align-self-center">
      <div class="home">
        <img src="../assets/artboard.png" class="img-fluid" alt="Vue logo" />
      </div>
      <SearchBar></SearchBar>
      <div v-if="isLoading" class="loader">
        <div class="loader"></div>
      </div>
        <div v-else>
      <div v-show="show">
        <!-- <div class="row justify-content-center">
        <div
          v-for="item in this.materials.data"
          v-bind:key="item"
          class="col-3 col-xs-1 p-0 mt-3"
        >
          <div>{{ item }}</div>
        </div>
      </div> -->
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
                <ShowMaterials
                  :materials="data['threeRecipeMaterial']"
                ></ShowMaterials>
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
  </div>
</template>
<script>
// import axios from "axios";
import SearchBar from "@/components/SearchBar";
import ShowMaterials from "@/components/ShowMaterials";
import { provide, ref, reactive } from "vue";

export default {
  name: "Home",
  components: {
    SearchBar,
    ShowMaterials,
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
      recipeMaterial: ["aaa", "bbb", "ccc"],
      recipeTitle: "",
      recipeUrl: "",
      smallImageUrl: "",
    });
    const button_state = ref(false);
    const show = ref(false);
    const isLoading = ref(false);
    const recipe_material = ref(false);
    const mate = ref("");
    const materials = ref({
      data: [],
    });

    const updateLocation = () => {
      location.value = "South Pole";
    };

    provide("location", location);
    provide("geolocation", geolocation);
    provide("updateLocation", updateLocation);

    provide("refData", refData);
    provide("button_state", button_state);
    provide("show", show);
    provide("isLoading", isLoading);

    return {
      location,
      geolocation,
      updateLocation,
      refData,
      button_state,
      show,
      isLoading,
      recipe_material,
      mate,
      materials,
    };
  },
  data: () => ({}),

  mounted() {},
  methods: {},
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
  max-width: 100%;
  height: auto;
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

.loader {
  color: #e33326;
  font-size: 20px;
  margin: 200px auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load4 1.3s infinite linear;
  animation: load4 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
@keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
</style>