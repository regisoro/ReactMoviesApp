import { Link } from "react-router-dom";

export default function IndexActors(){
    return(
        <>
            <div>Acteurs</div>
            <Link className="btn btn-success" to="/actors/create">Ajouter acteurs</Link>
        </>
    )
}