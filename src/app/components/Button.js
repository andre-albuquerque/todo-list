import React from "react"

export default function button(props) {

    return (
        <button className="bg-blue-800 h-full p-2 rounded-xl w-1/5 hover:bg-blue-600"
                type="submit" onClick={e => props.function(e)}
        >
            {props.texto}
        </button>
    )
}