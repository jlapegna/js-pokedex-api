window.onload = function() {

const pokeName = document.querySelector('.pokemon-name');
const pokeId = document.querySelector('.pokemon-number');
const pokeFrontImage = document.querySelector('.poke-image');
const pokeBackImage = document.querySelector('.poke-image-back');
const pokeWeight = document.querySelector('.weight-stat');
const pokeHeight = document.querySelector('.height-stat');
const pokeTypeOne = document.querySelector('.first-type');
const pokeTypetwo = document.querySelector('.second-type');
const pokeListItems = document.querySelectorAll('.list-item');
const leftButton = document.querySelector('.prev-button');
const rightButton = document.querySelector('.next-button');

// Functions

const capitalize = (str) => str[0].toUpperCase() + str.substr(1);



  const api_url = 'https://pokeapi.co/api/v2/pokemon/1';

  async function getPokeAPI() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

    pokeName.textContent = capitalize(data['name']);
    pokeId.textContent = data['id'];
    pokeWeight.textContent = data['weight'];
    pokeHeight.textContent = data['height'];
    pokeFrontImage.src = data['sprites']['front_default'] || '';
    pokeBackImage.src = data['sprites']['back_default']|| '';

  }

    getPokeAPI();

};
