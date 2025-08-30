const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const pokemonDetailsPanel = document.getElementById('pokemon-details-panel') // Novo elemento
const pokedexListSection = document.querySelector('.pokedex-list-section');
const mainContent = document.querySelector('.main-content');

const maxRecords = 151
const limit = 10
let offset = 0;


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(pokemon => `
            <li class="pokemon ${pokemon.type}" onclick="showPokemonDetails(${pokemon.number})">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

function showPokemonDetails(pokemonNumber) {
    // Adiciona a classe para ativar o layout de duas colunas em telas grandes
    if (window.innerWidth >= 992) {
        mainContent.classList.add('has-details');
        pokedexListSection.classList.add('has-details');
        pokemonDetailsPanel.classList.add('has-details');
    }

    // Oculta o botão de "Load More"
    loadMoreButton.style.display = 'none';
    pokeApi.getPokemon(pokemonNumber).then(pokemon => {
       const detailsHtml = `
       <button class="back-button" onclick="hidePokemonDetails()">←</button>
    <div class="details-header ${pokemon.type}">
        <h2 class="name">${pokemon.name}</h2>
        <span class="number">#${pokemon.number}</span>
        <div class="types-container">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </div>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
    <div class="details-body">
        <h3>About</h3>
        <ul>
            <li><strong>Species:</strong> ${pokemon.species}</li>
            <li><strong>Height:</strong> ${pokemon.height}</li>
            <li><strong>Weight:</strong> ${pokemon.weight}</li>
            <li><strong>Abilities:</strong> ${pokemon.abilities.join(', ')}</li>
        </ul>
    </div>
`;
pokemonDetailsPanel.innerHTML = detailsHtml;
pokemonDetailsPanel.style.display = 'block';
    })
}

function hidePokemonDetails() {
    // Remove a classe para que o layout volte ao normal
    mainContent.classList.remove('has-details');
    pokedexListSection.classList.remove('has-details');
    pokemonDetailsPanel.classList.remove('has-details');

    // Limpa o conteúdo e mostra o botão de "Load More"
    pokemonDetailsPanel.innerHTML = '';
    loadMoreButton.style.display = 'block';
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})