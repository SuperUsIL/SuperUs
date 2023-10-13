<template>
  <v-container class="fill-height" fluid dir="rtl">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="6" lg="5">
        <v-card class="rounded-card">
          <v-card-title class="headline">!יאללה, צריכים אותך</v-card-title>
          <v-card-text>

            <br>

            <v-row justify="center">

            <v-col cols="12" sm="8" md="8">
              <v-text-field dir='rtl' reverse label="שם משתמש" variant="solo" v-model="username"></v-text-field>
            </v-col>

            <v-col cols="12" sm="8" md="8">
              <v-text-field dir='rtl' reverse type="password" label="סיסמה" variant="solo" v-model="password"></v-text-field>
            </v-col>

          </v-row>

          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn class="white--text"
              style="height:50px; width:100px; font-weight:bold; font-size: 17px; background-color:#559ccb"
              @click="submitForm">כניסה</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Login",
  setup() {
    const username = ref("");
    const password = ref("");

    const submitForm = () => {
      // Handle the login logic here
      console.log("Logging in:", username.value, password.value);
    };

    return {
      username,
      password,
      submitForm,
    };
  },
});
</script>

<style scoped>
.rounded-card {
  background-color: #d9d9d9;
  border-radius: 15px;
}

</style>
