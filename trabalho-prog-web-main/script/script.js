const abrirModalBtn = document.getElementById("abrirModal");
const fecharModalBtn = document.getElementById("fecharModal");
const cadastarClienteBtn = document.getElementById("cadastrarCliente");
const tableClients = document.getElementById("tableClients");
const inputs = document.querySelectorAll(".input");
const fecharModalEditar = document.getElementById("fecharModalEditar");
const btnAtualizarCliente = document.getElementById("editarClienteBtn");

const clientes = [];

const abrirModal = () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("visible");
}

const fecharModal = () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("visible");
}

const fecharModalEditarTela = () => {
    const modalEditar = document.getElementById("modalEditar");
    modalEditar.classList.remove("visible");
}

const abrirModalEditar = (index) => {
    const modalEditar = document.getElementById("modalEditar");
    modalEditar.classList.add("visible");

    const cliente = clientes[index];

    document.getElementById('novoNome').value = cliente.nome;
    document.getElementById('novoEmail').value = cliente.email;
    document.getElementById('novaCidade').value = cliente.cidade;
    document.getElementById('novoTel').value = cliente.telefone;
    btnAtualizarCliente.dataset.index = index;
}

const cadastrarCliente = () => {
    const cliente = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("tel").value,
        cidade: document.getElementById("cidade").value
    }

    clientes.push(cliente);
    inputs.forEach(i => i.value = "");
    mostrarClientes();
}

const mostrarClientes = () => {
    tableClients.innerHTML = "";
    clientes.forEach((cliente, index) => {
        const newRow = document.createElement("tr");
        const newTD = document.createElement("td");
        const indexCliente = index;

        newTD.innerHTML = `
            <p><b>Nome: </b> ${cliente.nome}</p>
            <p><b>E-mail: </b> ${cliente.email}</p>
            <p><b>Telefone: </b> ${cliente.telefone}</p>
            <p><b>Cidade: </b> ${cliente.cidade}</p>
            <div class="btnsAction">
                <button class="button green btnEditar" onclick="editarCliente(${indexCliente})">editar</button>
                <button class="button red" onclick="deletarCliente(${indexCliente})">excluir</button>
            </div>
        `;
        newRow.appendChild(newTD);
        tableClients.appendChild(newRow);
    });
}

const editarCliente = (index) => {
    abrirModalEditar(index);
}

const atualizarCliente = () => {
    const index = btnAtualizarCliente.dataset.index;
    const cliente = {
        nome: document.getElementById("novoNome").value,
        email: document.getElementById("novoEmail").value,
        telefone: document.getElementById("novoTel").value,
        cidade: document.getElementById("novaCidade").value
    }

    clientes[index] = cliente;
    fecharModalEditarTela();
    mostrarClientes();
}

const deletarCliente = (index) => {
    clientes.splice(index, 1);
   mostrarClientes()
}

abrirModalBtn.addEventListener("click", abrirModal);
fecharModalBtn.addEventListener("click", fecharModal);
cadastarClienteBtn.addEventListener("click", cadastrarCliente);
fecharModalEditar.addEventListener("click", fecharModalEditarTela);
btnAtualizarCliente.addEventListener("click", atualizarCliente);
