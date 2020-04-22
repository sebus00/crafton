<template>
  <RowSection>
    <div slot="text" class="row-section__text-side">
      <h2>Dla kogo?</h2>
      <p>
        Dedykowane nauczycielom posiadającym przygotowanie pedagogiczne, którzy chcą uzyskać
        merytoryczne i metodyczne przygotowanie do nauczania kolejnego przedmiotu - Geografii.
      </p>
      <p>
        Studia adresowane są do osób legitymujących się wyższym wykształceniem na poziomie studiów
        licencjackim o specjalnościach nadających kwalifikacje nauczycielskie i przygotowanie
        pedagogiczne, lub słuchaczy legitymujących się wyższym wykształceniem na poziomie studiów
        magisterskich nadających kwalifikacje nauczycielskie i przygotowanie pedagogiczne, zgodnie
        z Rozporządzeniem Ministra Edukacji Narodowej z dnia 1 sierpnia 2017 r. w sprawie
        szczegółowych kwalifikacji wymaganych od nauczycieli
        <a class="color--primary" href="/" target="_blank">(Dz.U. 2017 poz. 1575).</a>
      </p>
      <ul>
        Wymagane od kandydata:
        <li>Ukończone studia wyższe</li>
        <li>Przygotowanie pedagogiczne</li>
      </ul>
    </div>
    <div slot="image" class="row-section__image-side">
      <div class="row-section__image-side__wrapper">
        <img :src="sectionImage" alt="" />
      </div>
    </div>
  </RowSection>
</template>

<script>
import RowSection from './RowSection';
import sectionImage from '../../assets/images/rowSectionImage1.jpg';

export default {
  name: 'ForWhom',
  data() {
    return {
      sectionImage
    };
  },
  components: {
    RowSection
  }
};
</script>

<style lang="scss">

</style>
