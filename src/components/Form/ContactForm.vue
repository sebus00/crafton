<template>
  <form ref="contactForm" class="contact-form">
    <div class="contact-form__row">
      <TextField
        name="firstName" label="Imię" :value="firstName.value" :error="firstName.error" :error-message="firstName.errorMessage"
        @input="onInputHandler('firstName', $event)"
      />
      <TextField
        name="lastName" label="Nazwisko" :value="lastName.value" :error="lastName.error" :error-message="lastName.errorMessage"
        @input="onInputHandler('lastName', $event)"
      />
    </div>
    <TextField
      name="email" label="Adres email" type="email" :value="email.value" :error="email.error" :error-message="email.errorMessage"
      @input="onInputHandler('email', $event)"
    />
    <TextField
      tag="textarea" name="message" label="Treść wiadomości" :height="162" :value="message.value" :error="message.error"
      :error-message="message.errorMessage" @input="onInputHandler('message', $event)"
    />
    <CheckBox
      name="agreement"
      label="Wyrażam zgodę na przetwarzanie moich danych osobowych w rozumieniu ustawy z dnia 29 sierpnia 1997 roku o ochronie danych osobowych oraz
      ustawy z dnia 16 lipca 2004 roku Prawo telekomunikacyjne w celach marketingowych przez Collegium Da Vinci i oświadczam, iż podanie przeze mnie
      danych osobowych jest dobrowolne oraz iż zostałem poinformowany o prawie żądania dostępu do moich danych osobowych, ich zmiany oraz usunięcia."
      :value="agreement.value" :error="agreement.error" @change="onInputHandler('agreement', $event)" :error-message="agreement.errorMessage"
    />
    <Button class="contact-form__submit" label="Wyślij" :onClick="submit"/>
    <div
      :class="['contact-form__alert', {'contact-form__alert--visible' : responseMessage !== ''}]"
      :style="[{ background: responseResult ? 'green' : '#FF4148'}]"
    >
      {{ responseMessage }}
    </div>
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
      responseMessage: '',
      responseResult: '',
      firstName: {
        value: '',
        pattern: '^[A-Za-ząćęłńóśźż-]+$',
        error: false,
        errorMessage: ''
      },
      lastName: {
        value: '',
        pattern: '^[A-Za-ząćęłńóśźż-]+$',
        error: false,
        errorMessage: ''
      },
      email: {
        value: '',
        pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
        error: false,
        errorMessage: ''
      },
      message: {
        value: '',
        pattern: '',
        error: false,
        errorMessage: ''
      },
      agreement: {
        value: false,
        pattern: '',
        error: false,
        errorMessage: ''
      }
    };
  },
  methods: {
    onInputHandler(key, value) {
      this.$data[key].value = value;
      this.$data[key].error = false;
    },
    async submit(e) {
      e.preventDefault();
      if (this.validate()) {
        this.send();
      }
    },
    send() {
      const request = new XMLHttpRequest();
      request.open('GET', '/contact.php', true);
      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          this.handleResult(true);
        } else {
          this.handleResult(false);
        }
      };
      request.onerror = () => {
        this.handleResult(false);
      };
      request.send();
    },
    validate() {
      let validateResult = true;
      [this.firstName, this.lastName, this.email, this.message, this.agreement].forEach((item) => {
        if (item.value === '') {
          item.errorMessage = 'Uzupełnij pole';
          item.error = true;
          validateResult = false;
        } else if (item.value === false) {
          item.errorMessage = 'Zaznacz zgodę';
          item.error = true;
          validateResult = false;
        } else if (item.pattern !== '') {
          const regex = new RegExp(item.pattern);
          const result = item.value.match(regex);
          if (!result || result[0].length === 0) {
            item.errorMessage = 'Nieprawidłowa wartość';
            item.error = true;
            validateResult = false;
          }
        }
      });
      return validateResult;
    },
    handleResult(success) {
      this.responseMessage = success ? 'Wiadomość została wysłana. Dziękujemy za kontakt!'
        : 'Podczas wysyłania wiadomości wystąpił błąd. Prosimy spróbować ponownie.';
      this.responseResult = success;
      setTimeout(() => { this.responseMessage = ''; }, 3000);
      if (success) this.$refs.contactForm.reset();
    }
  }
};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables.scss";

  .contact-form {
    width: 100%;
    max-width: 582px;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

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

    &__alert {
      position: absolute;
      bottom: -300px;
      left: calc(50% - 150px);
      width: 300px;
      background: green;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #FFF;
      opacity: 0;
      transition: transform 1s cubic-bezier(0.31, 0.25, 0.5, 1.5), opacity 0.1s ease-in-out;

      &--visible {
        opacity: 1;
        transform: translateY(-270px);
      }
    }
  }
</style>
