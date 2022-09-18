<template>
  <div id="container">
    <h1>Cadastro de Nova Escola</h1>

    <form action="">
      <label>Nome:</label>
      <input type="text" />
      <label>CEP:</label>
      <input id="cep" type="text" placeholder="00.000-000" />
      <label>Bairro:</label>
      <input id="bairro" type="text" />
      <label>Endereço:</label>
      <input id="endereco" type="text" />
      <label>Telefone + DDD:</label>
      <input id="telefone" type="text" placeholder="(00) 00000-0000" />
      <label>Responsável</label>
      <input type="text" />
      <input type="submit" value="Adicionar" />
    </form>
  </div>
</template>

<style>
* {
  margin: 0;
}

#container {
  background-color: #005da4;
  display: grid;
  place-items: center;
  height: 100vh;
}

h1 {
  color: white;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 512px;
}

label {
  color: white;
  padding: 1rem 0;
}

input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  padding: 1rem;
  color: white;
  font-size: 1rem;
}

input[type="submit"] {
  background-color: #9e2d00;
  border-radius: 2rem;
  margin-top: 10vh;
  border: none;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
