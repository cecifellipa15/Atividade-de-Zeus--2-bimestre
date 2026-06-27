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

    let resultado = ""
    let somaIdades = 0
    let maiores18 = 0

    resultado += "<strong>Lista de pessoas:</strong><br>"

    for (let i = 0; i < pessoas.length; i++) {

        let nome = pessoas[i].nome
        let idade = pessoas[i].idade

        resultado += nome + " - " + idade + " anos<br>"

        somaIdades += idade

        if (idade >= 18) {
            maiores18++
        }
    }

    let media = somaIdades / pessoas.length

    resultado += "<br><strong>Média das idades:</strong> " + media.toFixed(1) + " anos<br>"
    resultado += "<strong>Maiores de 18 anos:</strong> " + maiores18

    document.getElementById("resultado").innerHTML = resultado
}
