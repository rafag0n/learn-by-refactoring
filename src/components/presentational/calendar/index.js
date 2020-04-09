import React from 'react'
import moment from 'moment'
import './style.scss'

let weekdays = ['sun','mon','tue','wed','thu','fri','sat']

function Calendar({month,year}){

    function CreateCalendar (month, year) {

        let pointer = 0;
        let day = 1;
        let date = moment(year+String(month).padStart(2, '0')+"01")
        let maxDays = date.daysInMonth()
        let startingDay = date.day() //which day of the week should we start laying 
        let row = []
        let calendarDays = []
        
        while (day <= maxDays) {

            if (pointer < startingDay) {
                calendarDays.push(<td className="calendar__empty" />)
                pointer += 1
            } else {
                calendarDays.push(<td className="calendar__date">day</td>)
                day += 1
                pointer += 1
            }

            if (pointer % 7 == 0 ) {
                calendarDays.push(<tr className="calendar__row">{row}</tr>)
                row = []
            }
        }

        return calendarDays
    }


    let calendarDays =  CreateCalendar(month, year)
    let date = moment(year+String(month).padStart(2, '0')+"01")
    let monthName = date.format('MMMM')

    
    return <table className="calendar">

        
        <thead>
            <tr><td colSpan={7} className='calendar__month'>{monthName}/{year}</td></tr>
            <tr>
                {weekdays.map((day)=><td className="calendar__day">{day}</td>)}
            </tr>
        </thead>

        <tbody>
            {calendarDays}
        </tbody>
    </table>



}


export default Calendar