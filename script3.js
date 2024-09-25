let numero = Number(prompt("Quantas cartas deseja sortear?"))
let l
let valor=0

for(l=1; l<=numero; l++) {

    naipe = Math.floor(Math.random() * 4)

    valor = Math.floor(Math.random() * 9 ) +1

if(naipe == 0) {
    naipe = "copas"
}

else if(naipe == 1) {
    naipe = "paus"
}

else if(naipe == 2) {
    naipe = "espada"
}

else {
    naipe = "ouro"
}


console.log(`numero: ${valor} de ${naipe}`)

}
