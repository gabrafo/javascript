let list = document.getElementById("lista-de-tarefas");
const buttonSend = document.getElementById("adicionar-btn");
let input = document.getElementById("nova-tarefa");

buttonSend.addEventListener("click", () => {
  let inputValue = input.value;

  if (input.value === "") return;
  
  let newItem = document.createElement("li");
  newItem.textContent = inputValue;
  list.appendChild(newItem);
  input.value = "";
})