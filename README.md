  # 🩸Hemocentro - Verificador de aptidão para doação de Sangue.
  ### **Sobre o projeto:**
   O projeto Hemocentro tem o objetivo de incentivar a doção de sangue e auxiliar usuários a se informar se estão aptos ou não.
    O sistema apresenta informações sobre os bancos de estoques de sangue (por hora, informações fixas pela inexistencia de API no site do HEMOSC), um questionário interativo baseado nos requisitos gerais e uma seção de dúvidas frequentes.
    
  ⚠️ Este projeto possui caráter exclusivamente informativo e não substitui a triagem realizada por profissionais de saúde.    
  
  ## Funcionalidades
  * Hero section informativa;
  * Navegação por âncoras;
  * Exibição dos estoques de sangue;
  * Questionário interativo de aptidão;
  * Barra de progresso do questionário;
  * Resultado personalizado ao final;
  * Redirecionamento para agendamento de doação;
  * Seção de dúvidas frequentes;
  * Layout responsivo.
  
  ## Tecnologias Utilizadas: 
  * HTML5
  * CSS3
  * JavaScript (ES6)
  
  ## Estrutura do projeto
  │
  ├── favicon.svg 
  ├── index.html 
  ├── style.css 
  ├── script.js 
  ├── README.md
  
  ## Como executar
  Clone o repositório:
  git clone https://github.com/dani-cardoso/hemocentro.git
  Acesse a pasta do projeto:
  cd hemocentro
  Abra o arquivo index.html no navegador.
  Ou utilize a extensão Live Server do Visual Studio Code.
  
 ### Funcionamento do questionário

  As perguntas são armazenadas em um array de objetos no arquivo script.js.

  ### Cada pergunta possui:

  O texto da pergunta;
  Uma mensagem de ajuda;
  A resposta considerada ideal.

  Exemplo:

  {
    pergunta: "Você pesa mais de 50 kg?",
    ajuda: "",
    respostaIdeal: true
  }

  ### Ao responder ao questionário:

  O sistema compara a resposta do usuário com a resposta ideal;
  - Calcula a porcentagem de respostas favoráveis;
  - Exibe um resultado informativo ao final;
  - Disponibiliza o botão de agendamento para usuários potencialmente aptos.

  ## Documentação do código
  ### HTML

  A estrutura do projeto foi dividida em seções semânticas:

  * header: menu de navegação;
  * section#inicio: apresentação do sistema;
  * section#estoque: visualização dos estoques;
  * section#questionario-responder: questionário interativo;
  * section#duvidas: perguntas frequentes;
  * footer: informações complementares.
  
  ### CSS

  O CSS utiliza:

  * Flexbox;
  * Grid Layout;
  * Unidades responsivas (rem, vh, %, clamp());
  * Media queries;
  * Variáveis de cor (recomendado para futuras versões).
  * JavaScript

  Principais funções:

  * mostrarPergunta(): atualiza o conteúdo do questionário;
  * responder(): valida as respostas do usuário;
  * mostrarResultado(): exibe o resultado final.

