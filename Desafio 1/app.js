const InpuntTarefa = document.getElementById("inputTarefa");
const ListaDeTarefa = document.getElementById("listaDeTarefa");

function addTarefa() {
  const TextTarefa = InpuntTarefa.value.trim();

  if (TextTarefa === "") {
    alert("Digite uma Tarefa");
    return;
  }

  const li = document.createElement("li");
  li.textContent = TextTarefa;

  li.addEventListener("click", function () {
    ListaDeTarefa.replaceChild(li);
  });

  ListaDeTarefa.appendChild(li);

  InpuntTarefa.value = "";
}
