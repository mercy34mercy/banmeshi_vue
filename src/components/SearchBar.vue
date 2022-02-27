<template>
    <div class="row justify-content-center pt-4 align-items-center">
      <div class="search col-5 col-sm-4">
        <div class="row justify-content-center">
          <input type="text" v-model="mate" placeholder="食材を入力" class="search-input col-9 p-2"/>
          <button @click="get_recipe()" :disabled="button_state" class="search-button col-2 col-md-1 p-0 pe-sm-1">
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
</style>
