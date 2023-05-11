import Dynamics from "../../../../Dynamics"
import { useEffect, useState } from "react";
import InputField from "../../../ReUsed/InputField";

import Api from "../../../../Api";

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
        <div className="NewSubCategory">
            <form onSubmit={save_Data}>
                <select value={enter.asigned} onChange={(e)=> setEnter({...enter, asigned:e.target.value})}>
                    <option value={0}>Select Category</option>
                    {categories.map((category) => (
                        <option value={category.ID}>{category.name}</option>
                    ))}
                </select>

                {inputs.map((input) => (  
                    <div className="Input-Field-Send">
                        <InputField
                            Placeholder={input.placeholder}
                            Value={enter[input.name]}
                            Entered={(e)=> setEnter({...enter, [input.name]:e.target.value})}
                        />
                    </div>
                ))}

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewSubCategory