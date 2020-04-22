<template>
  <div class="checkbox">
    <input
      type="checkbox"
      v-model="value"
      :id="name"
      :name="name"
      class="checkbox__input"
    />
    <label :for="name" class="checkbox__label">
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
  name: 'CheckBox',
  data() {
    return {
      value: false
    };
  },
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  .checkbox {
    width: 100%;
    margin-bottom: 20px;

    &__label {
      position: relative;
      cursor: pointer;
      font-weight: 600;
      font-size: 10px;
      line-height: 16px;
      display: block;
      padding-left: 30px;

      &::before {
        content: '';
        display: inline-block;
        vertical-align: text-top;
        width: 18px;
        height: 18px;
        background: #FFF;
        box-shadow: inset 0.7px 0.7px 1px rgba(0, 0, 0, 0.16);
        left: 0;
        position: absolute;
      }
    }

    &__input {
      position: absolute;
      opacity: 0;

      &:checked + .checkbox__label:after {
        content: '';
        position: absolute;
        left: 5px;
        top: 9px;
        background: #00B6DC;
        width: 2px;
        height: 2px;
        box-shadow: 2px 0 0 #00B6DC,
        4px 0 0 #00B6DC,
        4px -2px 0 #00B6DC,
        4px -4px 0 #00B6DC,
        4px -6px 0 #00B6DC,
        4px -8px 0 #00B6DC;
        transform: rotate(45deg);
      }
    }
  }
</style>
