<template>
  <div :class="['text-field', {'text-field--active' : focusedInput}, {'text-field--valued' :  value}]">
    <input
      v-if="tag === 'input'"
      v-model="value"
      :id="name"
      :name="name"
      :type="type"
      :title="label"
      :pattern="pattern"
      class="text-field__input"
      @focus="focusInput()"
      @blur="blurInput()"
      autocomplete="off"
    />
    <textarea
      v-else-if="tag === 'textarea'"
      v-model="value"
      :id="name"
      :name="name"
      type="text"
      :title="label"
      :pattern="pattern"
      class="text-field__input text-field__input--area"
      :style="{height: `${height}px`}"
      @focus="focusInput()"
      @blur="blurInput()"
    />
    <label :for="name" class="text-field__label">
      {{ label }}
    </label>
    <span class="text-field__message"></span>
  </div>
</template>

<script>
export default {
  name: 'Text-Field',
  data() {
    return {
      focusedInput: false,
      value: ''
    };
  },
  props: {
    tag: {
      type: String,
      default: 'input'
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    pattern: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 162
    }
  },
  methods: {
    focusInput() {
      this.focusedInput = true;
    },
    blurInput() {
      this.focusedInput = false;
    }
  }
};
</script>

<style scoped lang="scss">
  .text-field {
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0px 3px 6px rgba(145, 154, 159, 0.08);

    &--active, &--valued {
      .text-field__label {
        transform: translateY(-75%) scale(.75);
      }

      .text-field__input {
        padding-top: 12px;

        &--area {
          padding-top: 20px;
        }
      }
    }

    &--active {
      box-shadow: 0 8px 8px rgba(145, 154, 159, 0.16);
    }

    &__label {
      position: absolute;
      left: 15px;
      top: 50%;
      max-width: 90%;
      transform: translateY(-50%);
      transform-origin: top left;
      transition: .3s cubic-bezier(.25,.8,.5,1);
      font-size: 15px;
      line-height: 32px;
      font-weight: 400;
      color: #7B94A5;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      pointer-events: none;
    }

    &__input {
      height: 52px;
      padding-left: 15px;
      width: 100%;
      font-size: 15px;
      line-height: 32px;
      font-weight: 600;
      color: #000;
      border: none;
      flex: 1 1 auto;

      &--area {
        height: auto;
        line-height: 23px;

        + .text-field__label {
          top: 26px;
        }
      }

      &:focus {
        outline: none;
      }
    }

    &__message {
      position: absolute;
      top: calc(100% + 3px);
      left: 3px;
      color: red;
    }

    &__submit {
      border: none;
      background-color: green;
      color: #fff;
      text-transform: uppercase;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-top: 30px;
      border-radius: 4px;
    }
  }
</style>