<template>
  <v-app>
    <v-main>
      <v-app-bar scroll-behavior="collapse" scroll-threshold="121" flat>

        <v-app-bar-title style="font-family: Cochin; font-size: 22px;">
          <v-icon icon="mdi-magnify" style="font-size: 18px;"></v-icon>
          PARNAPREÇOS
        </v-app-bar-title>
      </v-app-bar>

      <v-navigation-drawer expand-on-hover rail>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          :to="'/'"
        ></v-list-item>
        <v-list density="compact">
          <v-list-group value="produtos">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Produtos" prepend-icon="mdi-store"></v-list-item>
            </template>
            <v-list-item
              v-for="(categoria, i) in categorias"
              :key="i"
              :title="categoria.title"
              :value="categoria.title"
              :to="categoria.to"
            >
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
 const categorias = [
   { title: 'Eletrônicos', icon: '', to: '/categorias/eletronicos' },
   { title: 'eletrodomesticos', icon: '', to: '/categorias/eletrodomesticos' }
 ]
</script>
