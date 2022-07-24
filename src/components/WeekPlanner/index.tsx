import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Calendar from '../Calendar'
import { DayTodo } from '../DayTodo'
import './style.scss'

export function WeekPlanner() {
    const date = new Date
    return (
        <div className="container">
            <div className="header">
                <div className="date">{
                    format(date, "EEEE' • 'd' de 'MMMM'", {
                        locale: ptBR,
                    })
                }</div>
            </div>
            <div className="planner-wrapper">
                <Calendar />
                <DayTodo />
                <DayTodo />
                <DayTodo />
                <DayTodo />
                <DayTodo />
                <DayTodo />
                <DayTodo />
            </div>
        </div>
    )
}