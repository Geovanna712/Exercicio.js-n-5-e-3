let altura
let peso
let idade
let i=0
let menorIdade
let alturaPessoaMaisJovem
let pesoPessoaMaisVelha
let maiorIdade
let valores
let media=0
let divisao



while(true) {

    altura = Number (prompt("Digite sua altura:"))

    if(altura ==""){

        break;
    }

    peso = Number (prompt("Digite seu peso:"))

    idade = Number (prompt("Digite sua idade:"))


    if(i==1){
        menorIdade

        alturaPessoaMaisJovem=altura
    }

    else if(idade<menorIdade){
        menorIdade=idade

        alturaPessoaMaisJovem=altura
    }


    if(i==1){
        maiorIdade=idade

        pesoPessoaMaisVelha=peso
    }

    else if(idade>maiorIdade){
        maiorIdade=idade

        pesoPessoaMaisVelha=peso
    }

    media=media+idade

    i++
}
    divisao=media/i


console.log(alturaPessoaMaisJovem)
console.log(pesoPessoaMaisVelha)
console.log(divisao)