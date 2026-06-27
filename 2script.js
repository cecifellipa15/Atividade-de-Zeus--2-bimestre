let pessoas = []

function adicionar() {

    let nome = document.getElementById("nome").value
    let idade = Number(document.getElementById("idade").value)

    if (nome === "" || idade <= 0) {
        alert("Por favor preencha todos os campos corretamente")
        return
    }

    pessoas.push({ nome: nome, idade: idade })

    let item = document.createElement("li")
    item.innerHTML = nome + " - " + idade + " anos"

    document.getElementById("lista").appendChild(item)

    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
}

function analisar() {

    if (pessoas.length === 0) {
        alert("Não há pessoas cadastradas para análise.")
        return
    }

    pessoas.sort(function(a, b) {
        return a.nome.localeCompare(b.nome)
    })

    let resultado = "<strong>Nomes em ordem alfabética:</strong><br>"

    for (let i = 0; i < pessoas.length; i++) {
        resultado += pessoas[i].nome + " - " + pessoas[i].idade + " anos<br>"
    }

    document.getElementById("resultado").innerHTML = resultado
}
