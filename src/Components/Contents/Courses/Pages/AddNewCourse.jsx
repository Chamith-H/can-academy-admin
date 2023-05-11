import NewCategory from "../Popups/NewCategory";
import NewCourse from "../Popups/NewCourse";
import NewSubCategory from "../Popups/NewSubCategory";

const AddNewCourse =()=> {
    return (
        <div className="AllCourses">
            <NewCategory/>
            <NewSubCategory/>
            <NewCourse/>
        </div>
    )
}

export default AddNewCourse;