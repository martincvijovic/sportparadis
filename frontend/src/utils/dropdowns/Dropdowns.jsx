import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export const Dropdown = ({ columns }) =>{
    return(
        <div className="bg-green-400 fixed top-[5.5rem] w-full left-0 flex gap-32 flex-wrap px-20 py-10 border-t-[1px] border-[#c5c5c5]">
            {columns.map((column, index) =>(
                <div key={index} className="flex flex-col gap-2">
                    <p className="font-[500] text-[1.1rem]">{column.heading}</p>
                    <ul className="flex flex-col gap-1">
                        {column.links.map((link, index) =>(
                            <li key={index}><Link to={link.url}>{link.text}</Link></li>
                        ))}
                    </ul>
                </div>   
            ))}
            
        </div>
    )
}



Dropdown.propTypes = {
    columns: PropTypes.node.isRequired
}