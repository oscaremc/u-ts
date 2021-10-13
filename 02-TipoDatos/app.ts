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
    
    

})()