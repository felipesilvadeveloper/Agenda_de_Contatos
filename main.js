const form = document.getElementById('form-contatos');
let linhas = '';
let contagemContatos = 0;  

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;  
    contagemContatos++; 

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

    let totalLinha = document.getElementById('linha-total');
    if (!totalLinha) {
        totalLinha = document.createElement('tr');
        totalLinha.id = 'linha-total';  
        corpotabela.appendChild(totalLinha);
    }

    totalLinha.innerHTML = `<td><strong>Total de Contatos:</strong></td><td>${contagemContatos}</td>`;

    inputNome.value = '';
    inputTelefone.value = '';
});
