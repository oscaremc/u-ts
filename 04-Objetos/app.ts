( () => {
    let flash: { name: string, age?: number, powers:  string[] } = {
        name: 'Barry Allen',
        age: 24, 
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    console.log(flash)
})();

( () => {
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

})();

( () => {

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


})();


( () => {

    type Hero = {
        name: string; 
        age?: number; 
        powers: string[];
        getName?: () => string; 
    }

    let myCustomVariable: (string | number | Hero) = 'Fernando'; 
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


})();