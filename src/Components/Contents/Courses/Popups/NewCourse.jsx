import "../../../../Styles/Contents/Courses/Popups/NewCourse.css"
import Dynamics from "../../../../Dynamics";
import { useEffect, useState } from "react";
import InputField from "../../../ReUsed/InputField";
import SubmitButton from "../../../ReUsed/SubmitButton";
import SelectList from "../../../ReUsed/SelectList";
import Api from "../../../../Api";

const NewCourse =()=> {
    const [categories, setCategories] = useState([''])
    const [subCategories, setSubCategories] = useState([''])

    const [selected, setSelected] = useState(0)

    const [enter, setEnter] = useState({ID:0, name:'', asigned:''})
    const inputs = [
        {
            name:'ID',
            placeholder:'Course ID'
        },

        {
            name:'name',
            placeholder:'Course name'
        },
    ]

    useEffect(() => {
        const dataSet = new Dynamics;
        setCategories(dataSet.fetch_Categories())
        setSubCategories(dataSet.fetch_Subcategories())
    }, []);

    const save_Data =async( event )=> {
        event.preventDefault();

        try {
            const request = new Api;
            const response = await request.add_Course(enter)

            console.log(response.data)
        }

        catch(error) {

        }
    }

    return (
        <div className="NewCourse py-5 px-5">
            <h6 className="mb-3">Add new course</h6>
            <form onSubmit={save_Data} className="New-Course-Form">

                <SelectList 
                    List={categories}
                    Audiance="category"
                    Enable={true}
                    select_Action={(e)=> setSelected(e.target.value)}
                />

                <SelectList 
                    List={subCategories}
                    Audiance="subcategory"
                    Enable={selected / selected}
                    filt={selected}
                    select_Action={(e)=> setEnter({...enter, asigned:e.target.value})}
                />

                {inputs.map((input) => (
                    <InputField 
                        Placeholder={input.placeholder}
                        Value={enter[input.name]}
                        Entered={(e)=> setEnter({...enter, [input.name]:e.target.value})}
                    />
                ))}

                <SubmitButton Title="Add Course"/>
            </form>
        </div>
    )
}

export default NewCourse;