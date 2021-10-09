<template>
  <div class="gallery">
    <img alt="Vue logo" src="../assets/logo.png">
    <ThisGallery msg="This Gallery"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ThisGallery from '@/components/ThisGallery.vue'

export default {
  name: 'gallery',
  components: {
    ThisGallery
  }
}
</script>