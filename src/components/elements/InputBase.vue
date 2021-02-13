<template>
    <component 
    :is="wrapper"
    :class="['input', { 'input-expand': width === 'expand' }]"
  >
  <label>{{ label }}</label>
  <input
    :disabled="disabled"
    :class="field"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
   </component>
  <!--TODO: <span class="validity"></span> добавить нормальную валидацию-->
</template>

<script>
/**
 * Для короткого текста или чисел -- в одну строку
 */
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      default: ""
    },
    /**
     *  Html-таг враппера.
     * `div, section`
     */

    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * Принудительно сделать поле активным, в фокусе, наведении.
     * `hover, active, focus`
     */
    state: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(hover|active|focus)/);
      }
    },
        /**
     *  Html-таг враппера.
     * `div, section`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div|section)/);
      }
    },
      placeholder: {
      type: String,
      default: null
    },
    /**
     * Длина поля.
     * `auto, expand`
     */
    width: {
      type: String,
      default: "expand",
      validator: value => {
        return value.match(/(auto|expand)/);
      }
    },
    /**
     * Задать статус disabled.
     * `true, false`
     */
     disabled: {
      type: Boolean,
      default: false
    },
    
  }
};
</script>



<style lang="scss" scoped>
@import "@/global-styles/styles.scss";
$color-placeholder: tint($neutral-500, 10%);
.input {
  @include stack-space($space-s); //для пробелов между полями
  width: 15rem;
  &-expand {
    width: 100%;
  }}
  label {
    cursor: pointer;
    display: block;
    @include p-sm; //шрифт заголовка формы, можно изменить p-lg or p-sm
    @include stack-space($space-xs); //расстояние между лейблом и формой
    text-align: left;
    //padding-inline-start: $space-s; выравнивание лейбла с плейсхолдером
  }
  input {
    @include reset;
    @include input-flat; //input-border or input-flat -- не смогла определиться
    @include inset-squish-space($space-s); //отступ текста от формы
    transition: all 0.2s ease;
    -webkit-appearance: none;
    appearance: none;
    color: $neutral-800;
    width: 100%;
    margin: 0;
    /* border:  $border-xs solid $neutral-400; */
    box-shadow: none;
    &::-webkit-input-placeholder {
      -webkit-font-smoothing: antialiased;
      color: $color-placeholder;
    }
    &:-ms-input-placeholder {
      color: $color-placeholder;
    }
    &::-moz-placeholder {
      color: $color-placeholder;
      -moz-osx-font-smoothing: grayscale;
      opacity: 1;
    }
    &:hover,
    &.hover {
      box-shadow: $input-shadow-inner;
    }
    &:focus,
    &.focus {
      transition: box-shadow 0.2s ease;
      box-shadow: $input-shadow-focus;
      outline: none;
      outline-offset: 0;
    }
    &[disabled] {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: $neutral-100;
      color: $neutral-200;
      cursor: not-allowed;
      &:hover,
      &.hover {
        box-shadow: none;
      }
    }
    &[pass] {
      font-size: $font-l;
    }
  }

//TODO: нормальную валидацию добавить
input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-right: 25px;
  color: #8b0000;
}
input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: -45px;
  color: #009000;
}
</style>
