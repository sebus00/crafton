<template>
  <RowSection>
    <div slot="text" class="row-section__text">
      <h2>Z kim?</h2>
      <p>
        Ciekawość jest najpotężniejszą cechą ludzką, która popycha ludzi do ciągłego rozwoju. CDV
        to miejsce, w którym studenci z zainteresowaniem i z przyjemnością zdobywają wiedzę. Zarówno
        studenci, absolwenci, jak i pracownicy to osoby nie tylko ciekawe świata, ale także pełne
        pasji w odkrywaniu nowych rzeczy i w pozytywny sposób wpływające na swoje otoczenie.
      </p>
      <p>
        Nasze kierunki studiów są interesujące i innowacyjne, tworzone we współpracy z pracodawcami
        oraz na podstawie trendów w światowej gospodarce i kierunku zmian na dynamicznym rynku
        pracy. Nasi absolwenci znajdują pracę zgodną ze swoimi zainteresowaniami i wykształceniem.
      </p>
    </div>
    <div slot="image" class="row-section__image row-section__image--video">
      <img class="section-image" :src="sectionImage" alt="" />
      <img class="play-image" :src="playImage" alt="" />
    </div>
  </RowSection>
</template>

<script>
import RowSection from './RowSection';
import sectionImage from '../../assets/images/rowSectionImage3.jpg';
import playImage from '../../assets/images/play.png';

export default {
  name: 'with-who',
  data() {
    return {
      sectionImage,
      playImage
    };
  },
  components: {
    RowSection
  }
};
</script>

<style lang="scss">

</style>
