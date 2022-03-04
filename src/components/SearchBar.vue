<template>
  <div class="row justify-content-center pt-4 align-items-center">
    <div class="search col-5 col-sm-4">
      <div class="row justify-content-center">
        <input
          type="text"
          v-model="mate"
          placeholder="食材を入力"
          class="search-input col-9 p-2"
          @keypress.enter="get_recipe()"
        />
        <button
          @click="get_recipe()"
          :disabled="buttonState"
          class="search-button col-2 col-md-1 p-0 pe-sm-1"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import axios from "axios";

export default {
  name: "SearchBar",
  props: {
    msg: String,
  },
  setup() {
    const materials = inject("materials", { data: [] });
    const buttonState = inject("button_state", false);
    const Show = inject("show", false);
    const childData = inject("refData", "refData");

    return {
      materials,
      buttonState,
      Show,
      childData,
    };
  },
  methods: {
    get_recipe() {
      this.buttonState = true;
      this.materials.data = this.mate.replaceAll("　", " ").split(" ");
      if (this.materials.data[0] == "") {
        window.alert("材料を入力してください");
        this.buttonState = false;
        this.Show = false;
        return null;
      }
      axios
        .post("https://banmeshii.herokuapp.com/get_recipe", this.materials)
        .then(
          (response) => (
            (this.childData = response.data.data),
            (this.buttonState = false),
            (this.Show = true)
          )
        )
        .catch(function (error) {
          console.log(error);
          this.buttonState = false;
        });
    },
  },
};
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
