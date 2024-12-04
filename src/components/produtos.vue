<template>
    <v-container>
      <div v-for="product in products" :key="id" class="ma-4">
        <v-card width="600px" class="rounded-lg">
          <v-img
                :src="'{{ product.image_url }}'"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              ></v-img>
          <v-card-title>
          <div class="d-flex text-green-darken-3 font-weight-bold justify">
            {{ product.name }}
          </div>
          <div class="text-h5">
            R${{ product.price }}
          </div>
          </v-card-title>
          <v-card-subtitle class="ma-2 pt-2">{{ product.description }}</v-card-subtitle>
          <v-card-actions >
          </v-card-actions>
        </v-card>
      </div>
      
    </v-container>
  </template>
  
  <script setup>
  import { showAll } from "@/composables/products";
  import { onMounted, ref } from "vue";
  
  const products = ref();
  
  const init = async () => {
    products.value = await showAll();
  };
  
  onMounted(() => {
    init();
  });
  </script>