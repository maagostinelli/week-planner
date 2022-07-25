import { Check } from "phosphor-react"

import './style.scss'

interface todoItemProps {
    id: string,
    text: string,
    status: 'active' | 'completed'
}

export function TodoItem(props: todoItemProps) {
    return(
        <div className="todo-item" id={props.id}>
            <div className={`item-status ${props.status == 'active' ? 'active' : 'completed'}`}>
                {props.status == 'active' ? "" : (<Check size={15} weight="bold"/>)}
            </div>
            <p className="item-text">{props.text}</p>
        </div>
    )
}

/*
<div class="todo-item">
        <div class="check">
            <div data-id="${item.id}" class="check-mark ${item.status == "complete" ? "checked" : ""}">
                <img src="./assets/icon-check.svg" alt="">
            </div>
        </div>
    <div class="todo-text ${item.status == "complete" ? "checked" : ""}">${item.text}</div>
</div>
 */