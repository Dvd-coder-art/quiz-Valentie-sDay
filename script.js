const questions = [
  {
    question: "Onde nos conhecemos pessoalmente pela primeira vez?",
    options: ["Na escola", "Em uma festa", "7 de setembro", "No trabalho"],
    answer: 2
  },
  {
    question: "Qual foi o nosso primeiro passeio juntos?",
    options: ["Cinema", "Viagem para a praia", "Parque", "Restaurante"],
    answer: 3
  },
  {
    question: "Qual foi o momento mais engraçado que passamos juntos?",
    options: [
      "Primeiro encontro no restaurante",
      "Quando estávamos em Canoa Quebrada",
      "Tomando banho na serra",
      "Quando fomos ao cinema"
    ],
    answer: 1
  },
  {
    question: "Qual o ano que a gente se conheceu?",
    options: ["2023", "2024", "2022", "2021"],
    answer: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector(".pergunta p");
const questionNumberElement = document.querySelector(".pergunta h2");
const optionsContainer = document.querySelector(".resposta-container");
const nextButton = document.getElementById("next-button");
const quizContainer = document.querySelector(".quiz-container");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  questionNumberElement.textContent = `${currentQuestionIndex + 1}/${questions.length}`;

  optionsContainer.innerHTML = ""; // Limpa as opções anteriores
  nextButton.disabled = true; // Bloqueia o botão de próxima pergunta

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(button, index);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedButton, selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  // Remove a classe 'selected' de todos os botões antes de aplicar ao novo
  document.querySelectorAll(".resposta-container button").forEach(button => {
    button.classList.remove("selected");
  });

  // Adiciona a classe ao botão clicado
  selectedButton.classList.add("selected");

  // Criar mensagem de feedback
  let feedbackMessage = document.createElement("p");
  feedbackMessage.classList.add("feedback-message");

  if (selectedIndex === currentQuestion.answer) {
    score++;
    feedbackMessage.textContent = "✔️ Resposta correta!";
    feedbackMessage.style.color = "green";
  } else {
    feedbackMessage.textContent = "❌ Resposta incorreta!";
    feedbackMessage.style.color = "red";
  }

  optionsContainer.appendChild(feedbackMessage);
  nextButton.disabled = false; // Habilita o botão de próxima pergunta

  // Remove a mensagem após 1.5 segundos
  setTimeout(() => {
    feedbackMessage.remove();
  }, 1500);
}

nextButton.onclick = () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  const quizContainer = document.querySelector(".quiz-container");

  quizContainer.style.background = "#eb9eb9";

  quizContainer.innerHTML = `
    <div class="result-container">
      <h1>Gi, meu amor 💖</h1>
      <p>Olha só, 1 ano já! Quem diria, né? No começo, a gente se conheceu, seguiu a vida, e depois o destino fez questão de nos juntar de novo. E dessa vez foi diferente… foi intenso, foi especial, foi amor.</p>
      
      <p>Cada momento ao seu lado é único. Cada viagem, cada passeio, cada instante que compartilhamos me faz perceber o quanto sou sortudo por ter você. As risadas, as conversas sem fim, os carinhos, até as nossas bobeiras do dia a dia… tudo se torna melhor quando estou com você. Você chegou e virou tudo de cabeça pra baixo, mas do jeito mais bonito possível.</p>

      <p>Obrigado por sempre se preocupar comigo, por me apoiar, por ser essa namorada incrível que você é. Seu jeito carinhoso, seu sorriso, sua companhia… tudo em você me faz te amar cada dia mais.</p>

      <p>Sou grato por cada dia ao seu lado, por cada abraço apertado, por cada olhar que diz tudo sem precisar de palavras. Te amo demais e sei que esse é só o começo da nossa história.</p>

      <p>365 dias não são nada perto de tudo o que ainda temos para viver. Que venham muitos outros anos, muitas outras memórias e muito mais amor!</p>

      <h2>Feliz 1 ano de namoro, meu amor! ❤️</h2>
    </div>
  `;

  const music = document.getElementById("love-song");
  music.play();
}

loadQuestion();
