<template>
  <header>
    <h1>Faça seu login</h1>
  </header>
  <form method="post" action="/loginfunc.jar">
    <input id="email" type="email" placeholder="E-mail"><br><br>
    <input id="senha" type="password" placeholder="Senha"><br><br>
    <a href="esqueceu_senha" id="esqueceusenha">Esqueceu a senha?</a><br><br>
    <input type="submit" value="Login" id="botao_login">
    <br><br>
  </form>
  <footer id="rodape">
    <label id="cdt">Ainda não cadastrado? <a href="cadastrar_usuario.html">Cadastre-se aqui!</a></label>
  </footer>
</template>

<style>
#email, #senha{
    font-size: 2vh;
    height: fit-content;
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
}

form {
    position: absolute;
    left: 50% ;
    top : 50% ;
    transform: translate(-50%,-50%);
    text-align: center;


}

footer {
    position: absolute;
    left: 50% ;
    top :80%;
    transform: translate(-50%,-80%);
    text-align: center;

}

header {
    position: absolute;
    left: 50% ;
    top: 20%;
    transform: translate(-50%,-20%);
    text-align:center;
    font-size: 1.9vh;
}

#botao_login 
{
    padding-inline: 6vh;
    border-radius: 30px;
    border: none;
    background-color: yellow;
}
</style>
