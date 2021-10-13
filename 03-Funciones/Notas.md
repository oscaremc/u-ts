Funciones en typeScript! 

aunque la varible que se llame y/o use tenga definido su tipo de varible, necesita que la funcion tambien definina el tipo de variable que va retornar. 

( () => {

    const hero: string = "flash";  //tipo de variable string 

    function returnName():string {     //tipo de valor a retornar string
        return hero;    
    }

    const activateBatisignal = ():string => {     //  ejemplo en funcion en flecha 
        return 'Batiseñar actividad! ' ; 
    }

    console.log(typeof activateBatisignal);

    const heroName = returnName();

    console.log(heroName);
    

})()

Cuando la funcion tiene parametros y se define inmediata mente el tipo del parametro oblica al programa a que funcione, solo si se envia ese parametro a menos que se le indique la exepcion. 

( () => {

    const fullName = ( firstName: string, lastName?: string ):string => {    // ? el simbolo me ayuda a darle un valor opcional al parametro
        return `${firstName} ${lastName || "---" }`;        // + agregarle una opcion que no quede vacio sino que tenga una respuesta llena
    }

    const name = fullName("tony");

    console.log({name});
    
})();

si quisiera recibir un numero desconocido de parametros pero hacer solo el primero obbligatorio se haria de la siguiente manera: 


( () => {

    const fullName = ( firstName:string, ...restArgs:string[]):string => {
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName( 'clark', 'Joseph', 'Kent');

    console.log({superman});
    

})();