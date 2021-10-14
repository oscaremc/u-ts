Objetos en TypeScript! 

sintaxis: 

variable nombreVariable: {tipoVaribable: valorTipo} = {
    contenido variable
}

Especificar los tipos en los objetos obliga al desarrollador a poner el mismo contendio y cuidar de su valor

let flash: { name: string, age?: number, powers:  string[] } = {   // el simbolo ? de permite ser un valor opcional opcional
    name: 'Barry Allen',
    age: 24, 
    powers: ['Super velocidad', 'Viajar en el tiempo']
}

console.log(flash)


si quisieramos agregar mas elementos al objeto y si este fuera una funcion una opcion para realizarlo puede ser: 


let flash: { name: string, age?: number, powers:  string[], getName?: () => string } = {    //se agrega el tipo para recibir una funcion de forma opcional
        name: 'Barry Allen',
        age: 24, 
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    flash = {                       //se reasigna el objeto
        name: 'Clark Kent', 
        // age: 60,                 //su valor es opcionl
        powers: ['Super fuerza'], 
        getName(){                  //si valor es opcionl y se agrega al objeto
            return this.name;
        }
    }

    console.log( flash )


si notamos que los tipos de los objetos son complicados de leer por lo largos como buena practica se debe extraer una variable donde hay una palabra recervada para eso que se llama "Type", esta buena practica nos permite ahorrar trabajo en caso que este mismo tipo de repita en diferentes objetos.

    type Hero = {
        name: string; 
        age?: number; 
        powers: string[];
        getName?: () => string; 
    }


    let flash: Hero = {    //se agrega el tipo para recibir una funcion de forma opcional
        name: 'Barry Allen',
        age: 24, 
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {    //se agrega el tipo para recibir una funcion de forma opcional
        name: 'Clark kent',
        age: 60, 
        powers: ['Super fuerza']
    }


    Una variable puede tener diferentes tipos entre ella objetos: 

    
    type Hero = {                   //tipo para un objeto 
        name: string; 
        age?: number; 
        powers: string[];
        getName?: () => string; 
    }

    let myCustomVariable: (string | number | Hero) = 'Fernando';  //variable que recibe diferentes tipos 
    console.log(typeof myCustomVariable)

    myCustomVariable = 20
    console.log(typeof myCustomVariable)

    myCustomVariable = {
        name: 'Bruce',
        age: 43, 
        powers: ['Super fuerza']
    }
    console.log(typeof myCustomVariable)
    console.log(myCustomVariable)


DEPURACION DE ERRORES

si quisiera debuguer el codigo por un posible error hace uso de la consola! pero si revisamos las dev Tools del navegador nos damos cuenta que solo reconoce los archivos html y js pero esto se puede modificar. 

para que el navegador tambien pueda debuguear el codigo ts lo que haces es abrir el archivo tsconfig.json y descomentar la opcion:

"sourceMap": true,                                /* Create source map files for emitted JavaScript files. */

con esto ya podemos ver en la consola del navegador que podemos ver los consol.log con referencia al archivo ts que es deberiamos modificar. 


DESTUCTURACION
llamando por una variable 

// DESTRUCTURACION TRADICIONAL
    const avengers = {
        nick: 'Samuel L. Jackson', 
        ironman: 'Robert Downey Jr', 
        vision: 'Paul Bettany',
        activo: true, 
        poder: 1500.123534
    }

    const {poder, vision} = avengers

    console.log(poder.toFixed(2), vision.toUpperCase())



DESTUCTURACION
llamando por una funcion


// DESCTUCTURACION PARA FUNCION
    type Avengers = {           //tipo de datos del objeto
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;  
    }

    const avengers: Avengers = {        //objeto 
        nick: 'Samuel L. Jackson', 
        ironman: 'Robert Downey Jr', 
        vision: 'Paul Bettany',
        activo: true, 
        poder: 1500.123534
    }

    const printOneAvenger = ({ ironman, ...resto }: Avengers ) => {        //
        console.log(ironman, resto);
    }

    const printAvenger = ({ ironman }: Avengers ) => {        //
        console.log(ironman);
    }

    printAvenger(avengers);
    printOneAvenger(avengers);


DESTRUCTURACION
de un arreglo

Cuando tengamos un arreglo []; y vayamos a destructurar podemos hacerlo como si fuera una varible solo tiendo dos cosas en cuenta: 
    uno, se llama el arreglo en la variable tambien con [];
    dos, se usa la posicion segun el arreglo para llamar el valor a usar. 

const avengersArr: [string, boolean, number ] = ['Cap. America', true, 150.15]; 

// si queremos el segundo valor del arreglo vamos a dejar un espacion separado con una coma y nombramos ese valor con un nombre ramdon o a gusto. en este caso "ironman" y en consola nos da true por que es el segundo valor del arreglo

const[ , ironman,  ] = avengersArr; 
console.log({ironman})

// si queremos el tercer valor del arreglo vamos a dejar un espacion separado con una coma y nombramos ese valor con un nombre ramdon o a gusto. en este caso "hulk" y en consola nos da 150.15 por que es el tercer valor del arreglo;

const[ , , hulk] = avengersArr; 
console.log({hulk})



CICLO FOR
>> forOf 

Teniendo un arreglo llamado avengers que llama a diferentes objetos podemos recorrerlos con la la palagra reservada forOf que nos arroja una estructura de codigo como;

for (const "variable" of "arreglo") {
    Contendio del for;
}

y segun el ejemplo podemos usar en codigo este for de la siguiente manera.

type Avenger = {
    name: string,
    weapon: string;
}

const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Armorsuit'
}

const captainAmerica: Avenger = {
    name: 'Capitán América',
    weapon: 'Escudo'
}

const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
}

const avengers: Avenger[] = [ ironman, thor, captainAmerica ];

for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon );
}