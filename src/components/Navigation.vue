<template>
  <div :class="['navigation', {'navigation--stick' : stick}, {'navigation--hidden' : !scrollUp}]">
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
      <div :class="['hamburger', {'hamburger--expanded' : hamburgerExpanded}]">
        <div class="hamburger__background" />
        <div class="hamburger__button" @click="expandHamburger">
          <span class="hamburger__icon" />
        </div>
        <ul class="hamburger__menu">
          <li
            v-for="(item, index) in menuItems"
            :key="`hamburgerMenuItem${index}`"
            class="hamburger__menu__item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../assets/images/logo.png';

export default {
  name: 'Navigation',
  data() {
    return {
      stick: false,
      hamburgerExpanded: false,
      logo,
      menuItems: ['I stopnia', 'II stopnia', 'Podyplomowe', 'Szkolenia', 'Usługi'],
      scrollUp: false,
      lastScrollPosition: 0
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.stick = window.scrollY > 0;
      this.scrollUp = window.scrollY < this.lastScrollPosition;
      this.lastScrollPosition = window.scrollY;
    });
  },
  methods: {
    expandHamburger() {
      this.hamburgerExpanded = !this.hamburgerExpanded;
      document.querySelector('html').style.overflow = this.hamburgerExpanded ? 'hidden' : 'auto';
    }
  }
};
</script>

<style scoped lang="scss">
  @import "../assets/styles/variables.scss";

  .navigation {
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 5;
    transition: all 0.6s ease-out;
    padding: 40px 0 10px 0;
    transform-origin: top;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000;
      transform-origin: top;
      transform: scaleY(0);
      transition: transform 0.6s ease-out;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }

    &--stick {
      padding-top: 10px;

      &::before {
        transform: scaleY(1);
      }

      &.navigation--hidden {
        transform: translateY(-100%);

        @media screen and (min-width: 600px) {
          transform: unset;
        }
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

        &:hover {
          transform: scale(1.1);
        }

        &:last-of-type {
          @media screen and (min-width: 1264px) {
            margin: 0;
          }
        }
      }
    }
  }

  .hamburger {
    z-index: 10;
    position: relative;

    @media screen and (min-width: 960px) {
      display: none;
    }

    &__background {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-image: radial-gradient(#006E85, $primary-color);
      transition: transform 1s cubic-bezier(0.55, 0.3, 0.35, 0.5);
    }

    &__button {
      background-color: $primary-color;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      box-shadow: 0 15px 30px rgbaPrimaryColor(0.2);
      text-align: center;
      cursor: pointer;
      position: relative;
      z-index: 1;

      &:hover {

        .hamburger__icon::before {
          transform: translateY(-2px);
        }

        .hamburger__icon::after {
          transform: translateY(2px);
        }
      }
    }

    &--expanded {
      .hamburger__menu {
        opacity: 1;
        transform: translateX(-50%);
        transition: transform 1s cubic-bezier(0.31, 0.25, 0.5, 1.3), opacity 0.1s ease-in-out;
      }

      .hamburger__background {
        transform: scale(40);
      }

      .hamburger__icon {
        background-color: transparent;

        &::before {
          transform: translateY(9px) rotate(135deg) !important;
        }

        &::after {
          transform: translateY(-9px) rotate(-135deg) !important;
        }
      }
    }

    &__icon {
      position: absolute;
      top: calc(50% - 1px);
      height: 2px;
      width: 30px;
      left: 20px;
      background-color: #fff;
      display: inline-block;
      transition: all 0.5s ease-out;

      &::before, &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 30px;
        display: inline-block;
        background-color: #fff;
        left: 0;
        transition: all 0.5s ease-out;
      }

      &::before {
        top: -9px;
      }

      &::after {
        top: 9px;
      }
    }

    &__menu {
      margin: 0;
      padding: 0;
      opacity: 0;
      list-style: none;
      width: 100%;
      max-width: 300px;
      position: fixed;
      left: 50%;
      top: 150px;
      transform: translateX(calc(-50vw - 100%));
      transition: transform 1s cubic-bezier(0.31, 0.25, 0.5, 1.3), opacity 3s ease-in-out;

      &__item {
        background-color: #FFF;
        color: $primary-color;
        width: 100%;
        white-space: nowrap;
        cursor: pointer;
        font-size: 16px;
        line-height: 60px;
        font-weight: 700;
        text-align: center;

        &:hover {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          font-weight: 800;
        }

        + .hamburger__menu__item {
          margin-top: 30px;
        }
      }
    }
  }
</style>
