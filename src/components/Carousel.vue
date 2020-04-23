<template>
  <div class='carousel'>
    <ul
      class="carousel__wrapper"
      :style="[{transform: `translateX(-${activeItem * 100}%)`}]"
    >
      <div
        v-for="(item, index) in images"
        :key="`carouselItem${index}`"
        :class="['carousel__item', {'carousel__item--active' : index === activeItem}]"
        :style="[{ backgroundImage: `url(${item})` }, {left: `${index * 100}%`}]"
      />
    </ul>
    <div class="container carousel__container">
      <div class="carousel__text">
        <h1>
          Będziesz się uczyć z ciekawością. <br>
          <span>Obiecujemy.</span>
        </h1>
        <div class="carousel__links">
          <a class="carousel__link" href="/" target="_blank">Zobacz więcej</a>
          <a class="carousel__link" href="/" target="_blank">Umów się z aniołem</a>
        </div>
      </div>
      <div
        class="carousel__arrows"
      >
        <button
          :class="['carousel__arrow', 'carousel__arrow--left']"
          @click="moveCarousel(activeItem - 1)"
        >
          <img src="../assets/images/arrowLeft.png" alt=""/>
        </button>
        <button
          :class="['carousel__arrow', 'carousel__arrow--right']"
          @click="moveCarousel(activeItem + 1)"
        >
          <img src="../assets/images/arrowRight.png" alt=""/>
        </button>
      </div>
    </div>
    <div
      class="carousel__indicators"
    >
      <button
        v-for="index in images.length"
        :key="`carouselIndicator${index - 1}`"
        :class="['carousel__indicator',
          {'carousel__indicator--active' : (index - 1) === activeItem}]"
        @click="moveCarousel(index - 1)"
      >
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Carousel',
  data() {
    return {
      activeItem: 0
    };
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  methods: {
    modulo(n, m) {
      return ((n % m) + m) % m;
    },
    moveCarousel(index) {
      this.activeItem = this.modulo(index, this.images.length);
    }
  }
};
</script>

<style scoped lang="scss">
  @import "../assets/styles/variables.scss";

  .carousel {
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: #000;

    &__container {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      height: 100%;
      padding-top: calc(25vh - 60px);
      padding-left: 50px;

      @media screen and (min-width: 600px) {
        padding-top: calc(50vh - 60px);
      }

      @media screen and (min-width: 1264px) {
        padding-left: 0;
      }
    }

    &__wrapper {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;
      position: relative;
      transition: transform 200ms ease-in;
      opacity: .5;
    }

    &__item {
      height: 100%;
      width: 100%;
      background: center / cover no-repeat #000;
      position: absolute;
      top: 0;
      bottom: 0;
    }

    &__indicators {
      position: absolute;
      display: flex;
      flex-direction: row;
      bottom: 50px;
      right: 50%;
      transform: translateX(50%);

      @media screen and (min-width: 960px) {
        flex-direction: column;
        bottom: unset;
        top: 50%;
        right: 50px;
        transform: translateY(-50%);
      }

      @media screen and (min-width: 1500px) {
        right: 100px;
      }
    }

    &__indicator {
      margin-right: 25px;
      height: 15px;
      width: 15px;
      border: 0;
      border-radius: 50%;
      background-color: #FFF;
      cursor: pointer;

      @media screen and (min-width: 960px) {
        margin-bottom: 25px;
      }

      &:last-of-type {
        margin: 0
      }

      &:focus {
        outline: unset;
      }

      &--active {
        background-color: $secondary-color;
      }
    }

    &__arrows {
      @media screen and (max-width: 400px) {
        display: none;
      }
    }

    &__arrow {
      background: none;
      border: 0;
      cursor: pointer;

      &:focus {
        outline: unset;
      }
    }

    &__text {
      margin-bottom: 50px;

      h1 {
        color: #FFF;

        span {
          color: $primary-color;
        }
      }
    }

    &__links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 48px 0 88px 0;

      @media screen and (min-width: 600px) {
        flex-direction: row;
      }
    }

    &__link {
      border: 2px solid #fff;
      margin-bottom: 18px;
      padding: 0 30px;
      background: transparent;
      color: #FFF;
      text-decoration: none;
      text-transform: uppercase;
      border-radius: 30px;
      font-size: 14px;
      font-weight: 800;
      line-height: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 11px 24px rgba(0, 0, 0, 0.06);
      white-space: nowrap;

      @media screen and (min-width: 600px) {
        margin-right: 18px;
        margin-bottom: 0;
      }

      &:last-of-type {
        margin: 0;
      }

      &:hover {
        box-shadow: 0 11px 24px rgba(0, 0, 0, 0.12);
        background-color: #FFF;
        color: #000;
      }
    }
  }
</style>
