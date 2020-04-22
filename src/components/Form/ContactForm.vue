<template>
  <form class="contact-form">
    <div class="contact-form__row">
      <TextField name="firstName" label="Imię" pattern="^[A-Za-ząćęłńóśźż-]+$" />
      <TextField name="lastName" label="Nazwisko" pattern="^[A-Za-ząćęłńóśźż-]+$" />
    </div>
    <TextField name="email" label="Adres email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
    <TextField tag="textarea" name="message" label="Treść wiadomości" :height="162"/>
    <CheckBox
      name="agreement"
      label="Wyrażam zgodę na przetwarzanie moich danych osobowych w rozumieniu ustawy z dnia 29
      sierpnia 1997 roku o ochronie danych osobowych oraz ustawy z dnia 16 lipca 2004 roku Prawo
      telekomunikacyjne w celach marketingowych przez Collegium Da Vinci i oświadczam, iż podanie
      przeze mnie danych osobowych jest dobrowolne oraz iż zostałem poinformowany o prawie żądania
      dostępu do moich danych osobowych, ich zmiany oraz usunięcia."
    />
    <Button class="contact-form__submit" label="Wyślij" :onClick="send"/>
  </form>
</template>

<script>
import TextField from './TextField';
import CheckBox from './CheckBox';
import Button from './Button';

export default {
  name: 'ContactForm',
  components: {
    TextField, CheckBox, Button
  },
  methods: {
    send(e) {
      e.preventDefault();
      this.validate();
    },
    validate() {

    }
  }
};
</script>

<style scoped lang="scss">
  .contact-form {
    width: 100%;
    max-width: 582px;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__row {
      width: 100%;

      @media screen and (min-width: 600px) {
        justify-content: space-between;
        display: flex;

        >* + * {
          margin-left: 32px;
        }
      };
    }

    &__submit {
      margin: 40px auto 0 auto;
    }
  }
</style>
