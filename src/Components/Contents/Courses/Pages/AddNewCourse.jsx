import "../../../../Styles/Contents/Courses/Pages/AddNewCourse.css"
import NewCategory from "../Popups/NewCategory";
import NewCourse from "../Popups/NewCourse";
import NewSubCategory from "../Popups/NewSubCategory";

const AddNewCourse =()=> {
    return (
        <div className="AllCourses pt-2">
            <div className="row g-2">
                <div className="col-6">
                    <div className="Form-Grid">
                        <NewCourse/>
                    </div>
                     
                </div>

                <div className="col-6">
                    <div className="Form-Grid">
                        <NewSubCategory/>
                    </div>
                    
                </div>

                <div className="col-6">
                    <div className="Form-Grid">
                        <NewCategory/>
                    </div>
                </div>

                <div className="col-6">
                    
                </div>
            </div>
        </div>
    )
}

export default AddNewCourse;