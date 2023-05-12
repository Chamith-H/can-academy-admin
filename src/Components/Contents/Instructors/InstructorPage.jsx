import { Outlet } from "react-router-dom"
import "../../../Styles/Contents/Instructors/InstructorPage.css"
import Header from "../../Layout/Header"

const InstructorPage =()=> {
   

    const options = [
        {
            name:'Approved',
            link:'',
        },

        {
            name:'Active',
            link:'active',
        },

        {
            name:'Idle',
            link:'idle',
        },

        {
            name:'Requests',
            link:'requests',
        },
    ]

    return (
        <div className="InstructorPage">
            <Header Options={options} Title="Instructors"/>

            <div className="Instructor-Routings py-2 px-3">
                <Outlet/>
            </div>
        </div>
    )
}

export default InstructorPage;
