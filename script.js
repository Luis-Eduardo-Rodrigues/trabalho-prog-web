const abrirModalBtn = document.getElementById("abrirModal")
const fecharModalBtn = document.getElementById("fecharModal")
const cadastarCliente = document.getElementById("cadastrarCliente")
const tableClients = document.getElementById("tableClients")
const inputs = document.querySelectorAll(".input")
const editarClienteBtn = document.getElementById("editarCliente")
const fecharModalEditar = document.getElementById("fecharModalEditar")

const clientes = []


const abrirModal = () => {
    const modal = document.querySelector(".modal")
    modal.classList.add("visible")
}

const fecharModal = () => {
    const modal = document.querySelector(".modal")
    modal.classList.remove("visible")
}

const fecharModalEditarTela = () =>{
    const modalEditar = document.getElementById("modalEditar")
    modalEditar.classList.remove("visible")
}

const cadastrarCliente = () => {
    const cliente = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("tel").value,
        cidade: document.getElementById("cidade").value
    }

    clientes.push(cliente)
    inputs.forEach(i => i.value = "")
    mostrarClientes()
}

const mostrarClientes = () =>{
    tableClients.innerHTML = ""
    clientes.forEach((cliente, index) => {
        const newRow = document.createElement("tr")
        const newTD = document.createElement("td")
        const indexCliente = index

        newTD.innerHTML = `
        <td>
            <p><b>Nome: </b> ${cliente.nome}</p>
            <p><b>E-mail: </b> ${cliente.email}</p>
            <p><b>Telefone: </b> ${cliente.telefone}</p>
            <p><b>Cidade: </b> ${cliente.cidade}</p>
            <div class="btnsAction">
                <button class="button green btnEditar" onclick="editarCliente(${indexCliente})">editar</button>
                <button class="button red">excluir</button>
            </div>
        </td>
        `
        newRow.appendChild(newTD)
        tableClients.appendChild(newRow)
    })
}

const mostrarNovoCliente = (index) =>{
    let clienteQueVaiSerEditado = clientes[index]

        const novoCliente = {
            nome: document.getElementById("novoNome").value,
            email: document.getElementById("novoEmail").value,
            telefone: document.getElementById("novoTel").value,
            cidade: document.getElementById("novaCidade").value
        }

    clienteQueVaiSerEditado = novoCliente

    clientes.push(clienteQueVaiSerEditado)

    mostrarClientes()
}

const editarCliente = (index) => {
    const modalEditar = document.getElementById("modalEditar")
    modalEditar.classList.add("visible")

    console.log(index)
    mostrarNovoCliente(index)
}

abrirModalBtn.addEventListener("click", abrirModal)
fecharModalBtn.addEventListener("click", fecharModal)
cadastarCliente.addEventListener("click", cadastrarCliente)
fecharModalEditar.addEventListener("click", fecharModalEditarTela)