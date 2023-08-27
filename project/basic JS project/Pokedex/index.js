import { pokemon, pokemon as pokemonsData } from "./database.js";

console.log(pokemonsData.forEach((pokemon) => console.log(pokemon.id)));

let pokemonHTML = "";
let nextEvolutionHTML = "";

// pokemonsData.forEach((pokemon) => {
//     pokemon.next_evolution.forEach((evaluation) => {
//         nextEvolutionHTML += `<p>${evaluation.num}</p>`;
//     });
// });

pokemonsData.forEach((pokemon) => {
    pokemonHTML += `
    <section>
    <h2>${pokemon.num}</h2>
    <figure> 
    <img src="${pokemon.img}" alt="${pokemon.name} image">
      <figcaption>${pokemon.name}</figcaption>
    </figure>
    <div>
    ${pokemon.type}
    </div>
    <div>${pokemon.weaknesses}</div>
    <div>
      <h4>next evolution</h4>
      <p>
    
      </p>
    </div>
    </section>
    `;
});

document.querySelector(".list").innerHTML = pokemonHTML;
