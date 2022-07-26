import { Check, Trash } from "phosphor-react"
import { useState } from "react"

import './style.scss'

interface todoItemProps {
    id: string,
    text: string,
    status: 'active' | 'complete'
}

export function TodoItem(props: todoItemProps) {
  const [itemStatus, setItemStatus] = useState('active')
  
  function handleMarkAsComplete() {
    if (itemStatus == 'active') {
      setItemStatus('complete')
    }
    else {
      setItemStatus('complete')
    }
    console.log(itemStatus)
  }

    return(
        <div className="todo-item" id={props.id}>
          <div className={`item-wrapper ${itemStatus}`}>
            <div className='item-status' onClick={handleMarkAsComplete}>
                {props.status == 'active' ? "" : (<Check size={15} weight="bold"/>)}
            </div>
            <p className="item-text">{props.text}</p>
          </div>
            <div className="delete">
              <Trash size={18} weight="bold"/>
            </div>
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