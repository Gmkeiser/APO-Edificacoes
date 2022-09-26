<template>
  <q-page>
    <q-toolbar class="bg-primary">
      <q-btn dense flat round icon="arrow_back" class="text-white" />
      <q-toolbar-title>
        <h1 class="text-white text-h6">Minha conta</h1>
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-ma-lg column">
      <q-avatar size="128px">
        <img src="https://thispersondoesnotexist.com/image">
      </q-avatar>
      <div class="q-pa-sm">
        <q-input class="q-pt-sm" label="Nome Completo" />
        <q-input class="q-pt-sm" label="Telefone" />
        <q-input class="q-pt-sm" label="E-mail" />
        <q-input class="q-pt-sm" label="Setor" />
      </div>
      <q-btn unelevated label="Concluir" color="amber" class="q-mt-xl text-black" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Profile',
});
</script>