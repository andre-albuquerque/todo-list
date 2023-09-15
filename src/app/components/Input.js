import React from "react"

export default function input(props) {
    return (
        <input className='self-center text-black p-2 w-3/5 rounded-xl mr-4'
            placeholder={props.texto}
            value={props.value || "" } 
            onChange={(e) => props.function(e.target.value)}
            data-testid="your-id"
        />
    )
}