import { movieDTO } from "./movies.model";
import css from "./IndividualMovies.module.css"

export default function IndividualMovie (props:movieDTO){

    const buildLink = () => "/movie/" + props.id
    return (
        <div className={css.div}>
            <a href={buildLink()}>
                <img src={props.poster} alt="movie" />
            </a>
            <p>
                <a href={buildLink()}> {props.title} </a>
            </p>

        </div>
    )
}