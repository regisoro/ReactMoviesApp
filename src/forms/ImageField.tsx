import { useFormikContext } from "formik"
import { readFile } from "fs/promises"
import { ChangeEvent, useState } from "react"

interface ImageFieldProps{
    displayField:string,
    imageUrl:string,
    field : string
}
ImageField.defaultProps={
    imageUrl:''
}

export default function ImageField(props:ImageFieldProps){
    const [imageBase64, setImageBase64] = useState('')
    const [imageUrl, setImageUrl] = useState(props.imageUrl)
    const {values} = useFormikContext<any>();

    const handleOnChange = (eventArgs : ChangeEvent<HTMLInputElement>)=>{
        if(eventArgs.currentTarget.files)
        {
            const file = eventArgs.currentTarget.files[0]
            if(file){
                toBase64(file)
                .then((baseRepresentation64:string)=> setImageBase64(baseRepresentation64))
                .catch((error)=>console.log(error))
            values[props.field] = file
            setImageUrl('')
            }
            else{
                setImageBase64('')

            }
        }
    }

    const toBase64 = (file: File) =>{
        return new Promise<string>((resolve, reject)=>{
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error)=> reject(error);
            })
        }
    
    return (
        <div>
            <label className="me-3"> {props.displayField} </label>
            <input type="file" accept=".jpeg, .jpg, .png" 
            onChange={handleOnChange}
            />
            {imageBase64?
               <div style={{marginTop:"10px"}}>
                <img style={{width:"450px"}} src= {imageBase64} alt="" />
               </div> : null
            }
            {imageUrl?
               <div style={{marginTop:"10px"}}>
                <img style={{width:"450px"}} src= {imageUrl} alt="" />
               </div> : null
            }
        </div>
    )
}