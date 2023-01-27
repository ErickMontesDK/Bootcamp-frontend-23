import { Pokemon } from "./pokemon";
import { TrainerPokemon } from "./trainer";

const move = {name: 'thunderbolt', power: 90};
const pikachu = new Pokemon('pikachu', 1, 5, ["electric"]);
pikachu.figth(move);
pikachu.figth(move);  

const mainTrainer = new TrainerPokemon('Red') as any
mainTrainer.getTeamPokemonData()