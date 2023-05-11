import "../../Styles/Layout/Routings.css"

import { Routes, BrowserRouter as Router, Route} from "react-router-dom";
import AllCourses from "../Contents/Courses/Pages/AllCourses";
import AddNewCourse from "../Contents/Courses/Pages/AddNewCourse";
import CourseFilter from "../Contents/Courses/Pages/CourseFilter";
import Dashboard from "../Contents/Dashboard/Dashboard";
import CoursePage from "../Contents/Courses/CoursePage";
import Home from "./Home";


const Routings =()=> {
    return (
        <div className="Routings">
            <Router>
                <Routes>
                    <Route path="/" element={ <Home/> }>
                        <Route path="" element={ <Dashboard/> }></Route>

                        <Route path="courses" element={ <CoursePage/> }>
                            <Route path="" element={ <AllCourses/> }></Route>
                            <Route path="addnew" element={ <AddNewCourse/> }></Route>
                            <Route path="filter" element={ <CourseFilter/> }></Route>
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Routings;