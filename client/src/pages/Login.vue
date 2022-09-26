<template>
  <q-page class="flex column flex-center justify-evenly">
    <img
      alt="Jambu"
      src="~assets/brasao.svg"
    >
    <h1 class="text-h4">Faça seu login</h1>
    <div>
      <q-input label="E-mail" style="width: 300px;"/>
      <q-input label="Senha" type="password" style="width: 300px;"/>
    </div>
    <a href="">Esqueci minha senha</a>
    <q-btn  
      rounded
      unelevated
      label="Login"
      color="amber"
      style="width: 200px;"
      @click="handleLogin()"
    />
    <div>
      <span>Ainda não tem uma conta? </span>
      <a href="">Cadastre-se</a>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  methods: {
    handleLogin() {
      window.location.href = '/';
    }
  }
})
</script>
