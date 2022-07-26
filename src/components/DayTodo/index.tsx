import {Plus} from 'phosphor-react'
import { TodoItem } from '../TodoItem'

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
                <TodoItem id='001' text='some task' status='active'/>
                <TodoItem id='002' text='some task 2' status='complete'/>
                <TodoItem id='003' text='some item with some really long text' status='complete'/>
                <TodoItem id='004' text='some other task' status='active'/>
            </div>
        </div>
    )
}