const API = "http://localhost:3000/filmes";

const form = document.getElementById("formFilme");
const lista = document.getElementById("listaFilmes");

carregarFilmes();

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const filme = {
        titulo: document.getElementById("titulo").value,
        genero: document.getElementById("genero").value
    };

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filme)
    });

    form.reset();

    carregarFilmes();
});

async function carregarFilmes() {

    const resposta = await fetch(API);

    const filmes = await resposta.json();

    lista.innerHTML = "";

    filmes.forEach(filme => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${filme.titulo} - ${filme.genero}
            <button onclick="excluir(${filme.id})">
                Excluir
            </button>
        `;

        lista.appendChild(li);
    });
}

async function excluir(id) {

    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    carregarFilmes();
}