import { Check, Trash } from "phosphor-react";
import React, { useState } from "react";

//interface todoFormProps {
//    onSubmit: {}
//}

export function todoForm() {
    const [input, setInput] = useState('')

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //props.onSubmit({
        //    id: Math.random()
        //})
    }

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Adicionar item" value={input} className="todo-input" onChange={handleTextChange}/>
            <button className="todo-button">
                <Check/>
            </button>
        </form>
    )
}