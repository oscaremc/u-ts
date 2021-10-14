Clases en TypeScritp! 

hay un forma mas consta de crear clases establecerlas y llamarlas y es con ts de la siguiente manera; 

    class Avenger {                         //Creo la clase 

        static avgAge: number = 35;         //el unico llamado que no se puede establecer dentro dle paramentro del constructo en ts es static se hace de forma tradicional

        constructor(                        //se crea el constructo 
            private name: string,           //se establece privada la clase prodiedad name y de tipo string
            private team: string,           //se establece privada la clase prodiedad team y de tipo string
            public realName?: string        //se establece publica la clase realName con propidad opcional y de tipo string
        ){}

    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');     //le envio valor a las propiedad de la clase. 
    console.log(antman)


    Metos publicos de las clases 

    
    class Avenger {                             //se crea la clase 

        static avgAge: number = 35;

        static getAvgAge(){                     //metodo estatico (this hace referencia directamente a Avenger la clase)
            return this.name
        }

        constructor(
            private name: string,
            private team: string, 
            public realName?: string
        ){}

        public bio(){                               //metodo de la clase (this hace referencia la proiedad de la clase)
            return `${this.name} (${this.team})!!!`
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);
    
    console.log(antman.bio())              //se llama usando la asignacion y se usa el metodo
    console.log(Avenger.getAvgAge());      //static solo se puede usar su metodo directamente con class



    HEREDAR 


    class Avenger {                                         //clase principal 
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado!')
        }

        protected getFullname() {                           //metodo protegido para usarse solo dentro de la clase avenger
            return `${ this.name } ${ this.realName }`
        }

    }

    class Xmen extends Avenger {                            //clase que hereda de la principal

        constructor(                                        // se crea su propio constructor
            name: string,                                   // no es necesario poner el tipo de clase por que lo hereda
            realName: string,                               // aca se omite private que se hereda de la prinicipal
            public isMutant:boolean
        ){
            super( name, realName )                         // el super es lo principal que se le pasa al contructor cuando se crea
            console.log('Constructor Xmen llamado');
        }

        get fullName() {                                    //metodo get se crea como una propiedad de la clase para se llamada
            return `${ this.name } - ${ this.realName }`;
        }

        set fullName( name: string ) {                      //metodo set se crea para recibir un parametro y usarlo o operarlo segun lo requiera y no retorna nada

            if ( name.length < 3 ) {
                throw new Error('EL nombre debe de ser mayor de 3 letras')
            }

            this.name = name;
        }


        getFullnameDesdeXmen() {
            console.log( super.getFullname()  )
        }

    }



Clase ABSTRACT
son clases que me permite crear un una clase generica y por aparte poder enviarle propiedades y metodos de forma mas personalizada.


    abstract class Mutante {                        //clase principal 
        constructor(
            public name: string,
            public realName: string
        ){}
    }


    class Xmen extends Mutante {                    //hereda la clase 

        salvarMundo() {                             //se crea metodo apartir de la propiedad
            return 'Mundo a salvo!';
        }

    }

    class Villian extends Mutante {                  //hereda la clase 

        conquistarMundo() {                          //se crea metodo apartir de la propiedad
            return 'Mundo conquistado';
        }
    }


    const wolverine = new Xmen('Wolverine','Logan');
    const magneto = new Villian('Magneto','Magnus');

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());
    const printName = ( character: Mutante ) => {
        console.log( character.realName );
    }

    // printName( magneto );


    INTERFACES
    cumplen con el mismo objeto que type para crear funciones mas organizadas 
    tiene la ventaja de que me permite definr los metodos de la forma que quiero usarlo
    recordar que las interfaces no crean instacias.


    (() => {

    interface Client {                          //se crea la interfaz
        name: string;
        age?: number;
        address: Address;                       //para evitar los niveles se agrega un hijo externo que hace parte de la principal
        getFullAddress( id: string ):string;    //creo metodo para que me regrese texto
    }

    interface Address {                         //interfaz secundaria
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U2A'
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }
})()



CLASES EN LA INTERFAZ


