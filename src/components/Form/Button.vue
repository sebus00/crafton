<template>
  <button class="button" @click="onClick">
    {{ label }}
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables.scss";

  .button {
    padding: 0 30px;
    height: 54px;
    color: #FFF;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 30px;
    font-weight: 800;
    font-size: 14px;
    line-height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $primary-color;
    box-shadow: 0 11px 24px rgbaPrimaryColor(.12);;
    white-space: nowrap;
    cursor: pointer;
    border: none;

    &:hover {
      box-shadow: 0 10px 16px rgbaPrimaryColor(.5);;
    }

    &:focus {
      outline: none;
    }
  }
</style>
