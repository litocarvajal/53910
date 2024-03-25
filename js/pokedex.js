/* const pokemonArray = [
    {
      nombre: "Abra",
      tipo: "Psíquico",
      ataque: 20,
      hp: 25,
      imagen: "",
    },
    {
      nombre: "Bulbasaur",
      tipo: "Planta-Veneno",
      ataque: 49,
      hp: 45,
      imagen: "",
    },
    {
      nombre: "Charmander",
      tipo: "Fuego",
      ataque: 52,
      hp: 39,
      imagen: "",
    },
    {
      nombre: "Diglett",
      tipo: "Tierra",
      ataque: 55,
      hp: 10,
      imagen: "",
    },
    {
      nombre: "Eevee",
      tipo: "Normal",
      ataque: 55,
      hp: 55,
      imagen: "",
    },
    {
      nombre: "Farfetch'd",
      tipo: "Normal-Volador",
      ataque: 65,
      hp: 52,
      imagen: "",
    },
    {
      nombre: "Gastly",
      tipo: "Fantasma-Veneno",
      ataque: 35,
      hp: 30,
      imagen: "",
    },
    {
      nombre: "Hitmonlee",
      tipo: "Lucha",
      ataque: 120,
      hp: 50,
      imagen: "",
    },
    {
      nombre: "Ivysaur",
      tipo: "Planta-Veneno",
      ataque: 62,
      hp: 60,
      imagen: "",
    },
    {
      nombre: "Jigglypuff",
      tipo: "Normal-Hada",
      ataque: 45,
      hp: 115,
      imagen: "",
    },
    {
      nombre: "Kabuto",
      tipo: "Roca-Agua",
      ataque: 80,
      hp: 30,
      imagen: "",
    },
    {
      nombre: "Lickitung",
      tipo: "Normal",
      ataque: 55,
      hp: 90,
      imagen: "",
    },
    {
      nombre: "Machop",
      tipo: "Lucha",
      ataque: 80,
      hp: 70,
      imagen: "",
    },
    {
      nombre: "Nidoran♀",
      tipo: "Veneno",
      ataque: 47,
      hp: 55,
      imagen: "",
    },
    {
      nombre: "Oddish",
      tipo: "Planta-Veneno",
      ataque: 50,
      hp: 45,
      imagen: "",
    },
    {
      nombre: "Pidgey",
      tipo: "Normal-Volador",
      ataque: 45,
      hp: 40,
      imagen: "",
    },
    {
        nombre: "Pikachu",
        tipo: "Electrico",
        ataque: 55,
        hp: 35,
        imagen: "https://i.imgur.com/7q7zj6J.png",
      },
    {
      nombre: "Quilava",
      tipo: "Fuego",
      ataque: 64,
      hp: 58,
      imagen: "",
    },
    {
      nombre: "Rattata",
      tipo: "Normal",
      ataque: 56,
      hp: 30,
      imagen: "",
    },
    {
      nombre: "Squirtle",
      tipo: "Agua",
      ataque: 48,
      hp: 44,
      imagen: "",
    },
    {
      nombre: "Tauros",
      tipo: "Normal",
      ataque: 100,
      hp: 75,
      imagen: "",
    },
    {
      nombre: "Umbreon",
      tipo: "Siniestro",
      ataque: 65,
      hp: 95,
      imagen: "",
    },
    {
      nombre: "Vileplume",
      tipo: "Planta-Veneno",
      ataque: 80,
      hp: 75,
      imagen: "",
    },
    {
      nombre: "Wartortle",
      tipo: "Agua",
      ataque: 63,
      hp: 59,
      imagen: "",
    },
    {
      nombre: "Xatu",
      tipo: "Psiquico-Volador",
      ataque: 75,
      hp: 65,
      imagen: "",
    },
    {
      nombre: "Yanma",
      tipo: "Bicho-Volador",
      ataque: 65,
      hp: 65,
      imagen: "",
    },
    {
      nombre: "Zapdos",
      tipo: "Electrico-Volador",
      ataque: 90,
      hp: 90,
      imagen: "",
    },
  ]; */
  
  // pokemonArray.sort((a, b) => a.nombre.localeCompare(b.nombre));
  


// funcion buscar
/* function buscarPokemon() {
  const inputText = document.getElementById('searchInput').value.toLowerCase();
  const filteredPokemon = pokemonArray.filter(pokemon => pokemon.nombre.toLowerCase().includes(inputText));

  const cardsSection = document.getElementById('cardsSection');
  cardsSection.innerHTML = ''; // Limpiar la sección antes de agregar las nuevas tarjetas

  filteredPokemon.forEach(pokemon => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.classList.add(pokemon.tipo.toLowerCase()); // Agregar la clase de tipo de Pokémon

      card.innerHTML = `
          <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
          <h2>${pokemon.nombre}</h2>
          <p>Tipo: ${pokemon.tipo}</p>
          <p>Ataque: ${pokemon.ataque}</p>
          <p>HP: ${pokemon.hp}</p>
      `;

      cardsSection.appendChild(card);
  });
}
 */

function buscarPokemon() {
  const inputText = document.getElementById('searchInput').value.toLowerCase();


   // Mostrar GIF de carga
   mostrarGifDeCarga();

   
  // Limpiar sección de tarjetas antes de realizar una nueva búsqueda
  const cardsSection = document.getElementById('cardsSection');

  
 

  // Simular carga de datos con setTimeout
  setTimeout(() => {
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
                <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
                <p>Tipo: ${pokemon.tipo}</p>
                <p>Ataque: ${pokemon.ataque}</p>
                <p>HP: ${pokemon.hp}</p>
            `;
    
            cardsSection.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, 2000); // Esperar 2 segundos antes de cargar los datos
}

function mostrarGifDeCarga() {
  // Muestra el GIF de carga
  const gifElement = document.getElementById('gifDeCarga');
  gifElement.style.display = 'block'; // Cambia el estilo para hacer visible el GIF de carga
}



  console.log(pokemonArray); 




