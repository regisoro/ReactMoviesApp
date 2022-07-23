import { Link } from "react-router-dom";

export default function IndexMovieTheathers(){
    return(
        <>
            <div>Salles de Cinéma</div>
            <Link className="btn btn-success" to="/movietheathers/create">Ajouter autre salle</Link>
        </>
    )
}