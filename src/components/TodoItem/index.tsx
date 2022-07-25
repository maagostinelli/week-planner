import { Check } from "phosphor-react"
import { useEffect, useRef } from "react"

import './style.scss'

interface todoItemProps {
    id: string,
    text: string,
    status: 'active' | 'completed'
}

export function TodoItem(props: todoItemProps) {
    function handleMarkAsRead() {
        
    }

    return(
        <div className="todo-item" id={props.id}>
            <div className={`item-status ${props.status == 'active' ? 'active' : 'completed'}`} onClick={handleMarkAsRead}>
                {props.status == 'active' ? "" : (<Check size={15} weight="bold"/>)}
            </div>
            <p className="item-text">{props.text}</p>
        </div>
    )
}

/*
 const handleClick = event => {
    if (event.currentTarget.classList.contains('my-class')) {
      console.log('Element contains class');
    } else {
      console.log('Element does NOT contain class');
    }
  }
 */