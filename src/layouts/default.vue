<template>
  <v-app>
    <v-main>
      <v-app-bar>
          <v-app-bar-nav-icon scroll-behavior="collapse" scroll-threshold="190" ></v-app-bar-nav-icon>
        <v-app-bar-title style="font-family: Cochin; font-size: 22px;">
          PARNAPREÇOS
        </v-app-bar-title>
        
        <v-icon icon="mdi-magnify" color="info"></v-icon>
      </v-app-bar>

      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
  //
</script>
