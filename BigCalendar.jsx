
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { calendarEvents } from "./Libraries/Calendar"

const localizer = momentLocalizer(moment)


const BigCalendar = (props) => {
    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ minHeight: "800px" }}
        // views={["day", "week"]}
        />
    )
}

export default BigCalendar
