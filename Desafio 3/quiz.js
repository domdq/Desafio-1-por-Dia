const quiz = [
  {
    pergunta: "qual é minha idade",
    opcoes: ["20", "23", "25"],
    respostaCerta: "23",
  },
  {
    pergunta: "qual é minha altura",
    opcoes: ["1,60cm", "1,65cm", "1,70cm"],
    respostaCerta: "1,65cm",
  },
  {
    pergunta: "quem minha esposa",
    opcoes: ["kelly", "geyssy", "geyssy kelly"],
    respostaCerta: "geyssy kelly",
  },
];

let i = 0;

function mostrarPergunta() {
  const q = quiz[i];
  document.getElementById("questao").textContent = q.pergunta;
  document.getElementById("opcao1").textContent = q.opcoes[0];
  document.getElementById("opcao2").textContent = q.opcoes[1];
  document.getElementById("opcao3").textContent = q.opcoes[2];
  document.getElementById("resultado").textContent = "";
}

function checarResposta(resposta) {
  const correta = quiz[i].respostaCerta;
  const resultado = document.getElementById("resultado");

  if (resposta === correta) {
    resultado.textContent = "🎉 PARABÉNS";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ Errou: " + correta;
    resultado.style.color = "red";
  }

  setTimeout(() => {
    i++;
    if (i < quiz.length) {
      mostrarPergunta();
    } else {
      document.querySelector(".quiz").innerHTML = "<h2>🎊 FIM DO QUIZ</h2>";
    }
  }, 2000);
}

document.getElementById("opcao1").onclick = () =>
  checarResposta(document.getElementById("opcao1").textContent);
document.getElementById("opcao2").onclick = () =>
  checarResposta(document.getElementById("opcao2").textContent);
document.getElementById("opcao3").onclick = () =>
  checarResposta(document.getElementById("opcao3").textContent);

mostrarPergunta();
