<template>
  <div class="contact">
    <img alt="Vue logo" src="../assets/logo.png">
    <ThisContact msg="This Contact"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ThisContact from '@/components/ThisContact.vue'

export default {
  name: 'contact',
  components: {
    ThisContact
  }
}
</script>