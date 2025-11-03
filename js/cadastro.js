document.getElementById('formCadastro').addEventListener('submit', function(e){
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const nascimento = document.getElementById('nascimento').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value.trim();
    const cep = document.getElementById('cep').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value;

    let mensagem = "";
    if(!nome) mensagem += "Nome é obrigatório.\n";
    if(!email) mensagem += "Email é obrigatório.\n";
    if(!telefone) mensagem += "Telefone é obrigatório.\n";
    if(!nascimento) mensagem += "Data de nascimento é obrigatória.\n";
    if(!idade || idade<18 || idade>120) mensagem += "Idade deve ser entre 18 e 120.\n";
    if(!cpf) mensagem += "CPF é obrigatório.\n";
    if(!cep) mensagem += "CEP é obrigatório.\n";
    if(!endereco) mensagem += "Endereço é obrigatório.\n";
    if(!cidade) mensagem += "Cidade é obrigatória.\n";
    if(!estado) mensagem += "Estado é obrigatório.\n";

    const msg = document.getElementById('mensagemErro');
    if(mensagem){
        msg.textContent = mensagem;
    } else {
        msg.textContent = "";
        alert("Cadastro enviado com sucesso!");
        this.reset();
    }
});