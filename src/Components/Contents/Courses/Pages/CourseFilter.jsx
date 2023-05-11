import "../../../../Styles/Contents/Courses/Pages/CourseFilter.css"
import { useState, useEffect } from "react";
import Dynamics from "../../../../Dynamics";

const CourseFilter =()=> {

    const [categories, setCategories] = useState([''])

    useEffect(() => {
        const dataSet = new Dynamics;
        setCategories(dataSet.fetch_Categories())
    }, []);

    return (
        <div className="AllCourses">
            <div className="Data-List row g-3">
                {categories.map((category) => (
                    <div className="col-3">
                        <div className="Single-Category">
                            <img src={category.image} alt="" />
                            <h6>{category.name}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseFilter;