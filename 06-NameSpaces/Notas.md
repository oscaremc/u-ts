NAMESPACES para TypeScript!

podemos entenderlo como un agrupador global en nuestro programa donde podremos usarlo para exportar las funciones que nosotros queramos usart fuera de ese espacio y sin conflicto podremos usar variables, funciones, clases y demas. 

un ejemplo es: 


namespace Validations {                                                //Creo mi espacio NameSpaces con su palabra reservada
    export const validateText = ( text: string ): boolean => {         //funcion que quiero exportar 
        return (text.length > 3) ? true : false;
    }

    export const validateDate = (myDate: Date): boolean => {
        return ( isNaN(myDate.valueOf() ) )
        ?false
        :true;
    }
}

console.log(Validations.validateText('Fer'))                           //uso la funcion que exporte fuera del espacio NameSpaces



Vamos a ponerlo en practica con con el siguiente ejercicio: 

- Descargaremos el proyecto: https://github.com/Klerith/curso-typescript/tree/codigo-inicial
- lo descoprimimos y a sugerencia le ponemos un nombre mas simple a la carpeta llamado ts-node
- abrimos un terminal y ubicandonos dentro del proyecto instalamos las dependecias con: npm install
- luego dentro dentre de la carpeta src creamos una nueva carpeta llamada classes y creamos un archivo llamado Hero.ts con la incial en mayuscula para que represente que es una clase. 
- luego corremos el proyecto con el comando npm run start, recuerda que debe estar dentro de la carpeta ts-node. 
- dentro del archivo Hero.ts vamos agregar el siguiente codigo: 


export class Hero {
    constructor(
        public name: string, 
        public powerId: number, 
        public age: number
    ){}
}


- dentro del archivo index.ts de la carpeta src, agregamos el siguiente codigo: 


import { Hero } from './classes/Hero';

const ironman = new Hero('Ironman', 1, 55);

console.log(ironman)


- teniendo esto, dentro de consola del navegador devemos vel el sigueinte mensaje: 

Hero {name: 'Ironman', powerId: 1, age: 55}

