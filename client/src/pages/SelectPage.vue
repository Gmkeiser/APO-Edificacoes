<template>
  <q-page>
    <q-toolbar class="bg-primary">
    <q-btn
      dense
      rounded
      flat
      color="white"
      icon="arrow_back"
      @click="redirectTo('/school')"
    />
    <q-toolbar-title>
      <h1 class="text-white text-h6">Escola João e Maria</h1>
    </q-toolbar-title>
  </q-toolbar>
    <div class="q-pa-lg flex align-center justify-center">
      <q-card style="width: 100%; max-width: 512px">
        <q-card-section>
          <h1 class="text-h6">Escola João e Maria</h1>
          <span>Rua das Flores, 3124</span>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <q-btn
            outline
            color="primary"
            class="q-mb-md"
            label="Ambientes"
            @click="redirectTo('/school/options/ambience')"
          />
          <q-btn
            outline
            color="primary"
            class="q-mb-md"
            label="Segurança"
            @click="redirectTo('/school/options/security')"
          />
          <q-btn
            outline
            color="primary"
            class="q-mb-md"
            label="Infraestrutura"
            @click="redirectTo('/school/options/infraestrutura')"
          />
          <q-btn
            outline
            color="primary"
            class="q-mb-md"
            label="Combate à incêndios"
            @click="redirectTo('/school/options/incendio')"
          />
          <q-btn
            outline
            color="primary"
            class="q-mb-md"
            label="Sustentabilidade"
            @click="redirectTo('/school/options/sustentability')"
          />
          <q-btn
            outline
            color="primary"
            class="q-mb-md"
            label="Habitabilidade"
          />
          <q-btn
            outline
            color="primary"
            class="q-mb-md"
            label="Relatório parcial"
            @click="redirectTo('/school/Rating')"
          />
          <q-btn
            outline
            color="primary"
            class="q-mb-md"
            label="Relatório completo"
          />
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <q-btn color="amber" class="text-black" label="Concluir avaliação" @click="redirectTo('/school')"/>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectPage",
  methods: {
    redirectTo(page) {
      window.location.href = `#${page}`;
    },
  },
});
</script>

<style>
.q-mb-md {
  height: 50px;
}
</style>
