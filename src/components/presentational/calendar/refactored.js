import React from 'react'
import moment from 'moment'
import './style.scss'




function Calendar(props){

    let weekdays = ['sun','mon','tue','wed','thu','fri','sat']

    let getFirstDayOfMonth = () => {
        return moment(`${props.year}-${String(props.month).padStart(2,'0')}-01`)
    }

    let getEmptyCells = (date) =>{
        let firstDay = date.startOf().day()
        let cells = []
        let cellContent = <td></td>
        for (let index = 0; index <= firstDay; index++){
            cells.push(cellContent)
        }
        return cells
    }

    let getDateCells = (date) => {
        let cells = []
        let daysInMonth = date.daysInMonth()
        for (let date = 1; date <= daysInMonth; date ++) {
            let cellContent = <td className='calendar__date'>{date}</td>
            cells.push(cellContent)
        }
        return cells;
    }

    let setCalendarRows = (cells) => {
        let rowCells = []
        let rows = []
        cells.forEach((cell, pointer)=>{
            rowCells.push(cell)
            if (pointer == cells.length - 1 | pointer % 7 == 0){
                let row = <tr>{rowCells}</tr>
                rows.push(row)
                rowCells = []
            }
        })
        return rows
    }

    let createBody = () =>{
        const date = getFirstDayOfMonth()
        const emptyCells = getEmptyCells(date)
        const dateCells = getDateCells(date)
        const cells = [...emptyCells, ...dateCells]
        const rows = setCalendarRows(cells)
        return <tbody>
            {rows}
        </tbody>    
    }

    let createHead = () => {
        const date = getFirstDayOfMonth()
        const monthName = date.format('MMMM')
        const monthTag = `${monthName}/${year}`
        const dayNamesRow = weekdays.map((day)=>getDayNode(day))
        return <thead>
            <tr>
                <td colSpan={7} className='calendar__month'>{monthTag}</td>
            </tr>
            <tr>
                {dayNamesRow}
            </tr>
        </thead>
    }


    let getDayNode = (day) => {
        return <td className="calendar__day">{day}</td>
    }
    
    
    let head = createHead()
    let body = createBody()

   
   return <table className="calendar">
        {head}
        {body}
    </table>

}


export default Calendar