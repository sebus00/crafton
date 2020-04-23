<template>
  <section class="contact">
    <div class="contact__wrapper container">
      <h1>Nie znalazłeś odpowiedniego kontaktu?</h1>
      <h2>Skorzystaj z formularza.</h2>
      <ContactForm />
    </div>
  </section>
</template>

<script>
import ContactForm from './Form/ContactForm';

export default {
  name: 'Contact',
  components: {
    ContactForm
  }
};
</script>

<style scoped lang="scss">
  .contact {
    background-color: #f5f8fa;
    display: flex;
    align-items: center;
    padding: 50px 0;

    @media screen and (min-width: 1264px) {
      height: 100vh;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 32px;
      color: #333;
    }

    h2 {
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      color: #7B94A5;
    }
  }
</style>
