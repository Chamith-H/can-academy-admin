import "../../Styles/ReUsed/InputField.css"

const InputField =( props )=> {
    return (
        <div className="InputField">
            <input 
                type="text" 
                placeholder={props.Placeholder}
                onChange={(e)=> props.Entered(e)}
            />
        </div>
    )
}

export default InputField