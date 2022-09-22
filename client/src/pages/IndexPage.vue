<template>
  <q-page class="flex column flex-center justify-evenly">
    <img
      alt="Jambu"
      src="~assets/brasao.svg"
    >
    <h1 class="text-h4">Faça seu login</h1>
    <div>
      <q-input label="E-mail" style="width: 300px;"/>
      <q-input label="Senha" style="width: 300px;"/>
    </div>
    <a href="">Esqueci minha senha</a>
    <q-btn unelevated rounded label="Login" color="amber" style="width: 150px;"/>
    <div>
      <span>Ainda não tem uma conta? </span>
      <a href="">Cadastre-se</a>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
