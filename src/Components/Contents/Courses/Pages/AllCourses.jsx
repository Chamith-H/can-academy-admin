import { useState, useEffect } from "react";
import Dynamics from "../../../../Dynamics";

const AllCourses =()=> {

    const [courses, setCourses] = useState([''])

    useEffect(() => {
        const dataset = new Dynamics;
        setCourses(dataset.fetch_Courses())
    }, []);

    return (
        <div className="AllCourses">
            <div className="row">
                {courses.map((course) => (
                    <div className="col-3">
                        <div className="Single-Course">
                            <h6>{course.name}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllCourses;