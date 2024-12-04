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
            clearable
            label="Nome produto"
          ></v-text-field>

          <v-text-field
            v-model="descricao"
            clearable
            label="Descrição"
          ></v-text-field>

          <v-text-field
            v-model="valor"
            clearable
            label="Valor"
          >R$</v-text-field>
          <v-text-field
            v-model="valormaior"
            clearable
            label="maior Valor"
          >R$</v-text-field>

          <v-text-field
            v-model="imgurl"
            label="Imagem URL"
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

 const nome = ref('')
 const descricao = ref('')
 const valor = ref(0)
 const imgurl = ref('')
 const valormaior = ref(0)
   const  addProductSupabase = async () => {
     const payload = await create({
       name: nome.value,
       description: descricao.value,
       price: valor.value,
       image_url: imgurl.value,
       pricehigher: valormaior.value
     })
   }
</script>