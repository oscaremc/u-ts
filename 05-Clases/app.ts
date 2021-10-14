( () => {
    class Avenger {

        static avgAge: number = 35;

        constructor(
            private name: string,
            private team: string, 
            public realName?: string
        ){}

    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman)

})();

( () => {
    class Avenger {

        static avgAge: number = 35;

        // static getAvgAge(){
        //     return `${this.name}`
        // }

        constructor(
            private name: string,
            private team: string, 
            public realName?: string
        ){}

        public bio(){
            return `${this.name} (${this.team})!!!`
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);
    
    console.log(antman.bio())
    // console.log(Avenger.getAvgAge());
    

})();

(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado!')
        }

        protected getFullname() {
            return `${ this.name } ${ this.realName }`
        }

    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant:boolean
        ){
            super( name, realName )
            console.log('Constructor Xmen llamado');
        }

        get fullName() {
            return `${ this.name } - ${ this.realName }`;
        }

        set fullName( name: string ) {

            if ( name.length < 3 ) {
                throw new Error('EL nombre debe de ser mayor de 3 letras')
            }

            this.name = name;
        }


        getFullnameDesdeXmen() {
            console.log( super.getFullname()  )
        }

    }


    // const wolverine = new Xmen('Wolverine','Logan', true)

    
    // wolverine.fullName = 'Fe';
    
    // console.log(wolverine.fullName );
    // wolverine.getFullnameDesdeXmen();


})();

(()=> {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }


    class Xmen extends Mutante {

        salvarMundo() {
            return 'Mundo a salvo!';
        }

    }

    class Villian extends Mutante {

        conquistarMundo() {
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

})();

(() => {

    interface Hero {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }


    let flash: Hero  = {
        name: 'Barry Allen',
        age: 24,
        powers: [1,2]
    } 

    let superman: Hero  = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    }




})();


(()=> {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ):string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        public name: string;
        public realName: string;
        public age: number;
        
        mutantPower( id: number ) {
            return this.name + ' ' + this.realName;
        }
    }


})();