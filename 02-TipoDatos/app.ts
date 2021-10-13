const a: number = 10; 
let b = 23; 
let c; 
c = {}; 
c = "df"; 


// ARREGLOS

( () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];

    console.log(arr)

    const number: number[] = [1, 2, 3, 4, 5, 6, 7];

    console.log(number);
    
    const numbers: number[] = [1, 2, 3, "4", 5, 6, 7];  // arroja error por definir el tipo del array y agregar un elemento texto

    console.log(numbers);

    const num: (number | string)[] = [1, 2, 3, "4", 5, 6, 7]; //se asigna diferentes tipos de elemntos al array

    console.log(num);   
    

})();


// TUPLAS

( () => {

    
    const arrs = [ 'Dr Strange', 100 ];  // (number | string) pero no es tupla sigue siendo un array 

    console.log({arrs});

    //las tuplas son: 
    const tupla: [string, number] = ['Dr Strange', 100];    //creamos las tuplas asignando por tipo y ubicacion

    tupla[0] = 'Ironman';           //podemos cambiar los valores y solo string
    tupla[1] = 50;                  //podemos cambiar los valores pero solo number

    console.log({tupla});

    

})()