Tipos de Datos en TypeScript! 

--primitivos 
--(string, number, boolean, symbol)

--compuestos 
--(objetos literales, funciones, clases, arreglos)


como buena practica en ts debemos siempre inferir el tipo de dato de una variable, ts lo puede hacer pero aveces no es tan exacta. 

const a: number = 10;  // tipo numero (buena practica)
let b = 23;            // tipo numero pero puede variar en exepciones 
let c;                 // tipo any por que puede ser cualquier cosa 
let msg = false;       // el bo0leano puede ser true o false, pero tambien puede ser null o undefine. por eso es bueno especificar el tipo

la buena practica es: 

const a: number = 10; 
let b: string = "hola"; 
let c: number; 
let msg: booleano = true;

function(msg: string){                  // si declaramos una nueva variable dentro de una funcion tambien su tipo 
    console.log(msg + ' ' + 'Fernando')
    msg."opcioens de texto"
}

tambien es importante el cruce de conceptos en el scopt global lo que se recomiendo es crear una funcion anonima inicializada a la vez, por ejemplo: 


( () => {
    const a: number = 10; 

    console.log(a)
} )()



ARRAYS en TypeScript

( () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];

    console.log(arr)

    const number: number[] = [1, 2, 3, 4, 5, 6, 7];

    console.log(number);
    
    const numbers: number[] = [1, 2, 3, "4", 5, 6, 7];  // arroja error por definir el tipo del array y agregar un elemento texto

    console.log(numbers);

    const num: (number | string)[] = [1, 2, 3, "4", 5, 6, 7]; //se asigna diferentes tipos de elemntos al array

    console.log(num);   
    

})()

// TUPLAS de Javascript! 

( () => {

    
    const arrs = [ 'Dr Strange', 100 ];  // (number | string) pero no es tupla sigue siendo un array 

    console.log({arrs});

    //las tuplas son: 
    const tupla: [string, number] = ['Dr Strange', 100];    //creamos las tuplas asignando por tipo y ubicacion

    tupla[0] = 'Ironman';           //podemos cambiar los valores y solo string
    tupla[1] = 50;                  //podemos cambiar los valores pero solo number

    console.log({tupla});

    

})()