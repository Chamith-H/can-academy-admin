import "../../Styles/ReUsed/SelectList.css"

const SelectList =( props )=> {
    return (
        <div className="SelectList">
            <select className={props.Enable?"Active-Selecter":"Inactive-Selecter"} value={props.Asign} onChange={(e)=> props.select_Action(e)} disabled={!props.Enable}>
                <option value={0} className="Select-Guide">Select {props.Audiance}</option>

                {props.List.map((item) => (
                    <option className={props.filt == item.asigned? "d-block":"d-none"} value={item.ID}>{item.name}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectList
