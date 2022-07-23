import GenericList from "../utils/GenericList";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import css from "./MoviesList.module.css"

interface MoviesListprops {
    movies?: movieDTO[],
}

export default function MoviesList(props: MoviesListprops) {

        return <GenericList List={props.movies} >
            <div className={css.div}>

                {props.movies?.map(movie =>
                    <IndividualMovie {...movie} key={movie.id} />
                )}
            </div>
        </GenericList>

}