<template>
  <v-container class="fill-height d-flex justify-center align-center">
    <v-card class="pa-6" max-width="400">
      <v-card-title class="text-h5 text-center">Регистрация</v-card-title>

      <v-form ref="form" @submit.prevent="register">
        <v-text-field
            v-model="email"
            label="Email"
            :rules="[rules.required, rules.email]"
            prepend-inner-icon="mdi-email"
        ></v-text-field>

        <v-text-field
            v-model="password"
            label="Пароль"
            type="password"
            :rules="[rules.required, rules.minLength]"
            prepend-inner-icon="mdi-lock"
        ></v-text-field>

        <v-text-field
            v-model="confirmPassword"
            label="Повторите пароль"
            type="password"
            :rules="[rules.required, rules.matchPassword]"
            prepend-inner-icon="mdi-lock-check"
        ></v-text-field>

        <!-- reCAPTCHA -->
        <VueRecaptcha
            ref="recaptcha"
            :sitekey="RECAPTCHA_SITE_KEY"
            @verify="onVerify"
            @expired="onExpired"
            class="my-2"
        ></VueRecaptcha>

        <v-btn type="submit" color="primary" block :loading="loading" :disabled="!recaptchaToken">
          Зарегистрироваться
        </v-btn>
      </v-form>

      <v-alert v-if="error" type="error" class="mt-4">{{ error }}</v-alert>
      <v-alert v-if="success" type="success" class="mt-4">{{ success }}</v-alert>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import VueRecaptcha from 'vue3-recaptcha2'
import { RECAPTCHA_SITE_KEY } from '@/shared/constants'
import * as authApi from '@/modules/auth/api'

export default {
  computed: {
    RECAPTCHA_SITE_KEY () {
      return RECAPTCHA_SITE_KEY
    }
  },
  components: { VueRecaptcha },
  setup() {
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const recaptchaToken = ref('');
    const form = ref(null);
    const loading = ref(false);
    const error = ref('');
    const success = ref('');

    const rules = {
      required: (v) => !!v || 'Поле обязательно',
      email: (v) => /.+@.+\..+/.test(v) || 'Введите корректный email',
      minLength: (v) => (v && v.length >= 6) || 'Минимум 6 символов',
      matchPassword: (v) => v === password.value || 'Пароли не совпадают',
    };

    const onVerify = (token) => {
      recaptchaToken.value = token;
    };

    const onExpired = () => {
      recaptchaToken.value = '';
      console.warn('reCAPTCHA истекла, обновите');
    };

    const register = async () => {
      const valid = await form.value.validate();
      if (!valid || !recaptchaToken.value) return;

      loading.value = true;
      error.value = '';
      success.value = '';

      try {
        await authApi.register({
          email: email.value,
          password: password.value,
          recaptchaToken: recaptchaToken.value,
        })

        success.value = '✅ Регистрация успешна!';
        email.value = '';
        password.value = '';
        confirmPassword.value = '';
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    return { email, password, confirmPassword, form, loading, error, success, rules, recaptchaToken, onVerify, onExpired, register };
  },
};
</script>

<style scoped>
</style>
