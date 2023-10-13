<template>
    <v-footer
      class="footer text-center d-flex flex-column">
      <div>עומדים לצד ישראל</div>
      <v-divider></v-divider>
      <div>
        {{ new Date().getFullYear() }} — <strong>SuperUs</strong>
      </div>
    </v-footer>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer',
    props: {
    },
});
</script>
  
<style scoped>
.footer{
    background-color: #559ccb;
    max-height: auto;
    flex:none;
}
</style>
  