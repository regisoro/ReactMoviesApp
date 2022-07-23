import CreateActor from "../actors/CreateActor";
import EditActor from "../actors/EditActor";
import IndexActors from "../actors/IndexActors";
import CreateGenre from "../genres/CreateGenre";
import EditGenre from "../genres/EditGenre";
import IndexGenres from "../genres/IndexGenres";
import CreateMovie from "../movies/CreateMovie";
import EditMovie from "../movies/EditMovie";
import FilterMovies from "../movies/FilterMovies";
import MoviesListMain from "../movies/MoviesListMain";
import CreateMovietheather from "../movietheathers/CreateMovieTheather";
import EditMovietheather from "../movietheathers/EditMovieTheather";
import IndexMovieTheathers from "../movietheathers/IndexMovieTheathers";

const routes = [
    {
        path:"/", 
        element: MoviesListMain,
        index:true
    },

    // Genres

    {
        path:"/genres", 
        element: IndexGenres,
        index: true
    },

    {
        path:"/genres/create", 
        element: CreateGenre
    },

    {
        path:"/genres/edit", 
        element: EditGenre
    },

    // Acteurs
    {
        path:"/actors", 
        element: IndexActors,
        index: true
    },

    {
        path:"/actors/create", 
        element: CreateActor
    },

    {
        path:"/actors/edit", 
        element: EditActor
    },

    //Salle de cinéma

    {
        path:"/movietheathers", 
        element: IndexMovieTheathers,
        index: true
    },

    {
        path:"/movietheathers/create", 
        element: CreateMovietheather
    },

    {
        path:"/movietheathers/edit", 
        element: EditMovietheather
    },

    // Films
    
    {
        path:"/movies/create", 
        element: CreateMovie
    },

    {
        path:"/movies/edit", 
        element: EditMovie
    },

    {
        path:"/movies/filter", 
        element: FilterMovies
    },

];

export default routes;