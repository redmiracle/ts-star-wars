import {createContext} from "react";
import {SWcontextValue} from "./types";

export const SWContext = createContext<SWcontextValue>({
   headerName:"Luke Skywalker",
   setHeaderName: (name: string) => console.log(name),
})