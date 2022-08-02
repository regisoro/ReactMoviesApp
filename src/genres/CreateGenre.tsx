import GenreForm from "./GenreForm";


export default function CreateGenre(){

    return(
        <>
            <h3>Creer un nouveau genre de film</h3> 
            <GenreForm model={{name:""}} onSubmit={
                async (value)=>{
                    await new Promise (r => setTimeout(r, 1 ))
                    console.log(value)
                }
            } />
                    
        </>
    )
}