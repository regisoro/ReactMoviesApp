
interface ButtonProps{
    children: React.ReactNode;
    onClick():void;
}

export default function Button(props:ButtonProps){
    return(
        <div onClick={props.onClick} className="btn btn-primary">{props.children} </div>
    )
}