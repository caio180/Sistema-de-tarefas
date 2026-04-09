const tela_ini = document.getElementById('inicial')
const tela_cadas = document.getElementById('cadastro');
const tela_log = document.getElementById('login');

function tela_inicial() {
    tela_ini.innerHTML = `
    
    <h1>Bem vindo ao sistema de tarefas</h1>
    <h2>Para continuar, faça seu cadastro ou entre com seu login.</h2>
    `

}

function tela_cadastro() {
    tela_cadas.innerHTML = `
    <form id='formCadastro'>

        <h2>Cadastro</h2>

        <input type="text" id="nome" placeholder="Nome completo" required> <br><br>
        <input type="email" id="email" placeholder="Email" required> <br><br>
        <input type="password" id="senha" placeholder="Senha" required minlength="6"> <br><br>
        <input type="password" id="confirmarSenha" placeholder="Confirmar senha" required> <br><br>
        <button type="submit" id="Criar">Cadastrar-se</button> 
    </form>
        
        `
    const form = document.getElementById("formCadastro");
    form.addEventListener("submit", function(evento){
        evento.preventDefault(); 
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if(nome === '' || email === '' || senha === '' || confirmarSenha === ''){
        alert('Preencha todos os campos');
        return;
    }
    if(senha !== confirmarSenha){
        alert('As senhas não coincidem');
        return;
    }
 });

}

function tela_login() {
    tela_log.innerHTML = `
        <form id="formLogin">
            <h2>Login</h2>
            <input type="email" id="email" placeholder="Email"><br><br>
            <input type="password" id="senha" placeholder="Senha"><br><br>
            <button type="submit" id="Entrar">Entrar</button>
        </form>
    `;
    const form = document.getElementById('formLogin');
    form.addEventListener("submit", function (evento2){
       evento2.preventDefault(); 
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    })  

}

function mostrarTela_inicial (){
    tela_ini.style.display = 'block';
    tela_inicial();    

} 

function mostrarCadastro() {
        tela_cadas.style.display = 'block';
        tela_log.style.display = 'none';
        tela_cadastro();
}

function mostrarLogin() {
        tela_cadas.style.display = 'none';
        tela_log.style.display = 'block';
        tela_login();
}



