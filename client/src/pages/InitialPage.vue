<template>
  <q-page>
    <q-toolbar class="bg-primary">
      <q-toolbar-title class="text-white">
        Prefeitura de Jambu
      </q-toolbar-title>
    </q-toolbar>

    <div class="flex align-center justify-center">
      <div class="q-ma-lg column">
        <q-btn unelevated icon="school" color="primary" class="q-mb-sm" label="Cadastrar nova escola" />
        <q-btn unelevated icon="check" color="primary" class="q-mb-sm" label="Avaliar escoola" />
        <q-btn rounded unelevated color="amber" class="q-mb-sm text-black" label="Meu Perfil" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InitialPage'
})
</script>
  
