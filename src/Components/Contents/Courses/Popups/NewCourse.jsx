import Dynamics from "../../../../Dynamics";
import { useEffect, useState } from "react";
import InputField from "../../../ReUsed/InputField";

const NewCourse =()=> {
    const [categories, setCategories] = useState([''])
    const [subCategories, setSubCategories] = useState([''])

    const [selected, setSelected] = useState(0)

    const [enter, setEnter] = useState({ID:'', name:'', asigned:''})
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

    const save_Data =( event )=> {

    }

    return (
        <div className="NewCourse">
            <form onSubmit={save_Data}>
                <select value={selected} onChange={(e)=> setSelected(e.target.value)}>
                    <option value={0}>Select Category</option>
                    {categories.map((category) => (
                        <option value={category.ID}>{category.name}</option>
                    ))}
                </select>

                <select disabled={!selected}>
                    <option value={0}>Select Subcategory</option>
                        {subCategories.map((subcategory) => (
                            <option className={selected == subcategory.asigned? "d-block":"d-none"}>{subcategory.name}</option>
                        ))}
                    </select>

                {inputs.map((input) => (
                    <InputField 
                        Placeholder={input.placeholder}
                        Value={enter[input.name]}
                        Entered={(e)=> setEnter({...enter, [input.name]:e.target.value})}
                    />
                ))}

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewCourse;