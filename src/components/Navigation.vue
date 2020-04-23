<template>
  <div :class="['navigation', {'navigation--sticked' : sticked}]">
    <div class="navigation__wrapper container">
      <div class="navigation__logo">
        <img :src="logo" alt="logo"/>
      </div>
      <ul class="navigation__menu">
        <li
          v-for="(item, index) in menuItems"
          :key="`menuItem${index}`"
          class="navigation__menu__item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      sticked: false
    };
  },
  props: {
    logo: {
      logo: String,
      required: true
    },
    menuItems: {
      type: Array,
      required: true
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.sticked = window.scrollY > 0;
    });
  }
};
</script>

<style scoped lang="scss">
  .navigation {
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 5;
    transition: padding 1s ease-out;
    padding: 40px 0 10px 0;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000;
      transform-origin: top;
      transform: scaleY(0);
      transition: transform 1s ease-out;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }

    &--sticked {
      padding-top: 10px;

      &::before {
        transform: scaleY(1);
      }
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__menu {
      list-style: none;
      display: none;

      @media screen and (min-width: 960px) {
        display: flex;
      }

      &__item {
        color: #fff;
        font-size: 16px;
        line-height: 60px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 51px;
        padding-left: 16px;
        cursor: pointer;
        white-space: nowrap;

        &:last-of-type {
          @media screen and (min-width: 1264px) {
            margin: 0;
          }
        }
      }
    }
  }
</style>
