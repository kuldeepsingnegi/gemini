import { createContext } from "react";
import run from "../confid/gemini";

export const  Context = createContext();
const ContextProvider = (props)=>{
    const onSent =async (prompt)=>{
      const response = await run(prompt);
      return response;
    }
    const contextValue = { onSent }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export  default ContextProvider;