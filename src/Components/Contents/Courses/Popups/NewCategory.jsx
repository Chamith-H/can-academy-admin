import "../../../../Styles/Contents/Courses/Popups/NewCategory.css"
import { useState } from "react"
import InputField from "../../../ReUsed/InputField"
import Api from "../../../../Api"
import SubmitButton from "../../../ReUsed/SubmitButton"

const NewCategory =()=> {
    const [enter, setEnter] = useState({ID:'', name:'', image:''})
    const inputs = [
        {
            name:'ID',
            placeholder:'Category ID'
        },

        {
            name:'name',
            placeholder:'Category name'
        },

        {
            name:'image',
            placeholder:'Image ID'
        },
    ]

    const save_Data =async( event )=> {
        event.preventDefault();

        try {
            const request = new Api;
            const response = await request.add_Category(enter)
            console.log(response.data)
        }

        catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="NewCategory py-5 px-5">
                <h6 className="mb-3">Add new category</h6>
                <form onSubmit={save_Data} className="New-Category-Form">
                    {inputs.map((input) => (
                        <InputField
                            Placeholder={input.placeholder}
                            Value={enter[input.name]}
                            Entered={(e)=> setEnter({...enter, [input.name]:e.target.value})}
                        />
                    ))}

                    <SubmitButton Title="Add Category"/>
                </form>
     
        </div>
    )
}

export default NewCategory