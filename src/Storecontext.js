import { createContext } from "react";

import { food_list } from "./assetss/assets";
export const Storecontext = createContext(null);
const Storecontextprovider = (props) =>
{
   
     const contextValue = {
     food_list
     }
     return(
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
     )
}
export default Storecontextprovider;