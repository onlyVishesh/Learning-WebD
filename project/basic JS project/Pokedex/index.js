import { pokemon as pokemonsData } from "./database.js";

// load pokemon and create filter

window.addEventListener("DOMContentLoaded", () => {
    displayPokemons(pokemonsData);
    createFilterDropdown();
});

function createFilterDropdown() {
    let types = [];
    pokemonsData.forEach((pokemon) => {
        pokemon.type.forEach((kind) => {
            if (!types.includes(kind)) {
                types.push(kind);
            }
        });
    });
    types.forEach((type) => {
        document
            .querySelector(".type")
            .insertAdjacentHTML(
                "beforeend",
                `<option class="type-option" value="${type}">${type}</option>`
            );
    });

    return types;
}

function displayPokemons(pokemonsData) {
    let displayPokemon = pokemonsData.map((pokemon) => {
        let pokemonEvolutionHTML = `<p class="pokemon-evolutions-name">`;
        if (pokemon.next_evolution && !pokemon.prev_evolution) {
            pokemonEvolutionHTML += `<div><h5 class="next-evolution"> Next Evolution </h5>`;
            pokemon.next_evolution.forEach((evolution) => {
                pokemonEvolutionHTML += `<p class="evolutions"> ${evolution.num} ${evolution.name}</p>`;
            });
            pokemonEvolutionHTML += "</div>";
        } else if (pokemon.next_evolution && pokemon.prev_evolution) {
            pokemonEvolutionHTML += `<div><h5 class="previous-evolution"> Previous Evolution </h5>`;
            pokemon.prev_evolution.forEach((evolution) => {
                pokemonEvolutionHTML += `<p class="evolutions"> ${evolution.num} ${evolution.name}</p>`;
            });
            pokemonEvolutionHTML += "</div>";

            pokemonEvolutionHTML += `<div><h5 class="next-evolution"> Next Evolution </h5>`;
            pokemon.next_evolution.forEach((evolution) => {
                pokemonEvolutionHTML += `<p class="evolutions"> ${evolution.num} ${evolution.name}</p>`;
            });
            pokemonEvolutionHTML += "</div>";
        } else if (!pokemon.next_evolution && pokemon.prev_evolution) {
            pokemonEvolutionHTML += `<div><h5 class="previous-evolution"> Previous Evolution </h5>`;
            pokemon.prev_evolution.forEach((evolution) => {
                pokemonEvolutionHTML += `<p class="evolutions previous-evolutions"> ${evolution.num} ${evolution.name}</p>`;
            });
            pokemonEvolutionHTML += "</div>";
        } else {
            pokemonEvolutionHTML += `<div class="evolutions">No Evolutions<div>`;
        }
        pokemonEvolutionHTML += `</p>`;
        return `
    <section class="pokemon-container" data-id="${pokemon.num}">
      <h2 class="pokemon-no">${pokemon.num}</h2>
      <figure>
        <img src="${pokemon.img}" alt="${pokemon.name} image" class="pokemon-image">
        <figcaption class="pokemon-name"><h3>${pokemon.name}</h3></figcaption>
      </figure>
      <div class="pokemon-type">
      Type - ${pokemon.type}
      </div>
      <div class="pokemon-weakness">Weakness - ${pokemon.weaknesses}</div>
      <div>
        <h4 class="pokemon-evolutions">Evolution</h4>
        
        
          ${pokemonEvolutionHTML}

        
      </div>
    </section>
    `;
    });
    displayPokemon = displayPokemon.join("");
    document.querySelector(".list").innerHTML = displayPokemon;
}
