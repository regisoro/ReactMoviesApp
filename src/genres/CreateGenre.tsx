import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";


export default function CreateGenre(){
    const navigate = useNavigate();

    return(
        <>
            <div>Creer un nouveau genre de film</div> 
            <Button onClick={()=>{
                navigate('/genres')
            }}>enregistrer</Button>
        </>
    )
}