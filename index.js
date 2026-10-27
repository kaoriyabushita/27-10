let peso = 75
let altura = 1.83
let imc = calcularIMC(peso,altura)
let classificacao = classificarIMC(imc)

function calcularIMC(peso, altura) {
    return peso / altura ** 2
}

function classificarIMC(imc) {
    if (imc <= 18.5) {
        return "Abaixo do peso"
    } else if (imc <= 24.9) {
        return "Peso normal"
    }else if (imc <= 29.9){
        return "Sobrepeso"
    }else if (imc <= 34.9){
        return "Obesidade tipo 1"
    }else if (imc <= 39.9){
        return "Obsidade tipo 2"
    }else{
        return "Obesidade tipo 3"
    }
}

//===============================

//adição
let n1 = 1
let n2 = 2

let resultadosomar = somar(n1, n2)

/*function somar(n1, n2){
    return n1 + n2
}*/

const somar = (n1, n2) => n1 + n2
console.log(resultadosomar)


//subtração
let n3 = 1
let n4 = 2

let resultadodiminuir = diminuir(n3, n4) 

/*function diminuir(n1, n2) {
    return n1 - n2
}*/

const diminuir = (n3, n4) => n3 - n4
console.log(resultadodiminuir)


//multiplicação
let n5 = 1
let n6 = 2

let resultadomultiplicacao = multiplicar(n5, n6)

/*function multiplicar(n1, n2) {
    return n1 * n2
}*/

const multipicar = (n5, n6) => n5 * n6
console.log(resultadomultiplicacao)


//divisão
let n7 = 1
let n8 = 2

let resultadodivisao = dividir(n7, n8)
/*function dividir(n1, n2) {
    return n1 / n2
}*/

const dividir = (n7, n8) => n7 / n8
console.log(resultadodivisao)


//potenciacao
let n9 = 1
let n10 = 2

let resultadopow = pow(n9, n10)

/*function pow(n1, n2){
    if(n2 == 0){
        return 1
    }else {
       return n1 ** n2 
    }
}*/

const pow = (n9, n10) => n9 ** n10
console.log (resultadopow)


