<template>
  <form ref="form" class="contact-form">
    <div class="contact-form__row">
      <TextField
        name="firstName" label="Imię" pattern="^[A-Za-ząćęłńóśźż-]+$" :value="firstName.value" :error="firstName.error"
        @input="onInputHandler('firstName', $event)"
      />
      <TextField
        name="lastName" label="Nazwisko" pattern="^[A-Za-ząćęłńóśźż-]+$" :value="lastName.value" :error="lastName.error"
        @input="onInputHandler('lastName', $event)"
      />
    </div>
    <TextField
      name="email" label="Adres email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" :value="email.value" :error="email.error"
      @input="onInputHandler('email', $event)"
    />
    <TextField
      tag="textarea" name="message" label="Treść wiadomości" :height="162" :value="message.value" :error="message.error"
      @input="onInputHandler('message', $event)"
    />
    <CheckBox
      name="agreement"
      label="Wyrażam zgodę na przetwarzanie moich danych osobowych w rozumieniu ustawy z dnia 29 sierpnia 1997 roku o ochronie danych osobowych oraz
      ustawy z dnia 16 lipca 2004 roku Prawo telekomunikacyjne w celach marketingowych przez Collegium Da Vinci i oświadczam, iż podanie przeze mnie
      danych osobowych jest dobrowolne oraz iż zostałem poinformowany o prawie żądania dostępu do moich danych osobowych, ich zmiany oraz usunięcia."
      :value="agreement.value" :error="agreement.error" @change="onInputHandler('agreement', $event)"
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
  data() {
    return {
      firstName: {
        value: '',
        pattern: '^[A-Za-ząćęłńóśźż-]+$',
        error: false
      },
      lastName: {
        value: '',
        pattern: '^[A-Za-ząćęłńóśźż-]+$',
        error: false
      },
      email: {
        value: '',
        pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
        error: false
      },
      message: {
        value: '',
        pattern: '',
        error: false
      },
      agreement: {
        value: false,
        pattern: '',
        error: false
      }
    };
  },
  methods: {
    onInputHandler(key, value) {
      this.$data[key].value = value;
      this.$data[key].error = false;
    },
    send(e) {
      e.preventDefault();
      this.validate();
    },
    validate() {
      let validateResult = true;
      [this.firstName, this.lastName, this.email, this.message, this.agreement].forEach((item) => {
        if (item.value === '') {
          item.error = true;
          validateResult = false;
        } else if (item.value === false) {
          item.error = true;
          validateResult = false;
        } else if (item.pattern !== '') {
          const regex = new RegExp(item.pattern);
          const result = item.value.match(regex);
          if (!result || result[0].length === 0) {
            item.error = true;
            validateResult = false;
          }
        }
      });
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
