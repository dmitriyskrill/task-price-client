<template>
  <v-app-bar app density="compact">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn icon @click="$emit('toggleTheme')">
      <v-icon>{{ theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
  </v-app-bar>
  <NavBar
      :drawer="drawer"
      :theme="theme"
  />
  <v-main>
    <router-view/>
  </v-main>
</template>

<script lang="ts">
import { ref } from 'vue'
import NavBar from '@/shared/components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  emits: ['toggleTheme'],
  props: ['theme'],
  setup () {
    const drawer = ref(true)

    return { drawer }
  }
}


</script>
