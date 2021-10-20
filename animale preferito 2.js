let animal = prompt('Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda');

let input = parseInt(prompt("Scegli il tuo animale:\n 1.Dog\n 2.Cat\n 3.Goldfish\n 4.Monkey\n 5.Panda"));
console.log(animals.hasOwnProperty(input-1) ? "Scegli il tuo" + animals[input-1]: "Animale non trovato");