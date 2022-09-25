<template>
  <q-page class="q-pa-lg flex flex-center justify-center">
    <q-card style="width: 100%; max-width: 512px; height: 600px;" class="q-pa-lg flex column justify-between">
      <h1 class="text-h5">Cadastro de Nova Escola</h1>
      <q-form>
        <q-input label="Nome da Escola" />
        <q-input label="CEP" mask="##.###-###" />
        <q-input label="Logradouro" />
        <q-input label="Bairro" />
        <q-input label="Telefone + DDD" mask="(##) #####-####" />
        <q-input label="Responsável" />
      </q-form>
      <q-btn color="amber" label="Adicionar" unelevated rounded />
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RegisterNewSchool',
})
</script>
