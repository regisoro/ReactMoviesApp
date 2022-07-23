import { ReactElement } from "react";
import Loading from "./Loading";

interface GenericListProps{
    List : any;
    loadingUI? : ReactElement;
    EmptyListUI? : ReactElement;
    children : ReactElement;
}

export default function GenericList(props: GenericListProps){

    if(!props.List){
        if(props.loadingUI){
        return props.loadingUI
        }
        return <Loading />
    } else if(props.List.length === 0){

        if(props.EmptyListUI){
            return props.EmptyListUI
            }
            return <>Aucun éléments disponibles</>
    }
    else{
        return props.children
    }
}
