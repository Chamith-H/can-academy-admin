import { Outlet } from "react-router-dom"
import "../../../Styles/Contents/Courses/CoursePage.css"
import Header from "../../Layout/Header"

const CoursePage =()=> {
   

    const options = [
        {
            name:'All Courses',
            link:'',
        },

        {
            name:'Add New',
            link:'addnew',
        },

        {
            name:'Filters',
            link:'filter',
        },
    ]

    return (
        <div className="CoursePage">
            <Header Options={options}/>

            <div className="Course-Routings py-2 px-3">
                <Outlet/>
            </div>
        </div>
    )
}

export default CoursePage