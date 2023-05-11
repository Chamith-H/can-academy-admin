import "../../../../Styles/Contents/Courses/Pages/CourseFilter.css"
import { useState, useEffect } from "react";
import Api from "../../../../Api";

const CourseFilter =()=> {

    const [categories, setCategories] = useState([''])

    const get_Categories =async()=> {
        try {
            const request = new Api;
            const response = await request.get_Categories();
            setCategories(response.data)
            
        }

        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        get_Categories()
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