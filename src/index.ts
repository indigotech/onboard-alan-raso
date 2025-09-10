import { capturePokemon, fetchPokedexInfo, observePokemons } from './async-programming/promises.js';

async function playGame() {
  const pokemons = await observePokemons();
  console.info(`Observed pokemons: ${JSON.stringify(pokemons, null, 2)}`);

  try {
    const pokemon = await capturePokemon(pokemons[0].id);
    console.info(`Congratz, you captured ${pokemon.name}!`);
    const details = await fetchPokedexInfo(pokemon.id);
    console.info(details);
  } catch (error) {
    console.error(error);
  }
}

// function playGame() {
//   observePokemons((pokemons) => {
//     console.info(`Observed pokemons: ${JSON.stringify(pokemons, null, 2)}`);
//     const pokemon = pokemons[0];

//     capturePokemon(
//       pokemon.id,
//       (pokemon: Pokemon) => {
//         console.info(`Congratz, you captured ${pokemon.name}!`);

//         fetchPokedexInfo(
//           pokemon.id,
//           (details: string) => {
//             console.info(details);
//           },
//           (error: Error) => {
//             console.error(error);
//           }
//         )
//       },
//       (error: Error) => {
//         console.error(error);
//       }
//     );
//   });
// }

playGame();
