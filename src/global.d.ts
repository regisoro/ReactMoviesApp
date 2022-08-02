import { StringSchema } from "yup";

// inserer la methode "firstLetterUppercase" dans yup
declare module 'yup' {
    class StringSchema{
        firstLetterUppercase():this;
    }
}