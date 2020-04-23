<template>
  <div class="modal">
    <div class="modal__wrapper">
      <slot></slot>
      <button class="modal__close" @click="onClose" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    onClose: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/styles/variables.scss";

  .modal {
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 5;
    background-color: rgba(0,0,0,.8);
    display: flex;
    align-items: center;
    justify-content: center;

    &__wrapper {
      position: relative;
    }

    &__close {
      width: 27px;
      height: 27px;
      background: $primary-color;
      border: none;
      position: absolute;
      right: -50px;
      top: -50px;
      cursor: pointer;

      &:focus {
        outline: unset;
      }

      &::before,
      &::after {
        content: '';
        width: 16px;
        height: 2px;
        position: absolute;
        background-color: #fff;
        display: block;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        transform-origin: 50%;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  }
</style>
