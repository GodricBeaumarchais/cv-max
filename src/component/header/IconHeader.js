import "./css/IconHeader.css"
import {RiMenuFill} from "react-icons/ri"
import {  IconContext } from 'react-icons/lib';






export default function IconHeader({onClick, className}){

    

    return(
        <IconContext.Provider value={{className: className}}>
            <button onClick={() => onClick()} className='icon-button'>
              < RiMenuFill />
            </button> 
          </IconContext.Provider>
    )
}