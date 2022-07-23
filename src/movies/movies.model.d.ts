 export  interface movieDTO{
    id:number;
    title: string;
    poster: string;
 } 

 export interface landingPageDTO{
    Dernieres?: movieDTO[];
    Prochaines?: movieDTO[]
 }