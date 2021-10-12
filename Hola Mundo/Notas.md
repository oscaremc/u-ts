TypeScript 

la logica de ts se es aconsejable realizara en una archivo separado con extesion .ts 
se enlaza directamente con el archivo html como si fuera js, pero por buena practica se complila en la terminal y cuando lo convierta a js. se usa mejor el archivo html enlazado con el de js. 

si el archivo TypeScript se creara con el nombre app.ts y tuviera un mensaje como por ejemplo: 

let msg = "Hola Mundo"

console.log(msg)

en la terminal dentro del proyecto, se usaria: 

tsc app

y no devolveria dentro del proyecto un archivo app.js compilado con el codigo que escribimos en app.ts 


IMPORTANTE: crear el arcivo de configuracion de TypeScript

para esto dentro del proyecto, se abrira la linea de comando y se realizara: 

tsc --init 

con esto se crear un archivo llamado tsconfig.json

MODO: OBSERVADO (WATCH)
se conoce como el modo donde typescritp traspila el codigo de marena automatica con solo guadar los cambios en el .ts se ven reflejados en el .js. mietras este en el modod desarrollo. 

puedes usarlo:
tsc --watch 

y ya que dara creado el modo observador activado y se ve compilara de forma autmotica los archivos de js