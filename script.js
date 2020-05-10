window.onload = function() {

const pokeName = document.querySelector('.pokemon-name');
const pokeId = document.querySelector('.pokemon-number');
const pokeFrontImage = document.querySelector('.poke-image');
const pokeBackImage = document.querySelector('.poke-image-back');
const pokeWeight = document.querySelector('.weight-stat');
const pokeHeight = document.querySelector('.height-stat');
const pokeTypeOne = document.querySelector('.first-type');
const pokeTypeTwo = document.querySelector('.second-type');
const pokeListItems = document.querySelectorAll('.list-item');
const leftButton = document.querySelector('.prev-button');
const rightButton = document.querySelector('.next-button');

// Functions

const capitalize = (str) => str[0].toUpperCase() + str.substr(1);



  const api_url = 'https://pokeapi.co/api/v2/pokemon/275';

  async function getPokeAPI() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

    pokeName.textContent = capitalize(data['name']);
    pokeId.textContent = 'no.' + data['id'];
    pokeWeight.textContent = data['weight'];
    pokeHeight.textContent = data['height'];
    pokeFrontImage.src = data['sprites']['front_default'] || '';
    pokeBackImage.src = data['sprites']['back_default']|| '';


    const dataTypes = data['types'];
    const dataFirstType = dataTypes[0];
    const dataSecondType = dataTypes[1];

    if (dataFirstType) {
      pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']);

      switch(dataFirstType['type']['name']) {
        case "poison":
          pokeTypeOne.classList.add('posion');
          break;
        case "grass":
          pokeTypeOne.classList.add('grass');
          break;
        case "fighting":
          pokeTypeOne.classList.add('fighting');
          break;
        case "flying":
          pokeTypeOne.classList.add('flying');
          break;
        case "ground":
          pokeTypeOne.classList.add('ground');
          break;
        case "rock":
          pokeTypeOne.classList.add('rock');
          break;
        case "bug":
          pokeTypeOne.classList.add('bug');
          break;
        case "ghost":
          pokeTypeOne.classList.add('ghost');
          break;
        case "steel":
          pokeTypeOne.classList.add('steel');
          break;
        case "fire":
          pokeTypeOne.classList.add('fire');
          break;
        case "water":
          pokeTypeOne.classList.add('water');
          break;
        case "electric":
          pokeTypeOne.classList.add('electric');
          break;
        case "psychic":
          pokeTypeOne.classList.add('psychic');
          break;
        case "ice":
          pokeTypeOne.classList.add('ice');
          break;
        case "dragon":
          pokeTypeOne.classList.add('dragon');
          break;
        case "dark":
          pokeTypeOne.classList.add('dark');
          break;
        case "fairy":
          pokeTypeOne.classList.add('fairy');
          break;
        }
      } else {
        pokeTypeOne.textContent = '';
      }

    if (dataSecondType) {
      pokeTypeTwo.classList.remove('hide');
      pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);

      switch(dataSecondType['type']['name']) {
        case "poison":
          pokeTypeTwo.classList.add('posion');
          break;
        case "grass":
          pokeTypeTwo.classList.add('grass');
          break;
        case "fighting":
          pokeTypeTwo.classList.add('fighting');
          break;
        case "flying":
          pokeTypeTwo.classList.add('flying');
          break;
        case "ground":
          pokeTypeTwo.classList.add('ground');
          break;
        case "rock":
          pokeTypeTwo.classList.add('rock');
          break;
        case "bug":
          pokeTypeTwo.classList.add('bug');
          break;
        case "ghost":
          pokeTypeTwo.classList.add('ghost');
          break;
        case "steel":
          pokeTypeTwo.classList.add('steel');
          break;
        case "fire":
          pokeTypeTwo.classList.add('fire');
          break;
        case "water":
          pokeTypeTwo.classList.add('water');
          break;
        case "electric":
          pokeTypeTwo.classList.add('electric');
          break;
        case "psychic":
          pokeTypeTwo.classList.add('psychic');
          break;
        case "ice":
          pokeTypeTwo.classList.add('ice');
          break;
        case "dragon":
          pokeTypeTwo.classList.add('dragon');
          break;
        case "dark":
          pokeTypeTwo.classList.add('dark');
          break;
        case "fairy":
          pokeTypeTwo.classList.add('fairy');
          break;
        }
      } else {
        pokeTypeTwo.classList.add('hide');
        pokeTypeTwo.textContent = '';
      }






    if (dataSecondType) {
      pokeTypeTwo.classList.remove('hide');
      pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);

      switch(dataSecondType['type']['name']) {
        case "grass":
          pokeTypeTwo.classList.add('grass');
          break;
        case "fighting":
          pokeTypeTwo.classList.add('fighting');
          break;
        case "flying":
          pokeTypeTwo.classList.add('flying');
          break;
        case "ground":
          pokeTypeTwo.classList.add('ground');
          break;
        case "rock":
          pokeTypeTwo.classList.add('rock');
          break;
        case "bug":
          pokeTypeTwo.classList.add('bug');
          break;
        case "ghost":
          pokeTypeTwo.classList.add('ghost');
          break;
        case "steel":
          pokeTypeTwo.classList.add('steel');
          break;
        case "fire":
          pokeTypeTwo.classList.add('fire');
          break;
        case "water":
          pokeTypeTwo.classList.add('water');
          break;
        case "electric":
          pokeTypeTwo.classList.add('electric');
          break;
        case "psychic":
          pokeTypeTwo.classList.add('psychic');
          break;
        case "ice":
          pokeTypeTwo.classList.add('ice');
          break;
        case "dragon":
          pokeTypeTwo.classList.add('dragon');
          break;
        case "dark":
          pokeTypeTwo.classList.add('dark');
          break;
        case "fairy":
          pokeTypeTwo.classList.add('fairy');
          break;
        }
      } else {
        pokeTypeTwo.classList.add('hide');
        pokeTypeTwo.textContent = '';
      }
  }

    getPokeAPI();

};
