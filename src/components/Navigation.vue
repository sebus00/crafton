<template>
  <div class="navigation container">
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
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
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
  methods: {
  }
};
</script>

<style scoped lang="scss">
  .navigation {
    position: fixed;
    top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);

    &__menu {
      list-style: none;
      display: flex;

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

        &:last-of-type {
          margin: 0;
        }
      }
    }
  }
</style>
