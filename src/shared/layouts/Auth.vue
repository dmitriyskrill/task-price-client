<template>
  <v-main>
    <router-view/>
  </v-main>
</template>

<script lang="ts">


export default {
  components: {

  },
  emits: ['toggleTheme'],
  props: ['theme'],
  setup () {

  },
}


</script>
