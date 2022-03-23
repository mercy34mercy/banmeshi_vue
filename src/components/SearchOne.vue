<template>
  <div class="row pt-4 justify-content-center">
    <button class="random-button col-4 col-xs-1 p-0 pt-2 pb-2" @click="random()">今日の晩飯</button>
  </div>
</template>

<script>
import { inject } from 'vue'
import axios from "axios";


export default {
  name: 'SearchOne',
  props: {
    msg: String
  },
  setup() {
    const childData = inject ('refData', 'refData')
    const Show = inject('show',false)
    const isLoading = inject('isLoading',false)



    return {
      childData,
      Show,
      isLoading
    }
  },
  methods: {
    random() { 
      this.isLoading = true
      axios
        .get(
          "https://banmeshii.herokuapp.com/random_one"
        )
        .then(
          (response) => (
            (this.childData = response.data.data),
            (this.isLoading = false),
            (this.Show = true)

          )
        )
        .catch(function (error) {
          console.log(error);
        });
    },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.random-button {
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  color: #fcfdfe;
  border: none;
  outline: none;
  background-color: #fe7a47;
}
</style>
