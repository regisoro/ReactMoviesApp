import { Link, useNavigate } from "react-router-dom";


export default function IndexGenres(){

    return(
        <>
            <div>Genres</div>
            <Link className="btn btn-success" to="/genres/create">Ajouter genre</Link>
        </>
    )
}