import { Field, Form, Formik } from "formik"
import { genreDTO } from "../genres/genres.model"
import Button from "../utils/Button"

export default function FilterMovies(){

    const initialValues : filterMoviesForm = {
        title:"",
        genreId:0,
        upcommingReleases:false,
        inTheaters:false
    }
    const genres:genreDTO[] = [{id:1, name:'Action'}, {id:2, name:'Commédie'}]

    return(
        <>
          <h3>Filtrer les films</h3> 
            <Formik initialValues={initialValues} 
            onSubmit={(values)=>console.log(values)} >

                {(FormikP)=>(
                    <Form>
                        <div className="row gx-3 align-item-center mt-3">
                            {/* le "{...FormikP.getFieldProps("title")}" permet de recupérer les données
                             via la propriété "title" */}
                            <div className="col-auto">
                                <input type="text"  className="form-control" id="title" placeholder="Titre du film"
                                {...FormikP.getFieldProps("title")} />
                            </div>
                            <div className="col-auto">
                                <select {...FormikP.getFieldProps("genreId")} id="">
                                    <option value="0">---Choisis un genre---</option>
                                    {genres.map(genre =>
                                        <option key={genre.id} value={genre.id}> {genre.name} </option>
                                    )}
                                </select>
                            </div>
                            {/* les checkBox ont obligatoirement besoin de Field dans le formik */}
                            <div className="col-auto">
                                <Field name="upcommingReleases" className="form-check-input" type="checkbox" id="upcommingReleases" />
                                <label htmlFor="upcommingReleases" className="form-check-label">Dernières Sorties</label>
                            </div>
                            <div className="col-auto">
                                <Field name="inTheaters" className="form-check-input" type="checkbox" id="inTheaters" />
                                <label htmlFor="inTheaters" className="form-check-label">Au cinéma</label>
                            </div>
                            <div className="col-auto">
                                        <Button className="btn btn-primary"
                                        onClick={()=>FormikP.submitForm()}
                                        >Filtrer</Button>
                            </div>
                            <div className="col-auto">
                                        <Button className="btn btn-danger"
                                        onClick={()=>FormikP.setValues(initialValues)}
                                        >Vider</Button>
                            </div>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}

interface filterMoviesForm{
    title:string,
    genreId: number,
    upcommingReleases: boolean,
    inTheaters:boolean
}