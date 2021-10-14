( () => {

    const hero: string = "flash"; 

    function returnName():string {
        return hero;
    }

    const activateBatisignal = ():string => {
        return 'Batiseñar actividad! ' ; 
    }

    console.log(typeof activateBatisignal);

    const heroName = returnName();

    console.log(heroName);
    

})();

( () => {

    const fullName = ( firstName: string, lastName?: string ):string => {
        return `${firstName} ${lastName || "---" }`;
    }

    const name = fullName("tony");

    console.log({name});
    
})();

( () => {

    const fullName = ( firstName:string, ...restArgs:string[]):string => {
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName( 'clark', 'Joseph', 'Kent');

    console.log({superman});
    

})();