<template>
  <div>
    <Carousel :images='carouselImages' />
  </div>
</template>
<script>
import Carousel from './components/Carousel';
import sliderImage1 from './assets/images/sliderImage.jpg';

export default {
  name: 'App',
  data() {
    return {
      carouselImages: [sliderImage1, 'https://unsplash.it/800/600', 'https://unsplash.it/800/700']
    };
  },
  components: {
    Carousel
  }
};
</script>

<style lang='scss'>
  @import './assets/fonts/fonts.css';

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 18px;
    font-family: Muli, sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    padding: 0 10px;
  }

  .color {
    &--primary {
      color: #00B6DC;
    }

    &--white {
      color: #FFF;
    }
  }

  h1 {
    font-size: 40px;
    font-weight: 200;
    margin: 0;
    line-height: 60px;
  }

  h2 {
    font-size: 36px;
    font-weight: 800;
    margin: 0;
  }
</style>
