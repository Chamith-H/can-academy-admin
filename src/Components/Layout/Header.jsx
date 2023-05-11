import "../../Styles/Layout/Header.css"
import { useNavigate } from "react-router-dom"

const Header =( props )=> {
    const navigate = useNavigate()

    return (
        <div className="Header px-3">
            <div className="Tab-Options">
                <h6>{props.Title}</h6>
            </div>

            <div className="Admin-Handlers">
                <div className="Header-Options">
                    {props.Options.map((option) => (
                        <button onClick={()=> navigate(option.link)}>{option.name}</button>
                    ))}
                </div>

                <button className="Notification me-1"><i class="bi bi-bell-fill"></i></button>
                <button className="Account"><i class="bi bi-person-circle"></i></button>
            </div>
        </div>
    )
}

export default Header