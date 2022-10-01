<template>
  <q-page>
    <q-toolbar class="bg-primary">
      <q-btn dense rounded flat icon="arrow_back" color="white" @click="redirectTo('/home')" />
      <q-toolbar-title>
        <h1 class="text-white text-h6">Cadastro de Nova Escola</h1>
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-pa-lg flex flex-center justify-center">
      <q-card
        style="width: 100%; max-width: 512px"
        class="q-pa-lg flex column justify-between"
      >
        <q-form>
          <q-input v-model="name" label="Nome da Escola" />
          <q-input
            v-model="cep"
            label="CEP"
            mask="##.###-###"
            @keyup="handleCep()"
          />
          <q-input v-model="logradouro" label="Logradouro" />
          <q-input v-model="bairro" label="Bairro" />
          <q-input
            v-model="telephone"
            label="Telefone + DDD"
            mask="(##) #####-####"
          />
          <q-input v-model="owner" label="Responsável" />
        </q-form>
        <q-btn
          rounded
          unelevated
          color="amber"
          label="Adicionar"
          class="text-black q-mt-xl"
          @click="redirectTo('/school/list')"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegisterNewSchool",
  data() {
    return {
      name: "",
      cep: "",
      logradouro: "",
      bairro: "",
      telephone: "",
      owner: "",
    };
  },
  methods: {
    redirectTo(page) {
      window.location.href = `#${page}`;
    },
    async handleCep() {
      if (this.cep.length === 10) {
        const sanitizedCep = this.cep.replace(".", "").replace("-", "");
        const getCepUrl = `https://viacep.com.br/ws/${sanitizedCep}/json/`;
        const { data } = await axios.get(getCepUrl);

        this.logradouro = data.logradouro;
        this.bairro = data.bairro;
      }
    },
  },
});
</script>
