import { useState, useEffect } from "react"
import { landingPageDTO } from "./movies.model"
import MoviesList from "./MoviesList"


export default function  MoviesListMain (){

    const [movies, setMovies] = useState<landingPageDTO>({})

  useEffect(() => {
    const timerID = setTimeout(() => {
      setMovies({
        Dernieres: [{
          id: 1,
          title: "Le gendarme d'Abobo",
          poster: "https://www.studiocine.com/assets/images/a/gendarme-de-abobo_BCAToct20-92dfa3ba.jpg"
        },
        {
          id: 2,
          title: "Les Invisibles",
          poster: "https://www.francetvpro.fr/sites/default/files/inline-images/phototele-1095065.jpg"
        },
        {
          id: 3,
          title: "Cacao",
          poster: "https://ayanawebzine.com/wp-content/uploads/2020/06/5-bonnes-raisons-de-regarder-cacao-1-300x300.jpg"
        }
        ],

        Prochaines: [{
          id: 4,
          title: "Jusqu'au bout",
          poster: "https://lifemag-ci.com/wp-content/uploads/2019/07/jusquau-bout.jpg"
        },
        {
          id: 5,
          title: "Les larmes de sang",
          poster: "https://popcorn-plus.net/images/797A8BAD-5035-474D-B278-EC3FA20DCB9E.jpeg"
        }
        ]

      })
    }, 2000)

    return () => clearTimeout(timerID);
  })

    return(
        <>
            <h2>Dernières sorties</h2>
              <MoviesList movies={movies.Dernieres} />

              <h2>Prochaines sorties</h2>
              <MoviesList movies={movies.Prochaines} />
        </>
    )
}