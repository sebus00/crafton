<template>
  <div>
    <Navigation :logo='logo' :menuItems='menuItems' />
    <Carousel :images='carouselImages' />
    <ForWhom />
    <ForWhat />
    <WithWho />
    <Contact />
  </div>
</template>
<script>
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import ForWhom from './components/RowSections/ForWhom';
import ForWhat from './components/RowSections/ForWhat';
import WithWho from './components/RowSections/WithWho';
import Contact from './components/Contact';
import sliderImage1 from './assets/images/sliderImage.jpg';
import logo from './assets/images/logo.png';

export default {
  name: 'App',
  data() {
    return {
      carouselImages: [
        sliderImage1,
        'https://unsplash.it/1500/800',
        'https://unsplash.it/1400/800'
      ],
      logo,
      menuItems: ['I stopnia', 'II stopnia', 'Podyplomowe', 'Szkolenia', 'Usługi']
    };
  },
  components: {
    Carousel, Navigation, ForWhom, ForWhat, WithWho, Contact
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
    max-width: 1220px;
    padding: 0 15px;
    margin: 0 auto;
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

    @media screen and (min-width: 600px) {
      line-height: 60px;
    }
  }

  h2 {
    font-size: 36px;
    font-weight: 800;
    margin: 0;

    @media screen and (min-width: 600px) {
      line-height: 60px;
    }
  }

  a {
    text-decoration: none;
  }
</style>
