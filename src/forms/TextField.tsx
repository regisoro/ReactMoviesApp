import { ErrorMessage, Field } from "formik"

interface textFieldProps{
    name: string;
    displayName: string;
}
 
 const TextField = (props:textFieldProps) =>{
    return(
        <div className="form-group mb-3">
            <label htmlFor={props.name}>{props.displayName}</label>
            <Field name={props.name} id={props.name} className="form-control" />
           <span  className="text-danger"><ErrorMessage name={props.name} /></span> 
        </div>
    )
}

export default TextField