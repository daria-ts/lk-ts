<template>
  <Header class="Header" />

  <div class="box">
    <h1>{{ tester }}</h1>
    <h1>{{ tester2 }}</h1>
    <InputBase :type="text" v-model="tester" />
    <input type="text" v-model="tester2" />
  </div>
</template>

<script>
import InputBase from "../../components/elements/InputBase.vue";

import Header from "../../components/Header.vue";

export default {
  components: { Header, InputBase },
  name: "Components",
  InputBase: {
    props: ["modelValue"],
    emits: ["update:modelValue"],
    template: `
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  `
  },
  data() {
    return {
      tester: "tester",
      tester2: "test2"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

.header {
  position: fixed;
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
</style>
