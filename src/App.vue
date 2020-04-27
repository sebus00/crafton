<template>
  <div>
    <Navigation/>
    <Carousel />
    <ForWhom />
    <ForWhat />
    <WithWho />
    <Contact />
    <Footer />
  </div>
</template>
<script>
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import ForWhom from './components/RowSections/ForWhom';
import ForWhat from './components/RowSections/ForWhat';
import WithWho from './components/RowSections/WithWho';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Carousel, Navigation, ForWhom, ForWhat, WithWho, Contact, Footer
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
    max-width: 1190px;
    padding: 0 15px;
    margin: 0 auto;

    @media screen and (min-width: 1264px) {
      padding: 0;
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
