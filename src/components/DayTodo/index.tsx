import {Plus} from 'phosphor-react'

import './style.scss'

interface dayTodoProps {
    weekDay: string
    day: number
}

export function DayTodo(props: dayTodoProps) {
    return (
        <div className="day-todo">
            <div className="todo-header">
                <h2>
                    {props.weekDay}, {props.day}
                </h2>
                <button>
                    <Plus size={20} color="#33A9AC" weight="bold" />
                </button>
            </div>
            <div className="todo-list">
                
            </div>
        </div>
    )
}