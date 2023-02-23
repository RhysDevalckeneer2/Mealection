<<<<<<< Updated upstream
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
=======
<script lang="ts">
  // import layouts
  import AppHeader from './layouts/AppHeader.vue'
  import AppFooter from './layouts/AppFooter.vue'

  export default {
    name: "App",
    components: {
      AppHeader: AppHeader,
      AppFooter: AppFooter
    }
  }
>>>>>>> Stashed changes
</script>

<template>
  <AppHeader />
    <router-view />
  <AppFooter />
</template>

