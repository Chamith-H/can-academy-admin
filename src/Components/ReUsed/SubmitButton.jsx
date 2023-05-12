import "../../Styles/ReUsed/SubmitButton.css"

const SubmitButton =( props )=> {
    return (
        <button type="submit" className="Submit-Button">{props.Title}</button>
    ) 
}

export default SubmitButton;