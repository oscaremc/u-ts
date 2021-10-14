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


( () => {

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
    
})();

( () => {
    // DESCTUCTURACION PARA FUNCION
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;  
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson', 
        ironman: 'Robert Downey Jr', 
        vision: 'Paul Bettany',
        activo: true, 
        poder: 1500.123534
    }

    const printAvenger = ({ ironman, ...resto }: Avengers ) => {
        console.log(ironman, resto)
    }

    printAvenger(avengers);

})();

( () => {
    const avengersArr: [string, boolean, number ] = ['Cap. America', true, 150.15]; 

    const[ , ironman,  ] = avengersArr; 
    console.log({ironman})

    
    const[ , , hulk] = avengersArr; 
    console.log({hulk})
})();

(()=> {

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


})()