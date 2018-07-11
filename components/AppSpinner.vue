<template>
  <v-flex text-xs-center class="mt-5">
    <v-progress-circular
      indeterminate :size=loaderSize :width="7" 
      color="yellow darken-1">
    </v-progress-circular>
  </v-flex>
</template>

<script>
  export default {
    props: {
      loaderSize: {
        default: 50,
        type: Number
      }
    }
  }
</script>
