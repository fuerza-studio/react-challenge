import React from "react";

type inputType = {
    placeholder: string,
    type: string,
}

export const Input = ({placeholder, type}: inputType) => {
    
    return(
        <input className="input" type={type} placeholder={placeholder} />            
    );
}
