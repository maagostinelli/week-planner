import { CaretLeft, CaretRight } from 'phosphor-react'

import './style.scss'

export function Calendar() {
    const date = new Date
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
    const previousLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

    date.setDate(1)
    const firstDayIndex = date.getDay()
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay()

    return (
        <div className="calendar">
            <div className="month">
                <CaretLeft size={20} weight="bold" />
                <span>{months[date.getMonth()]}</span>
                <CaretRight size={20} weight="bold" />
            </div>
            <div className="week-days">
                <div>SEG</div>
                <div>TER</div>
                <div>QUA</div>
                <div>QUI</div>
                <div>SEX</div>
                <div>SAB</div>
                <div>DOM</div>
            </div>
            <div className="days"></div>
        </div>
    )
}