import { CaretLeft, CaretRight } from 'phosphor-react'

import './style.scss'

export function Calendar() {
    const date = new Date
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    function handleRenderCalendar() {    
        const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
        const previousLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    
        date.setDate(1)
        const firstDayIndex = date.getDay()
        const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay()
        
        let days = []
        const nextDays = 42 - (firstDayIndex + lastDay)
    
        for (let p = firstDayIndex; p >= 1; p--) {
            days.push(<div className="day prev-days">{previousLastDay - p + 1}</div>)
        }
    
        for (let p = 1; p <= lastDay ; p++) {
            if (p == new Date().getDate() && date.getMonth() == new Date().getMonth()) {
                days.push(<div className='day today'>{p}</div>)
            }
            else {
                days.push(<div className='day'>{p}</div>)
            }
        }
    
        for (let p = 1; p <= nextDays; p++) {
            days.push(<div className='day next-days'>{p}</div>)
        }
        return days
    }

    function renderPrevMonth() {
        date.setMonth(date.getMonth()-1)
    }

    return (
        <div className="calendar">
            <div className="month">
                <CaretLeft size={20} weight="bold" color="#33a9ac"/>
                <span>{months[date.getMonth()]}</span>
                <CaretRight size={20} weight="bold" color="#33a9ac"/>
            </div>
            <div className="week-days">
                <div>Dom</div>
                <div>Seg</div>
                <div>Ter</div>
                <div>Qua</div>
                <div>Qui</div>
                <div>Sex</div>
                <div>Sáb</div>
            </div>
            <div className="days">{handleRenderCalendar()}</div>
        </div>
    )
}