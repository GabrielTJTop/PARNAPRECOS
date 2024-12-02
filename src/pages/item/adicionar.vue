<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :counter="10"
            label="First name"
          ></v-text-field>
        </v-col>

        <!-- <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :counter="10"
            :rules="nameRules"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col> -->
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { onMounted, ref } from "vue";
const firstname = ref()
console.log (firstname.value)
onMounted(() => {
})
</script>