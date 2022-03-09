import React from "react";

type buttonType = {
    title: string
}

export const Button = ({title}: buttonType) => {
    
    return(
        <div className="button">{title}</div>
    );
}
