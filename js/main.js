ocultarGifDeCarga();

function buscarPokemon() {
  const inputText = document.getElementById('searchInput').value.toLowerCase();
  cardsSection.innerHTML = ''; // Limpiar la sección antes de agregar las nuevas tarjetas

         // Mostrar GIF de carga
         mostrarGifDeCarga();
  // Simular carga de datos con setTimeout
  setTimeout(() => {

    ocultarGifDeCarga();

    // Fetch para obtener los datos desde db.json
    fetch('./db/db.json')
      .then(response => response.json())
      .then(data => {
        const filteredPokemon = data.filter(pokemon => pokemon.nombre.toLowerCase().includes(inputText));

        const cardsSection = document.getElementById('cardsSection');
        cardsSection.innerHTML = ''; // Limpiar la sección antes de agregar las nuevas tarjetas

        filteredPokemon.forEach(pokemon => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.classList.add(pokemon.tipo.toLowerCase()); // Agregar la clase de tipo de Pokémon

          card.innerHTML = `
              <h2>${pokemon.nombre}</h2>
              <div><img src="${pokemon.imagen}" alt="${pokemon.nombre}"></div>
              <h4>Tipo: ${pokemon.tipo}</h4>
              <h5>Ataque: ${pokemon.ataque}</h5>
              <h6>HP: ${pokemon.hp}</h6>
          `;

          cardsSection.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, 1500); // Esperar 1.5 segundos antes de cargar los datos

}

function mostrarGifDeCarga() {
  // Muestra el GIF de carga
  const gifElement = document.getElementById('gifDeCarga');
  gifElement.style.display = 'block'; // Cambia el estilo para hacer visible el GIF de carga
}

function ocultarGifDeCarga() {
  // Oculta el GIF de carga después de cargar las tarjetas
  const gifElement = document.getElementById('gifDeCarga');
  gifElement.style.display = 'none'; // Oculta el GIF de carga
}


console.log(pokemonArray);
