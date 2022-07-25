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
                <DayTodo weekDay='Domingo' day={24}/>
                <DayTodo weekDay='Segunda-feira' day={25}/>
                <DayTodo weekDay='Terça-feira' day={26}/>
                <DayTodo weekDay='Quarta-feira' day={27}/>
                <DayTodo weekDay='Quinta-feira' day={28}/>
                <DayTodo weekDay='Sexta-feira' day={29}/>
                <DayTodo weekDay='Sábado' day={30}/>
            </div>
        </div>
    )
}