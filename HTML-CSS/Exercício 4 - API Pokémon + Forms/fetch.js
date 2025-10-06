document.getElementById("pokeForm").addEventListener("submit", async event => {
  event.preventDefault(); // Evita recarregar a página

  const formData = new FormData(event.target);

  let inputValue = formData.get("pokeName");

  if (inputValue) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formData.get("pokeName")}`);
      if (!response.ok) throw new Error("Pokémon não encontrado!");
      data = await response.json();
      document.getElementById("result").innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
      `;
    } catch (err) {
      document.getElementById("result").textContent = "Erro! " + err.message;
    }
  }
});