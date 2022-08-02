import * as Yup from 'yup';

// on ajoute une methode de validation à yup
function configureValidations(){
    Yup.addMethod(Yup.string, "firstLetterUppercase", function(){
        return this.test('first-letter-uppercase', 
        'La première lettre doit être en majuscule.', function(value){
            // s'il ya une valeur entrée, on reccupère la première lettre puis on verifie qu'elle est en majuscule 
            if(value && value.length > 0){
                const firstLetter = value.substring(0, 1)
                return firstLetter === firstLetter.toUpperCase();
            }
            return true;
        } )
    })
}

export default configureValidations;