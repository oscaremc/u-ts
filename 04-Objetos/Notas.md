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

