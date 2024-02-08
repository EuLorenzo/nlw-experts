const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para desenvolvimento de aplicativos móveis",
        "Uma linguagem de programação para desenvolvimento web",
        "Um sistema operacional para servidores de internet",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 5;",
        "variável myVar = 5;",
        "myVar = 5;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes é um tipo de dado em JavaScript?",
      respostas: [
        "Lista",
        "Array",
        "Objeto",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'console.log()' faz em JavaScript?",
      respostas: [
        "Exibe uma mensagem de erro na página",
        "Exibe uma mensagem na caixa de diálogo do navegador",
        "Exibe uma mensagem no console do navegador",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição de valor",
        "Verifica se dois valores são iguais em valor e tipo",
        "Concatenação de strings",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um 'loop' em JavaScript?",
      respostas: [
        "Uma função que interrompe a execução do código",
        "Uma estrutura de controle que repete um bloco de código enquanto uma condição é verdadeira",
        "Um tipo de dado que armazena uma coleção de elementos",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de linha",
        "<!-- Este é um comentário de linha -->",
        "/* Este é um comentário de linha */",
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model - uma representação do documento HTML/XML e permite acesso e manipulação da estrutura do documento",
        "Data Object Model - um modelo de dados utilizado para armazenar informações de formulários",
        "Dynamic Object Manipulation - uma técnica para modificar objetos JavaScript em tempo de execução",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Adiciona um novo elemento ao DOM",
        "Adiciona um ouvinte de eventos a um elemento, que executa uma função especificada quando o evento ocorre",
        "Remove um ouvinte de eventos de um elemento",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de negação em JavaScript?",
      respostas: [
        "!!",
        "--",
        "!",
      ],
      correta: 2
    }
  ];
  
  //Onde irá as perguntas
  const quiz = document.querySelector("#quiz")
  //Pega o template
  const template = document.querySelector("template")
  //Variavel das respostas corretas
  const corretas = new Set()
  //Variáveis das respostas
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    //Pegou a estrutura
    const quizItem = template.content.cloneNode(true)
    //Mudou o título do h3
    quizItem.querySelector('h3').textContent = item.pergunta
      
    for(let resposta of item.respostas){
      //Copiou o nó do Dl e Dt
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
      //Pegou o span e colocou as respostas
      dt.querySelector("span").textContent = resposta
      //Mudamos o name para, pergunta-num pergunta
      //Com o uso do indexOf
      dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
      //Irá mudar o value de cada resposta
      dt.querySelector("input").value = item.respostas.indexOf(resposta)
      //Colocou as respostas na tela
      quizItem.querySelector("dl").appendChild(dt)
  
      //Tipo um eventListener
      //Verifica se esta correto
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta //True ou False
  
        //Somatório de itens, quando certo +1, quando errado -1
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        //Mostra atualizado as respostas certas
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
      }
    }
  
    //Removeu a primeira resposta
    quizItem.querySelector("dl dt").remove()
  
    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }