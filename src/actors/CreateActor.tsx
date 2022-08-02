
import ActorForm from "./ActorForm";


export default function CreateActor(){
    return(
        <>
            <h3>Creer un nouvel acteur</h3>
            <ActorForm model={{name:'', dateOfBirth:undefined}} onSubmit={
                (values)=>console.log(values)
            } />
            
        </>
    )
}