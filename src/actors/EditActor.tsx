import ActorForm from "./ActorForm";

export default function EditActor(){
    return(
        <>
            <h3>Editer un acteur</h3>
            <ActorForm model={{name:'Gohou Michel',
             dateOfBirth: new Date('1954-06-12T00:00:00'),
            imageUrl:'https://www.studiocine.com/assets/images/a/gendarme-de-abobo_BCAToct20-92dfa3ba.jpg'
            }} onSubmit={
                (values)=>console.log(values)
            } />
        </>
    )
}