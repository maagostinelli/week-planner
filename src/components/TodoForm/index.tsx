import { Check } from "phosphor-react";
import React, { useState } from "react";

import './style.scss'

export function TodoForm(props: any) { //check
    const [input, setInput] = useState('')

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor( Math.random()*10000 ),
            text: input,
        })
        setInput('')
    }

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Adicionar item" value={input} className="todo-input" onChange={handleTextChange}/>
            <button className="todo-button">
                <Check size={20} weight="bold"/>
            </button>
        </form>
    )
}