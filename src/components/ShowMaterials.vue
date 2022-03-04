<template>
  <div class="ShowMaterials">
    <div>ThreeData:{{ThreeData}}</div>
    <div v-for="i in 3" :key="i" >
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
    // materials: Array = ["冷凍うなぎ", "みりん", "しょうゆ", "砂糖"],
  },
  setup(props) {
    let ThreeData
    for(let i in 3){
      ThreeData.push(props.materials[i])
    }
    // props.materials = props.materials.slice(0,3)
    // let materials = "["とうもろこし","バター・黒胡椒・しょうゆ"]"
    // const divMaterials = ref(
    //   this.materials
    // );
    // console.log(this.materials)
    // const divMaterials = ref(
    //   this.materials.split(",").replace("[", "").replace("", "")
    // );

    // function devide(){
    //   return divMaterials = this.materials.split(",").replace("[","").replace("","")
    // }
    return {
      // devide,
      // divMaterials,
      ThreeData,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
