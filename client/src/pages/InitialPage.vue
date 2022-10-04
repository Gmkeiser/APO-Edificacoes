<template>
  <q-page>
    <q-toolbar class="bg-primary" align="center">
      <q-toolbar-title class="text-white">
        Prefeitura de Jambu
      </q-toolbar-title>
    </q-toolbar>

    <div class="flex align-center justify-center">
      <div class="q-ma-lg" style="width: 100%; max-width: 512px">
        <q-card class="q-mb-md" @click="redirectTo('/school/register')">
          <q-card-section>
            <h1 class="text-h6">Cadastrar Nova Escola</h1>
            <p>Para primeira avaliação cadastrar a escola</p>
          </q-card-section>
        </q-card>
        <q-card class="q-mb-md"  @click="redirectTo('/school/list')">
          <q-card-section>
            <h1 class="text-h6">Avaliação de Escola</h1>
          </q-card-section>
        </q-card>
        <q-btn
          color="amber"
          class="text-black"
          label="Meu perfil"
          style="width: 100%; max-width: 512px"
          @click="redirectTo('/profile')"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InitialPage",
  methods: {
    redirectTo(page) {
      window.location.href = `#${page}`;
    },
  },
});
</script>
