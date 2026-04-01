const tela_cadas = document.getElementById('cadastro');

function tela_cadastro() {
    tela_cadas.innerHTML = `
    <h1>Bem vindo ao sistema de tarefas</h1>

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
        alert('Os campos obrigatórios ão podem ficar fazios');
        return;
    }
    if(senha !== confirmarSenha){
        alert('As senhas não coincidem');
        return;
    }
 });

}

tela_cadastro()