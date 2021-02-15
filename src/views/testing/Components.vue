<template
  ><div>
    <Header class="Header" />

    <input-base :type="text" width="auto" v-model.lazy="tester" />
    <FormCard />
    <h1>{{ title }} {{ counter }}</h1>
    <Bttn @click="countplus(1, 'не сюда', $event)">+1</Bttn>
    <button v-on:click="countplus(5, 'жми еще!', $event)">+1</button>
  </div>
  <div class="box">
    <h1>{{ tester }}</h1>
    <InputBase :type="text" v-model="tester" />
    <h1 @mouseover="onHover">{{ tester2 }}</h1>
    <input type="text" v-model.lazy="tester2" />
  </div>
</template>

<script>
import Bttn from "../../components/elements/ButtonBase.vue";
import InputBase from "../../components/elements/InputBase.vue";
import FormCard from "../../components/elements/start-page/FormCard.vue";

import Header from "../../components/Header.vue";

export default {
  components: { Header, InputBase, FormCard, Bttn },
  name: "Components",

  data() {
    return {
      tester: "tester",
      tester2: "test2",
      counter: 0,
      title: "Жми!"
    };
  },
  methods: {
    countplus: function(num, str, event) {
      this.counter += num;
      this.title = str;
      if (num === 5) {
        event.target.style.color = "yellow";
      } else if (num === 1) {
        event.target.style.color = "green";
      }
    },
    onHover: function(event) {
      event.target.style.size = "40px";
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
.box {
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
h1 {
  &.change {
    color: $neutral-400;
  }
}
</style>
