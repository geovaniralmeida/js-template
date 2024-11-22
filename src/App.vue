<template>
    <v-app>

        <VSonner position="bottom-center" expand></VSonner>

        <v-app-bar color="primary" prominent>
            <v-app-bar-nav-icon @click.stop="sidebarModel = !sidebarModel"></v-app-bar-nav-icon>

            <v-toolbar-title>APP NAME</v-toolbar-title>

        </v-app-bar>

        <v-navigation-drawer expand-on-hover rail width="400" v-model="sidebarModel"
            :location="$vuetify.display.mobile ? 'bottom' : undefined">

            <v-list :items="sidebarItems" nav></v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script lang="ts" setup>

    import { shallowRef } from 'vue';
    import { VSonner } from 'vuetify-sonner';
    import 'vuetify-sonner/style.css'

    const sidebarModel = shallowRef(true);

    const sidebarItems = shallowRef([
        {
            title: 'Home',
            props: {
                prependIcon: 'mdi-home',
                to: {
                    name: 'app.home'
                },

                class: ['mb-1']
            },
        },
    ]);

</script>
