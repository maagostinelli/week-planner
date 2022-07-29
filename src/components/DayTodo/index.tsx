import { useState } from 'react'
import {Plus} from 'phosphor-react'

import { TodoForm } from '../TodoForm'
import { TodoItem } from '../TodoItem'

import './style.scss'

interface dayTodoProps {
    weekDay: string
}

export function DayTodo(props: dayTodoProps) {
    const [todos, setTodos] = useState([])

    /*
     const addTodo = (todo) => {
         if(!todo.text || /^\s*$/.test(todo.text)) {
             return
         }
         const newTodos = [todo, ...todos]
         setTodos(newTodos)
         console.log(...todos)
     }
     */

    return (
        <div className="day-todo">
            <div className="todo-header">
                <h2>
                    {props.weekDay}
                </h2>
                <button>
                    <Plus size={20} color="#33A9AC" weight="bold" />
                </button>
            </div>
            <TodoForm />
            <div className="todo-list">
                <TodoItem id='001' text='some task' status='active'/>
                <TodoItem id='002' text='some task 2' status='active'/>
                <TodoItem id='003' text='some item with some really long text' status='active'/>
                <TodoItem id='004' text='some other task' status='active'/>
            </div>
        </div>
    )
}