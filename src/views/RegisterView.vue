<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="6" lg="5">
        <v-card class="rounded-card">
          <v-card-title class="headline">!יאללה, צריכים אותך</v-card-title>
          <v-card-text>

            <v-row justify="center">

            <v-col cols="12" sm="6" md="6">
              <v-text-field  dir='rtl' reverse label="שם משתמש" variant="solo" v-model="username"></v-text-field>
            </v-col>
            
            <v-col cols="12" sm="6" md="6">
              <v-text-field dir='rtl' reverse label="טלפון" variant="solo" v-model="phoneNumber"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field dir='rtl' reverse label="שם פרטי" variant="solo" v-model="firstName"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field dir='rtl' reverse label="שם משפחה" variant="solo" v-model="lastName"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field dir='rtl' reverse type="password" label="סיסמה" variant="solo" v-model="password"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field dir='rtl' reverse type="password" label="אישור סיסמה" variant="solo" v-model="passwordCheck"></v-text-field>
            </v-col>

          </v-row>

          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn class="white--text"
              style="height: 50px;width: 100px;font-weight: bold; font-size: 17px ;background-color: #559ccb"
              @click="submitForm">הרשמה</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Register",
  setup() {
    const username = ref("");
    const phoneNumber = ref("");
    const firstName = ref("");
    const lastName = ref("");
    const password = ref("");
    const passwordCheck = ref("");

    const submitForm = () => {
      // Handle the login logic here
      console.log("Logging in:", username.value, phoneNumber.value, firstName.value, lastName.value, password.value, passwordCheck.value);
    };

    return {
      username,
      phoneNumber,
      firstName,
      lastName,
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

.v-text-field {
  margin-bottom: -12px !important; /* Adjust as per your requirement */
}
</style>