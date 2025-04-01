import React from "react";

export function Chips({title}){
    return (
        <div className="flex items-center rounded-full bg-blue-200 px-3 py-1 text-xs font-medium leading-5">
            {title}
          </div>
    )
}