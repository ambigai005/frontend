import { CiMenuKebab } from "react-icons/ci"
import BigCalendar from "../components/BigCalendar"
import EventCalendar from "../components/EventCalendar"

function Student() {
    return (
        <div className="min-h-[70vh] bg-slate-100 w-full flex gap-2">
            {/*Schedule  Calendar*/}
            <div className="bg-white lg:w-2/3 min-h-[100%]">
                {/* Title */}
                <div className="flex justify-between w-full px-8">
                    <h1 className="text-2xl text-blue-300">Schedule Classes</h1>
                    <CiMenuKebab className='rotate-90 text-4xl text-black' />
                </div>
                {/* Calendar */}
                <div className="w-full min-h-[100%]">
                    <BigCalendar />
                </div>
            </div>
            {/*  Events Calendar*/}
            <div className="bg-white lg:w-1/3 flex flex-col gap-2">
                <EventCalendar />
            </div>
        </div>
    )
}
export default Student