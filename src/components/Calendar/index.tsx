import { CaretLeft, CaretRight } from 'phosphor-react'
import React from 'react'
import { render } from 'react-dom'

import './style.scss'

interface IState {
    currentDate: Date,
    months: string[],
    days: JSX.Element[]
}

interface IProps {}

export default class Calendar extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props)
        this.state = {
            currentDate: new Date(),
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            days: []
        }
    }

    componentDidMount(): void{
        this.setState({days: this.handleRenderCalendar()})
    }

    handleRenderCalendar(date: Date = this.state.currentDate): JSX.Element[]{
        const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
        const previousLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    
        date.setDate(1)
        const firstDayIndex = date.getDay()
        const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay()
        
        let days: JSX.Element[] = []
        const nextDays = 42 - (firstDayIndex + lastDay)
    
        for (let p = firstDayIndex; p >= 1; p--) {
            days.push(<div className="day prev-days" key={`prev${previousLastDay - p + 1}`}>{previousLastDay - p + 1}</div>)
        }
    
        for (let p = 1; p <= lastDay ; p++) {
            if (p == new Date().getDate() && date.getMonth() == new Date().getMonth()) {
                days.push(<div className='day today' key={`current${p}`}>{p}</div>)
            }
            else {
                days.push(<div className='day' key={`current${p}`}>{p}</div>)
            }
        }
    
        for (let p = 1; p <= nextDays; p++) {
            days.push(<div className='day next-days' key={`next${p}`}>{p}</div>)
        }
        
        return days
    }

    previousMonth = (): void => {
        this.setState(previousState => {
            let currentDate = new Date(
                previousState.currentDate.getFullYear(),
                previousState.currentDate.getMonth() - 1
              )
            return {
              currentDate: currentDate,
              days: this.handleRenderCalendar(currentDate),
            };
        })
    }

    nextMonth = (): void => {
        console.log('awepa')
        this.setState(previousState => {
            let currentDate = new Date(
                previousState.currentDate.getFullYear(),
                previousState.currentDate.getMonth() + 1
              )
              console.log(currentDate.getFullYear())
            return {
              currentDate: currentDate,
              days: this.handleRenderCalendar(currentDate),
            };
        })
    }

    render(): React.ReactNode{
        return (
            <div className="calendar">
            <div className="month">
                <CaretLeft size={20} weight="bold" color="#33a9ac" onClick={this.previousMonth} className="navigate"/>
                <span>{this.state.months[this.state.currentDate.getMonth()]}</span>
                <CaretRight size={20} weight="bold" color="#33a9ac" onClick = {this.nextMonth} className="navigate"/>
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
            <div className="days">{this.state.days}</div>
        </div>
        )
    }
}