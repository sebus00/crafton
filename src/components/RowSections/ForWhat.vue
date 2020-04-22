<template>
  <RowSection :reversed="true">
    <div slot="text" class="row-section__text-side">
      <h2>Po co?</h2>
      <p>
        UW wie co zrobić, by programy proponowanych kierunków studiów były jak najbardziej
        atrakcyjne z biznesowego punktu widzenia. Do współpracy zapraszamy przedsiębiorców,
        trenerów, doświadczonych praktyków. Dbamy o to, żeby nasi studenci korzystali z
        doświadczenia i wiedzy osób, które odniosły w życiu zawodowy sukces. Dążymy do tego, by
        wybierający naszą uczelnię już w trakcie studiów mieli kontakt z jak największą liczbą
        pracodawców i praktyków biznesu ponieważ wiemy, że pomoże to im w zdobyciu wielu potrzebnych
        kwalifikacji oraz umiejętności, które zaprocentują w każdym miejscu pracy a także
        zainspiruje do poszerzania swoich kompetencji.
      </p>
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
import sectionImage from '../../assets/images/rowSectionImage2.jpg';

export default {
  name: 'for-what',
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
