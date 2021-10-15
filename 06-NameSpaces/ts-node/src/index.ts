import { Hero } from './classes/Hero';
import { genericFuntionArrow } from './generics/generics';
import { getPokemon } from './generics/get-pokemon';



const ironman = new Hero('Ironman', 1, 55);

console.log(ironman)

const name: string = 'Fernando';

console.log(genericFuntionArrow(3.141618).toFixed(2));
console.log(genericFuntionArrow(name).toUpperCase);
console.log(genericFuntionArrow(new Date()).getDate());


getPokemon(4)
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
    .finally(()=> console.log("Fin de getPokemon"))

