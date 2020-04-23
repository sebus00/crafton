<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :checked="value"
      @change="$emit('change', $event.target.checked)"
      :id="name"
      :name="name"
      :class="['checkbox__input', {'checkbox__input--error' : error}]"
    />
    <label :for="name" class="checkbox__label">
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
  name: 'CheckBox',
  props: {
    value: {},
    error: {
      type: Boolean,
      default: false
    },
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

      &--error {
        + .checkbox__label:before {
          border: 1px solid #FF4148;
        }
      }

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
