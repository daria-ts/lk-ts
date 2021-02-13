<template><div>
<Header class="Header" />


  <input-base  :type="text" width="auto" v-model="tester"/>
  <FormCard/>
  <h1> {{ counter}}</h1>
  <Bttn @click="countplus">+1</Bttn>
  <button v-on:click="countplus">+1</button>

          </div>
          <div class="box">
  <h1>{{tester}}</h1><h1>{{tester2}}</h1>
  <input-base  :type="text"   v-model="tester"/>
  <input type="text" v-model="tester2"/>
</div>
</template>

<script>
import Bttn from '../../components/elements/ButtonBase.vue';
import InputBase from '../../components/elements/InputBase.vue';
import FormCard from '../../components/elements/start-page/FormCard.vue';


import Header from "../../components/Header.vue";


export default {
  components: { Header, InputBase, FormCard, Bttn },
  name: "Components",

  data() { 
    return {
      tester: "tester",
      tester2: "test2",
      counter: 0
    }
  },
  methods: {
    countplus: function() {
      this.counter++
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

.header {
  position: fixed;
  top: 0;
}
.box{
  background-color: aqua;
  display: flex;
  flex-direction: column;
  background: $white;
  margin: 100px;
    box-shadow: $card-shadow;
    border-radius: $radi-m;
    padding: $space-l;
    display: flex;
    width: 500px;
}

</style>
