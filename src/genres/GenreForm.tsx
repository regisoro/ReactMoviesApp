import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import * as Yup from "yup";
import { genreCreationDTO } from "./genres.model";

interface genreFormProps{
    model : genreCreationDTO
    onSubmit(value:genreCreationDTO, action:FormikHelpers<genreCreationDTO>): void
}

export default function GenreForm(props:genreFormProps){
    return(
    <Formik initialValues={props.model} onSubmit={props.onSubmit} validationSchema={Yup.object({
            name:Yup.string().required('Champ requis').firstLetterUppercase()
        })}
        >
            {(formikP) => (
                <Form>
                <TextField name="name" displayName="Nom"/>
                <Button disabled={formikP.isSubmitting} type="submit">Enregistrer</Button>
                <Link className="btn btn-secondary" to="/genres">Annuler</Link>
            </Form>
            )}

    </Formik>

    )
}