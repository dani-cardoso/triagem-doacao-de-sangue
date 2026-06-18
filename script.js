// Array com todas as perguntas do questionário.
// Cada objeto possui:
// - pergunta: texto exibido ao usuário
// - ajuda: informação complementar
// - respostaIdeal: resposta esperada para considerar o usuário apto
const perguntas = [
  {
    pergunta: "Você tem entre 16 e 69 anos?",
    ajuda: "Menores de 18 anos precisam de autorização de um responsável",
    respostaIdeal: true
  },
  {
    pergunta: "Você pesa mais de 50kg?",
    ajuda: "",
    respostaIdeal: true
  },
  {
    pergunta: "Dormiu pelo menos 6 horas na última noite?",
    ajuda: "",
    respostaIdeal: true
  },
  {
    pergunta: "Está com sintomas de gripe, febre ou infecção?",
    ajuda: "",
    respostaIdeal: false
  },
  {
    pergunta: "Fez tatuagem ou piercing nos últimos 12 meses?",
    ajuda: "",
    respostaIdeal: false
  },
  {
    pergunta: "Está com alguma alergia ou ferimento aberto?",
    ajuda: "",
    respostaIdeal: false
  },
  {
    pergunta: "É usuário de drogas ilícitas?",
    ajuda: "",
    respostaIdeal: false
  }
];

// Seleciona os elementos do HTML que serão manipulados pelo JavaScript
const etapa = document.getElementById("etapa");
const pergunta = document.getElementById("pergunta");
const ajuda = document.getElementById("ajuda");
const progresso = document.getElementById("progresso");
const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");

// Variáveis de controle do questionário
// perguntaAtual: índice da pergunta exibida
// respostasCorretas: quantidade de respostas adequadas
let perguntaAtual = 0;
let respostasCorretas = 0;

// Função responsável por exibir a pergunta atual na tela
function mostrarPergunta() {

  // Obtém os dados da pergunta atual
  const item = perguntas[perguntaAtual];

  // Atualiza o contador de perguntas
  etapa.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

  // Exibe a pergunta e a mensagem de ajuda
  pergunta.textContent = item.pergunta;
  ajuda.textContent = item.ajuda;

  // Calcula a porcentagem de progresso do questionário
  const porcentagem = ((perguntaAtual + 1) / perguntas.length) * 100;

  // Atualiza a largura da barra de progresso
  progresso.style.width = `${porcentagem}%`;
}

// Função executada quando o usuário responde uma pergunta
function responder(respostaUsuario) {

  // Obtém a pergunta atual
  const item = perguntas[perguntaAtual];

  // Verifica se a resposta do usuário corresponde à resposta ideal
  if (respostaUsuario === item.respostaIdeal) {
    respostasCorretas++;
  }

  // Avança para a próxima pergunta
  perguntaAtual++;

  // Verifica se ainda existem perguntas
  if (perguntaAtual < perguntas.length) {

    // Exibe a próxima pergunta
    mostrarPergunta();

  } else {

    // Exibe o resultado final
    mostrarResultado();
  }
}

// Função responsável por exibir o resultado do questionário
function mostrarResultado() {

  // Seleciona o card do questionário
  const card = document.querySelector(".questionario-card");

  // Calcula a porcentagem de acertos
  const porcentagem = (respostasCorretas / perguntas.length) * 100;

  // Verifica se o usuário atingiu o mínimo necessário
  if (porcentagem >= 80) {

    // Exibe resultado positivo
    card.innerHTML = `
      <div class="resultado positivo">
        <h2>🟢 Você pode estar apto a doar sangue!</h2>

        <p>
          Este resultado é apenas informativo.
          A confirmação acontece na triagem do hemocentro.
        </p>

        <a href="https://www.hemosc.org.br/agende-sua-doacao.html"
           target="_blank"
           rel="noopener noreferrer"
           class="btn-agendar">
          Quero agendar minha doação
        </a>
      </div>
    `;

  } else {

    // Exibe resultado negativo
    card.innerHTML = `
      <h2>🔴 No momento, você pode não estar apto.</h2>

      <p>
        Algumas condições são temporárias.
        Consulte um hemocentro para mais informações.
      </p>
    `;
  }
}

// Adiciona um evento de clique ao botão "Sim"
btnSim.addEventListener("click", () => {
  responder(true);
});

// Adiciona um evento de clique ao botão "Não"
btnNao.addEventListener("click", () => {
  responder(false);
});

// Inicia o questionário exibindo a primeira pergunta
mostrarPergunta();