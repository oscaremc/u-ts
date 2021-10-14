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





