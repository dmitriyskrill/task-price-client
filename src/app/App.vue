<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { getCurrentUser } from '@/modules/auth/api'

const theme = ref('dark')

function toggleTheme () {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

onBeforeMount(async () => {
  await getCurrentUser()
})
</script>
<template>
  <v-app :theme="theme">
    <component
        @toggleTheme="toggleTheme"
        :theme="theme"
        :is="$route.meta.layout || 'div'"
    ></component>
  </v-app>
</template>

<style scoped>
</style>
