<template>
    <v-app-bar app color="#559ccb">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>My App</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app temporary v-model="drawer">
        <v-list>

            <v-list-item link to="/">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>עמוד הבית</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <template v-if="true">

                <v-list-item link to="/login">
                    <v-list-item-icon>
                        <v-icon>mdi-login</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>התחברות</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
                <v-list-item link to="/signup">
                    <v-list-item-icon>
                        <v-icon>mdi-account-multiple-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>הרשמה</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


                <v-list-item link to="/about">
                    <v-list-item-icon>
                        <v-icon>mdi-information</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>אודות</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    data() {
        return {
            drawer: false,
        };
    },
});
</script>
  
<style scoped></style>
  