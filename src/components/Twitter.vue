<template>
    <div class="sns_icon  twitter_back">
    <a class="twitter" :href=this.url rel="nofollow" target="_blank" title="Twitterで共有">
        <!-- <a :href = this.url > -->
        <img src="/img/social_twitter.png" width="45" alt="twitter">
    </a>
</div>
</template>


<script>
import { inject } from "@vue/runtime-core";
// import ref from "vue";
export default {
  name: "Twitter",
  setup() {
    const recipename = inject("recipename", "recipename");
    const url = ""
    return{
        recipename,
        url
    }
  },
  methods: {
      createURL(){
        const url2 = "http://twitter.com/intent/tweet?text=今日のばんめしは"+ this.recipename+ "%20https://recipe.rakuten.co.jp/recipe/1350019194/&url=https://banmeshikun.com&hashtags=ばんめし,ばんめしガチャ"
        this.url = "https://twitter.com/share?text=今日のばんめしは&url=https://banmeshikun.com&hashtags=ばんめし,#ばんめしガチャ"
      }
  }
};
</script>



<style scoped lang="scss">
</style>