<template>
  <!-- eslint-disable max-len -->
  <section class="footer">
    <div class="footer__wrapper container">
      <div class="footer__address">
        <div class="footer__address__item">ul. Głogowska 10</div>
        <div class="footer__address__item">61-719 Poznań</div>
        <div class="footer__address__item">tel. 61 27 11 000</div>
        <div class="footer__map" id="google-maps-wrapper">
<!--          <iframe-->
<!--            src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAzvtXXZKy5qlZGpVgjIxneAwYvPQZiOXU&center=52.416805389617295,16.93222391655899&zoom=18&format=png&maptype=roadmap&style=feature:administrative%7Cvisibility:off&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:landscape%7Cvisibility:off%7Cweight:1&style=feature:poi%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Cvisibility:off&style=feature:transit.line%7Cvisibility:off&style=feature:transit.station%7Cvisibility:off&style=feature:water%7Cvisibility:off&size=480x360"-->
<!--            width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">-->
<!--          </iframe>-->

<!--          <iframe-->
<!--            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAzvtXXZKy5qlZGpVgjIxneAwYvPQZiOXU&center=52.416805389617295,16.93222391655899&zoom=18&format=png&maptype=roadmap&style=feature:administrative%7Cvisibility:off&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:landscape%7Cvisibility:off%7Cweight:1&style=feature:poi%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Cvisibility:off&style=feature:transit.line%7Cvisibility:off&style=feature:transit.station%7Cvisibility:off&style=feature:water%7Cvisibility:off&size=480x360"-->
<!--            width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">-->
<!--          </iframe>-->

<!--          <iframe width="600" height="450" frameborder="0" style="border:0"-->
<!--                  src="https://www.google.com/maps/embed/v1/place?q=poznan&key=AIzaSyAzvtXXZKy5qlZGpVgjIxneAwYvPQZiOXU" allowfullscreen></iframe>-->
        </div>
      </div>
      <div class="footer__links">
        <div
          v-for="(column, columnIndex) in linksColumns"
          :key="`column${columnIndex}`"
          class="footer__column"
          >
          <div
            v-for="(link, linkIndex) in column"
            :key="`link${columnIndex}${linkIndex}`"
            class="footer__link"
          >
            <a href="/" target="_blank">
              {{ link }}
            </a>
          </div>
        </div>
      </div>
      <div class="footer__label">Projekt i realizacja: Crafton</div>
    </div>
  </section>
</template>

<script>
import initMap from '../utilities/googleMaps';

export default {
  name: 'Footer',
  data() {
    return {
      linksColumns: [
        ['O nas', 'Dlaczego CDV', 'Kadra naukowa', 'Dla mediów', 'Kontakt'],
        ['Dla kandydata', 'Poradnik maturzysty', 'Rekrutacja', 'Kredyt studencki', 'Studia dla cudzoziemców'],
        ['Dla studenta', 'Wirtualna uczelnia', 'Stypendia', 'Biuro karier', 'Studiuj dalej'],
        ['Dla biznesu', 'Współpraca z biznesem', 'EmotionsLAB', 'Wynajem sal', 'Znajdź pracownika'],
        ['Na skróty', 'Aktualności', 'Wydarzenia', 'Konferencje', 'Blog']
      ]
    };
  },
  mounted() {
    initMap();
  }
};
</script>

<style scoped lang="scss">
  .footer {
    background-color: #001927;
    display: flex;
    align-items: center;
    padding: 83px 0 68px 0;

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      @media screen and (min-width: 960px) {
        flex-direction: row;
        align-items: flex-start;
      }
    }

    &__address {
      font-size: 15px;
      line-height: 23px;
      font-weight: 400;
      color: #FFF;
      margin-bottom: 95px;

      @media screen and (min-width: 960px) {
        margin-right: 95px;
        margin-bottom: 0;
      }
    }

    &__map {
      border-radius: 50%;
      overflow: hidden;
      margin-top: 45px;
      height: 200px;
      width: 200px;
    }

    &__links {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      @media screen and (min-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
      }

      @media screen and (min-width: 960px) {
      }
    }

    &__column {
      margin-bottom: 50px;
      width: 200px;

      @media screen and (min-width: 600px) {
        margin-right: 20px;
      }

      @media screen and (min-width: 1264px) {
        width: auto;
        margin-right: 40px;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }

    &__link {
      font-weight: 400;
      font-size: 15px;
      line-height: 12px;
      margin-bottom: 24px;
      white-space: nowrap;
      padding-bottom: 4px;

      a {
        color: #FFF;
      }

      &:hover {

        a {
          border-bottom: 1px solid #FFF;
        }
      }

      &:last-of-type {
        margin: 0;
      }
    }

    &__label {
      position: absolute;
      color: #FFF;
      bottom: -30px;
      right: 30px;
      font-weight: 400;
      font-size: 15px;
      line-height: 12px;

      @media screen and (min-width: 1264px) {
        right: 0;
        bottom: 0;
      }
    }
  }
</style>
