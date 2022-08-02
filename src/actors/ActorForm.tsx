import { ErrorMessage, Form, Formik, FormikHelpers } from "formik"
import { Link } from "react-router-dom"
import * as Yup from 'yup'
import DateField from "../forms/DateField"
import ImageField from "../forms/ImageField"
import TextField from "../forms/TextField"
import Button from "../utils/Button"
import { actorCreationDTO } from "./actors.model"

 interface actorFormProps{
    model: actorCreationDTO,
    onSubmit(value:actorCreationDTO, action:FormikHelpers<actorCreationDTO>):void

 }
 const ActorForm = (props:actorFormProps)=>{
    return(
        <Formik initialValues={props.model} onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name: Yup.string().required('Veuillez renseigner ce champ svp'),
            dateOfBirth: Yup.date().nullable().required("Entrez une date svp")
        })}
        >
            {(FormikP)=>(
                <Form className="mb-3">
                    <TextField name="name" displayName="Nom de l'acteur" />
                    <DateField field="dateOfBirth" displayField="Date de naissance"/>
                    <ImageField displayField="image" field="picture" imageUrl={props.model.imageUrl} />
                    <Button type='submit' disabled={FormikP.isSubmitting} className="mt-3 btn btn-success">Créer</Button>
                    <Link className="btn btn-primary mt-3" to='/actors'>Annuler</Link>
                </Form>
            )}
        </Formik>
    )
}

export default ActorForm