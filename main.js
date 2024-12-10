const form = document.querySelector('#form-cadastro'); // Formulário de cadastro
const btnEnviar = document.querySelector('#btn-enviar'); // Botão de envio
const tabelaDados = document.querySelector('#tabela-dados'); // Seção da tabela de dados
const dadosCliente = document.querySelector('#dados-cliente'); // Corpo da tabela (onde as linhas serão adicionadas)
const btnVoltar = document.querySelector('#btn-voltar'); // Botão de voltar

function enviarFormulario() {
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const telefone = document.querySelector('#telefone').value;
    const observacao = document.querySelector('#observacao').value;

    if (!nome || !email || !telefone) {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    // Cria uma nova linha para a tabela com os dados do cliente
    const novaLinha = `
        <tr>
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>${observacao}</td>
        </tr>
    `;
    
    // Adiciona a nova linha à tabela
    dadosCliente.innerHTML = novaLinha;

    // Oculta o formulário e exibe a tabela
    form.style.display = 'none';
    tabelaDados.style.display = 'block';

    // Limpa os campos do formulário para futuros cadastros
    limparFormulario();
}

// Função para voltar ao formulário e ocultar a tabela
function voltarFormulario() {
    tabelaDados.style.display = 'none'; // Oculta a tabela
    form.style.display = 'block'; // Exibe o formulário
}

// Função para limpar os campos do formulário
function limparFormulario() {
    document.querySelector('#nome').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#telefone').value = '';
    document.querySelector('#observacao').value = '';
}

// Eventos de clique
btnEnviar.addEventListener('click', enviarFormulario); // Envia o formulário
btnVoltar.addEventListener('click', voltarFormulario); // Volta para o formulário
