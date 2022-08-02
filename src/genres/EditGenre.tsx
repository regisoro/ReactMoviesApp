import { useParams } from "react-router-dom"
import GenreForm from "./GenreForm";

export default function EditGenre(){
    let {id} = useParams();
    return(
        <>
            Editer un genre de film
            <GenreForm model={{name:"Action"}} onSubmit={
                async (value)=>{
                    await new Promise (r => setTimeout(r, 1 ))
                    console.log(id)
                    console.log(value)
                }
            } />
        </>
    )
}