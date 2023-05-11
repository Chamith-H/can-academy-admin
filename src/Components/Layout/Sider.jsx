import "../../Styles/Layout/Sider.css"
import Logo from "../../Assets/Images/Icons/Logo.png"
import { useNavigate } from "react-router-dom"

const Sider =( props )=> {

    const navigate = useNavigate();

    const tabs = [
        {
            title:'Dashboard',
            icon:'',
            navigate:'',
        },

        {
            title:'Courses',
            icon:'',
            navigate:'courses',
        },

        {
            title:'Careers',
            icon:'',
            navigate:'careers',
        },

        {
            title:'Instructors',
            icon:'',
            navigate:'instructors',
        },

        {
            title:'Students',
            icon:'',
            navigate:'students',
        },
    ]

    return (
        <div className="Sider">
            <div className="Brand ps-3">
                <img src={Logo} alt="" />
            </div>

            <div className="Main-Tabs">
                {tabs.map((tab) => (
                    <button className="py-3 ps-3" onClick={()=> navigate(tab.navigate)}>{tab.title}</button>
                ))}
            </div>
        </div>
    )
}

export default Sider;