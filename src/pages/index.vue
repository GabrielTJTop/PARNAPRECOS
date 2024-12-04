<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Bem-vindo ao PARNAPREÇOS</h1>
        <p class="text-center">
          Comprare aqui o preços de produtos em lojas físicas de Parnaíba/PI.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <v-icon>mdi-star</v-icon>
            Produtos em Destaque
          </v-card-title>
          <v-card-text>
            <p>Confira os produtos mais pesquisados e suas melhores ofertas!</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue" text to="/destaques">Ver Produtos</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col>
        <v-card>
          <v-card-title>
            <v-icon>mdi-store</v-icon>
            Cadastre uma Loja
          </v-card-title>
          <v-card-text>
            <p>Ajude adicionando informações de produtos de uma loja.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue" text to="/stores">Cadastrar Loja</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2 class="text-center">Sugestões para você</h2>
        <v-carousel height="110px" hide-delimiters>
          <v-carousel-item v-for="item in sugestoes">
            <v-card class="text-center" height="110px">
              <br>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sugestoes: [
        { title: "Smartphones", description: "Confira os melhores preços em celulares." },
        { title: "Eletrodomésticos", description: "Ofertas incríveis para sua casa." },
        { title: "Moda", description: "Roupas e acessórios com desconto." },
      ],
    };
  },
};
</script>

