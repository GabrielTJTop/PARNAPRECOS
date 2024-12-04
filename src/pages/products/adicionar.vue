<template>
  <v-form>
    <v-container>
      <h1>Adicionar item</h1>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="nome"
            :counter="10"
            clearable
            label="Nome produto"
          ></v-text-field>

          <v-text-field
            v-model="descricao"
            :counter="10"
            clearable
            label="Descrição"
          ></v-text-field>

          <v-text-field
            v-model="valor"
            :counter="10"
            clearable
            label="Valor"
          ></v-text-field>
      
          <v-btn color="success"
            @click="addProductSupabase"
          >Adicionar</v-btn>
          
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>

import { create } from "@/composables/products";
import { ref } from "vue";

 const nome = ref()
   const  addProductSupabase = async () => {
     const payload = await create({
       name: nome.value,
       description: descricao.value,
       price: valor.value
     })
   }
</script>