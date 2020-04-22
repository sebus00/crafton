<template>
  <section>
    <RowSection>
      <div slot="text" class="row-section__text-side">
        <h2>Z kim?</h2>
        <p>
          Ciekawość jest najpotężniejszą cechą ludzką, która popycha ludzi do ciągłego rozwoju. CDV
          to miejsce, w którym studenci z zainteresowaniem i z przyjemnością zdobywają wiedzę.
          Zarówno studenci, absolwenci, jak i pracownicy to osoby nie tylko ciekawe świata, ale
          także pełne pasji w odkrywaniu nowych rzeczy i w pozytywny sposób wpływające na swoje
          otoczenie.
        </p>
        <p>
          Nasze kierunki studiów są interesujące i innowacyjne, tworzone we współpracy z
          pracodawcami oraz na podstawie trendów w światowej gospodarce i kierunku zmian na
          dynamicznym rynku pracy. Nasi absolwenci znajdują pracę zgodną ze swoimi zainteresowaniami
          i wykształceniem.
        </p>
      </div>
      <div slot="image" class="row-section__image-side row-section__image-side--video">
        <div class="row-section__image-side__wrapper">
          <img :src="sectionImage" alt="" />
          <div class="row-section__image-side__play" @click="openVideoModal">
            <img :src="playImage" alt="" />
          </div>
        </div>
      </div>
    </RowSection>
    <Modal v-if="isModalOpen" :onClose="closeVideoModal">
      <iframe
        id="yt-video" slot width="560" height="315" src="https://www.youtube.com/embed/aKoOEq6HTHw"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture" allowfullscreen
      >
      </iframe>
    </Modal>
  </section>
</template>s

<script>
import RowSection from './RowSection';
import Modal from './Modal';
import sectionImage from '../../assets/images/rowSectionImage3.jpg';
import playImage from '../../assets/images/play.png';

export default {
  name: 'WithWho',
  data() {
    return {
      sectionImage,
      playImage,
      isModalOpen: false
    };
  },
  components: {
    RowSection, Modal
  },
  methods: {
    openVideoModal() {
      document.querySelector('html').style.overflow = 'hidden';
      this.isModalOpen = true;
    },
    closeVideoModal() {
      document.querySelector('html').style.overflow = 'auto';
      this.isModalOpen = false;
    }
  }
};
</script>

<style lang="scss">

</style>
