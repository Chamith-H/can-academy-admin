import "../../../../Styles/Contents/Courses/Popups/NewSubCategory.css"
import Dynamics from "../../../../Dynamics"
import { useEffect, useState } from "react";
import InputField from "../../../ReUsed/InputField";

import Api from "../../../../Api";
import SubmitButton from "../../../ReUsed/SubmitButton";
import SelectList from "../../../ReUsed/SelectList";

const NewSubCategory =()=> {
    const [categories, setCategories] = useState([''])

    const [enter, setEnter] = useState({ID:'', name:'', asigned:''})
    const inputs = [
        {
            name:'ID',
            placeholder:'Sub Category ID'
        },

        {
            name:'name',
            placeholder:'Sub Category name'
        },
    ]

    useEffect(() => {
        const dataSet = new Dynamics;
        setCategories(dataSet.fetch_Categories())
    }, []);

    const save_Data =async( event )=> {
        event.preventDefault();
        
        try {
            const request = new Api;
            const response = await request.add_SubCategory(enter)
            console.log(response.data)
        }

        catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="NewSubCategory py-5 px-5">
            <h6 className="mb-3">Add new subcategory</h6>
            <form onSubmit={save_Data} className="New-Subcategory-Form">
                
                <SelectList 
                    List={categories}
                    Audiance="category"
                    Enable={true}
                    select_Action={(e)=> setEnter({...enter, asigned:e.target.value})}
                />

                {inputs.map((input) => (  
                    <InputField
                        Placeholder={input.placeholder}
                        Value={enter[input.name]}
                        Entered={(e)=> setEnter({...enter, [input.name]:e.target.value})}
                    />
                ))}

                <SubmitButton Title="Add Subcategory"/>
            </form>
        </div>
    )
}

export default NewSubCategory