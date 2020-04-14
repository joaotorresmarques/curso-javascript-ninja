/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrs = [1,'Joao',true,null,2];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function ars(arrs){
  return args;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
ars(arrs)[2]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function fufu(x,y){
  return x[y];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [1,'jm',null,undefined,true];
function as(arg){
  return arg;
}

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
as(array);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
     var obj = {
        harryPotter: {
            quantidadeDePaginas: 110,
            autor: 'jm',
            editora: 'passos'
        },
        steveJobs : {
            quantidadeDePaginas: 54,
            autor: 'joao',
            editora: 'rumo'
        },
        magiasDoMundo: {
            quantidadeDePaginas:5,
            autor: 'Paulo Magnus',
            editora: 'MV Sistemas'

        }
    }

    if(!nomeLivro){
        return obj;
    }
    return obj[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O Livro Harry Potter tem ' + book().harryPotter.quantidadeDePaginas + ' paginas')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Harry potter é ' + book().harryPotter.autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O Livro Harry Potter foi publicado pela editora ' + book().harryPotter.quantidadeDePaginas)
