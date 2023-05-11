import { useState } from "react"
import InputField from "../../../ReUsed/InputField"
import Api from "../../../../Api"

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
            placeholder:'Image'
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
        <div className="NewCategory">
            <div className="New-Category-Form">
                <form onSubmit={save_Data}>
                    {inputs.map((input) => (
                        <div className="Input-Field-Send">
                            <InputField
                                Placeholder={input.placeholder}
                                Value={enter[input.name]}
                                Entered={(e)=> setEnter({...enter, [input.name]:e.target.value})}
                            />
                        </div>
                    ))}

                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default NewCategory