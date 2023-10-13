<template>
    <div>
        <v-app>
            <v-app-bar app>
                <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none"></v-app-bar-nav-icon>
                <v-toolbar-title>SuperUs</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                <!-- <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link> -->
                <template v-slot:extension>
                    <v-tabs v-if="$vuetify.breakpoint.smAndUp" v-model="tab" align-with-title>
                        <v-tabs-slider color="yellow"></v-tabs-slider>
                        <v-tab v-for="(item, index) in items" :key="index">
                            {{ item }}
                        </v-tab>
                    </v-tabs>
                </template>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-list nav dense>
                    <v-list-item-group>
                        <v-list-item v-for="(item, index) in items" :key="index">
                            <v-list-item-title @click="tab = index">{{ item }}</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
            <v-content class="ma-5">
                <v-tabs-items v-model="tab" class="d-flex flex-column align-center">
                    <v-tab-item v-for="(item, index) in items" :key="index">
                        You are on {{ item }}
                    </v-tab-item>
                </v-tabs-items>
            </v-content>
        </v-app>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Header',
    data() {
        return {
            drawer: false,
            tab: 0, // Set a default tab index
            items: ['web', 'shopping', 'videos', 'images', 'news'],
        };
    },
});
</script>

<style scoped></style>
