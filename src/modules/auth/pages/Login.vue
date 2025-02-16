<template>
  <v-container class="fill-height d-flex justify-center align-center">
    <v-card class="pa-6" max-width="800" min-width="600">
      <v-card-title class="text-h5 text-center">Вход</v-card-title>

      <v-form ref="form" @submit.prevent="login">
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
            :rules="[rules.required]"
            prepend-inner-icon="mdi-lock"
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
          Войти
        </v-btn>
      </v-form>

      <v-btn @click="getNewTokens">getNewTokens</v-btn>

      <v-alert v-if="error" type="error" class="mt-4">{{ error }}</v-alert>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import VueRecaptcha from 'vue3-recaptcha2'
import { RECAPTCHA_SITE_KEY } from '@/shared/constants'
import * as authApi from '../api'
import { useRouter, useRoute } from 'vue-router'

export default {
  computed: {
    RECAPTCHA_SITE_KEY () {
      return RECAPTCHA_SITE_KEY
    }
  },
  methods: {
    async getNewTokens(){
      await authApi.getNewTokens()
    },
  },
  components: { VueRecaptcha },
  setup () {
    const router = useRouter()

    const email = ref()
    const password = ref()
    const recaptchaToken = ref('')
    const form = ref(null)
    const loading = ref(false)
    const error = ref('')

    const rules = {
      required: (v) => !!v || 'Поле обязательно',
      email: (v) => /.+@.+\..+/.test(v) || 'Введите корректный email',
    }

    const onVerify = (token) => {
      recaptchaToken.value = token
    }

    const onExpired = () => {
      recaptchaToken.value = ''
      console.warn('reCAPTCHA истекла, обновите')
    }

    const login = async () => {
      const valid = await form.value.validate()
      if (!valid || !recaptchaToken.value) return

      loading.value = true
      error.value = ''

      try {
        await authApi.login({
          email: email.value,
          password: password.value,
          recaptchaToken: recaptchaToken.value,
        })
        await router.push('/')
      } catch (err){
        error.value = err.message
      } finally {
        loading.value = false
      }

    }

    return {
      email,
      password,
      form,
      loading,
      error,
      rules,
      recaptchaToken,
      onVerify,
      onExpired,
      login
    }
  },
}
</script>

<style scoped>
</style>
