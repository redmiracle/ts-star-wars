import {createContext} from "react";
import {SWcontextValue} from "./types";

export const SWContext = createContext<SWcontextValue>({
    page:'Home',
    changePage:(page:string)=>console.log(page),

});