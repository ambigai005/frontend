import { CiHome } from "react-icons/ci";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { Link } from "react-router-dom"
function Menu() {
    return (
        <div className="min-h-screen sticky top-0 w-full">
            {/* LOGO */}
            <div className="flex items-center justify-evenly h-20">
                <img src="/logo.jpeg" alt="Logo" className="h-10" />
                <h1 className="text-md font-semibold lg:text-2xl text-blue-400">JS HEAVEN</h1>
            </div>
            {/* MENU */}
            <div className="flex flex-col w-full text-center">
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <CiHome className="inline-block text-2xl text-sky-950" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-semibold text-blue-500">Home</span>
                    </a>
                </div>
                <div>
                    <Link to="/list/teachers" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <RiGraduationCapLine className="inline-block text-xl text-sky-950" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-semibold text-blue-500">Teachers</span>
                    </Link>
                </div>
                <div>
                    <a href="/student" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <IoPeopleOutline className="inline-block text-xl text-sky-950" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm  font-semibold text-blue-500">Students</span>
                    </a>
                </div>
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <LuNotebookPen className="inline-block text-xl text-sky-950" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-semibold text-blue-500">Subjects</span>
                    </a>
                </div>
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <LuNotebookPen className="inline-block text-xl text-sky-950" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-semibold text-blue-500">Classes</span>
                    </a>
                </div>
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <LuNotebookPen className="inline-block text-xl text-sky-950" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-semibold text-blue-500">Lessons</span>
                    </a>
                </div>
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <LuNotebookPen className="inline-block text-xl text-sky-950" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-semibold text-blue-500">Exams</span>
                    </a>
                </div>
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                 
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-semibold text-blue-500">Assignments</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Menu