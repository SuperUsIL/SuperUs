<template>
  <div class="home">
    <v-img src="./assets/SuperUs-logo.png" class="mr-2 logo" max-height=auto max-width="250"></v-img>
    <v-card class="rounded-card" >
          <v-card-title>SuperUs</v-card-title>
          <v-card-subtitle>המיזם נועד לקשר בין אנשים אשר צריכים תרומה לאנשים היכולים לספק את התרומה ולשנע אותה</v-card-subtitle>
          <v-card-text>
אנו מקווים כי השימוש במערכת זו יוכל לעזור לציוד להגיע למקום בו הצורך הינו הגדול ביותר ובצורה המיטבית
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn class="white--text"
              style="height: 50px;width: 100px;font-weight: bold; font-size: 17px ;background-color: #559ccb"
               link to="/register">הרשמה</v-btn>
            <v-btn class="white--text"
              style="height: 50px;width: 100px;font-weight: bold; font-size: 17px ;background-color: #559ccb"
              link to="/login">התחברות</v-btn>
          </v-card-actions>
        </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',
  components: {
  },
});
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.rounded-card {
  background-color: #d9d9d9;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  overflow: auto;
}

</style>
