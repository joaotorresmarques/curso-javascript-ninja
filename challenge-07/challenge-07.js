/*
Crie um array com 5 items (tipos variados).
*/
arr = ['Joao',null,function(){},{cor: 'preto'},21]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(){
 arr.push(123,'Jobs',null); 
  return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
arr.push([1,2,3,4,5,6];
console.log(arr);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é: '+arr.[9]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primerio array tem '+arr.length + ' itens');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem '+ arr[9].length + ' itens');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
arr = [];
num = 10;

function Exercicio(){
    while(num <=20){
        if(num % 2 === 0){
            arr.push(num);
        }
        num++;

    }
}
Exercicio();
console.log('Numero pares entre 10 e 20: '+arr);

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
function Exercicio(){
    while(num <=20){
        if(num % 1 === 0){
            arr.push(num);
        }
        num++;

    }
}
Exercicio();
console.log('Numero pares entre 10 e 20: '+arr);
console.log(arr);

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
arr = [];
for (num=10; num < 20; num++) {
    if(num%2 ===0){
      arr.push(num);
    }
}
console.log( 'Números pares entre 100 e 120:'+arr );
// ?

arr = [];
for (num=10; num < 20; num++) {
    if(num%1 ===0){
      arr.push(num);
    }
}


console.log( 'Números ímpares entre 111 e 125:'+arr );
