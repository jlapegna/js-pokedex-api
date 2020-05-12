window.onload = function() {

  const pokeName = document.querySelector('.pokemon-name');
  const pokeId = document.querySelector('.pokemon-number');
  const pokeFrontImage = document.querySelector('.poke-image');
  const pokeBackImage = document.querySelector('.poke-image-back');
  const pokeWeight = document.querySelector('.weight-stat');
  const pokeHeight = document.querySelector('.height-stat');
  const pokeSpeed = document.querySelector('.speed-stat');
  const pokeDefense = document.querySelector('.defense-stat');
  const pokeForm = document.querySelector('.form-stat');
  const pokeTypeOne = document.querySelector('.first-type');
  const pokeTypeTwo = document.querySelector('.second-type');
  const pokeListItems = document.querySelectorAll('.list-item');
  const pokeMoveList = document.querySelector('.move-list');
  const leftButton = document.querySelector('.prev-button');
  const rightButton = document.querySelector('.next-button');

  nextURL = null;
  prevURL = null;

  // Functions

  const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

  const TYPES = [
    'normal', 'fighting', 'flying',
    'poison', 'ground', 'rock',
    'bug', 'ghost', 'steel',
    'fire', 'water', 'grass',
    'electric', 'psychic', 'ice',
    'dragon', 'dark', 'fairy'
  ];

  const resetClasses = () => {
    for (const type of TYPES) {
      pokeTypeOne.classList.remove(type);
      pokeTypeTwo.classList.remove(type);
    }
  };


  // Left Screen

  const fetchPokeData = id => {

    const api_url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    getPokeAPI(api_url);

    async function getPokeAPI() {
      const response = await fetch(api_url);
      const data = await response.json();
      resetClasses();
      console.log(data);


      pokeName.textContent = capitalize(data['name']);
      pokeId.textContent = 'no.' + data['id'].toString().padStart(3, '0');
      pokeWeight.textContent = 'Weight:  ' + data['weight'];
      pokeHeight.textContent = 'Height:  ' + data['height'];
      pokeFrontImage.src = data['sprites']['front_default'] || '';
      pokeBackImage.src = data['sprites']['back_default'] || '';

      var pokeStats = data['stats'];
      var speedStat = pokeStats[0]['base_stat'];
      pokeSpeed.textContent = 'Speed:  ' + speedStat;

      var defenseStat = pokeStats[3]['base_stat'];
      pokeDefense.textContent = 'Defense:  ' + defenseStat;

      const dataTypes = data['types'];
      const dataFirstType = dataTypes[0];
      const dataSecondType = dataTypes[1];

      if (dataFirstType) {

        pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']);

        switch (dataFirstType['type']['name']) {
          case "poison":
            pokeTypeOne.classList.add('poison');
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
          case "normal":
            pokeTypeOne.classList.add('normal');
            break;
        }
      }

      if (dataSecondType) {
        pokeTypeTwo.classList.remove('hide');
        pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);

        switch (dataSecondType['type']['name']) {
          case "poison":
            pokeTypeTwo.classList.add('poison');
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
          case "normal":
            pokeTypeTwo.classList.add('normal');
            break;
        }
      } else {
        pokeTypeTwo.classList.add('hide');
        pokeTypeTwo.textContent = '';
      }
    }

  };

  // Right Screen

  const fetchPokeList = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const {
          results,
          previous,
          next
        } = data;
        console.log(data);

        prevURL = previous;
        nextURL = next;

        for (let i = 0; i < pokeListItems.length; i++) {
          const pokeListItem = pokeListItems[i];
          const resultData = results[i];

          if (resultData) {
            const {
              name,
              url
            } = resultData;
            const urlArray = url.split('/');
            const id = urlArray[urlArray.length - 2];
            pokeListItem.textContent = id + '. ' + capitalize(name);
          } else {
            pokeListItem.textContent = '';
          }
        }
      });
  };

  // Event Listeners

  const handleRightButton = () => {
    if (nextURL) {
      fetchPokeList(nextURL);
    }
  };

  const handleLeftButton = () => {
    if (prevURL) {
      fetchPokeList(prevURL);
    }
  };

  const handleListItem = (e) => {
    const listItem = e.target.textContent;
    const pokemonID = listItem.split('.')[0];
    fetchPokeData(pokemonID);
  };

  // Event Listeners

  leftButton.addEventListener('click', handleLeftButton);
  rightButton.addEventListener('click', handleRightButton);

  for (const pokeListItem of pokeListItems) {
    pokeListItem.addEventListener('click', handleListItem);
  };

  // Initalize the APP

  fetchPokeList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');

};
