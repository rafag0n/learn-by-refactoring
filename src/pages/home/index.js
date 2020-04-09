import React from 'react'
import Calendar from '../../components/presentational/calendar/original'
import RefactoredCalendar from '../../components/presentational/calendar/refactored'

function Home (props){

    return <React.Fragment>
        <Calendar month={1} year={2020} />
        <RefactoredCalendar month={1} year={2020} />
    </React.Fragment>

}

export default Home