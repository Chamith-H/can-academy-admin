import "../../Styles/Layout/Sider.css"
import Logo from "../../Assets/Images/Icons/Logo.png"

const Sider =( props )=> {

    const tabs = [
        {
            title:'Dashboard',
            icon:'',
            navigate:'/',

            submenus:[
                {
                    name:'',
                    link:'',
                    go:''
                }
            ]
        },

        {
            title:'Courses',
            icon:'',
            navigate:'/courses',

            submenus:[
                {
                    name:'All Courses',
                    link:'/courses',
                },

                {
                    name:'Add New',
                    link:'/courses/addnew',
                },

                {
                    name:'Filters',
                    link:'/courses/filter',
                },
            ]
        },

        {
            title:'Careers',
            icon:'',
            navigate:'/careers',
        },

        {
            title:'Instructors',
            icon:'',
            navigate:'/instructors',
        },

        {
            title:'Students',
            icon:'',
            navigate:'/students',
        },
    ]

    const handle_Navigate =( tabData )=> {
        
    }

    return (
        <div className="Sider">
            <div className="Brand ps-3">
                <img src={Logo} alt="" />
            </div>

            <div className="Main-Tabs">
                {tabs.map((tab) => (
                    <a href={tab.navigate}><button className="py-3 ps-3" onClick={()=> handle_Navigate(tab)}>{tab.title}</button></a>
                ))}
            </div>
        </div>
    )
}

export default Sider;