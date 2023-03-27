


const season = ['summer', 'autumn', 'winter', 'spring'];



export default function valida(input) {
    let errors = {}
    if (!input.name) {
        errors.name = "Name required"
    }   
    if(!input.details) {
        errors.details = "required"
    }
    if(!input.season) {
        errors.season = "required"
    }else if( !season.includes(input.season.toLowerCase()) ){
        errors.season = "choose: Summer, Autumn, Winter, Spring "
      
    }

  return errors;

}
