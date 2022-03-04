<template>
  <div class="ShowMaterials">
    <div v-for="material in this.materials" :key="material" >
      <div class="text-truncate">{{ material }}</div>
    </div>
  </div>
</template>

<script>
// import ref from "vue";
export default {
  name: "ShowMaterials",
  props: {
    materials:Array ,
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
