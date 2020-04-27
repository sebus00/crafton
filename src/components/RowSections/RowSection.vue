<template>
  <div class="row-section">
    <div :class="['row-section__wrapper', {'row-section__wrapper--reversed' : reversed}, 'container']">
      <slot name="text"></slot>
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RowSection',
  props: {
    reversed: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables.scss";

  .row-section {
    display: flex;
    align-items: center;
    padding-top: 100px;

    @media screen and (min-width: 600px) {
      padding: 100px 0;
    }

    @media screen and (min-width: 1264px) {
      height: 100vh;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (min-width: 1264px) {
        padding: 0;
      }

      @media screen and (min-width: 960px) {
        flex-direction: row;
        align-items: flex-start;

        &--reversed {
          flex-direction: row-reverse;

          .row-section__text-side {
            margin: 0 0 0 100px;
          }
        }
      }
    }

    &__text-side {
      flex: 1;
      color: #333;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      margin: 0 0 100px 0;

      @media screen and (min-width: 960px) {
        margin: 0 100px 0 0;
      }
      
      h2 {
        margin-bottom: 16px;
      }

      p {
        margin: 32px 0;
      }

      a {
        color: $primary-color;
      }

      ul {
        list-style: none;
        margin: 64px 0 0;
        padding: 0;

        li {
          display: flex;
          align-items: center;
          width: fit-content;

          .arrow-icon {
            margin-right: 16px;
            display: inline-block;
            @include arrow-icon($primary-color, 0.6, 0);
          }
        }
      }
    }

    &__image-side {
      overflow: hidden;
      box-shadow: 0 11px 35px rgba(95, 95, 95, 0.22);
      position: relative;

      @media screen and (min-width: 600px) {
        width: 491px;
        height: 513px;
      }

      &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        >img {
          width: 100%;

          @media screen and (min-width: 600px) {
            position: relative;
            width: auto;
          }
        }
      }

      &__label {
        font-weight: 800;
        font-size: 16px;
        line-height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        text-transform: uppercase;
        background-image: linear-gradient(90deg, #006E85, $primary-color);
        position: absolute;
        left: 0;
        top: 0;
        width: 250px;
        transform: translate(-35%, 45%) rotate(-45deg);
      }

      &--video {
        background-color: #000;

        .row-section__image-side {
          &__wrapper {
            > img {
              opacity: .5;
            }
          }

          &__play {
            cursor: pointer;

            img {
              content: '';
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              z-index: 2;
            }

            &::before, &::after {
              content: '';
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              box-shadow: 0 5px 24px rgbaPrimaryColor(.41);
              background-color: $primary-color;
              z-index: 1;
              border-radius: 50%;
            }

            &::before {
              width: 13px;
              height: 135px;
              opacity: 0.2;
            }

            &::after {
              width: 96px;
              height: 96px;
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
</style>
