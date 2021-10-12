TypeScript 

la logica de ts se es aconsejable realizara en una archivo separado con extesion .ts 
se enlaza directamente con el archivo html como si fuera js, pero por buena practica se complila en la terminal y cuando lo convierta a js. se usa mejor el archivo html enlazado con el de js. 

si el archivo TypeScript se creara con el nombre app.ts y tuviera un mensaje como por ejemplo: 

let msg = "Hola Mundo"

console.log(msg)

en la terminal dentro del proyecto, se usaria: 

tsc app

y no devolveria dentro del proyecto un archivo app.js compilado con el codigo que escribimos en app.ts 