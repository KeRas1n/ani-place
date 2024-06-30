import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";


export default function BottomNav() {
  return (
    <>

    <div className="bottomPanel p-3 shadow-lg">
    <nav className="text-xl ">
            <ul className="flex gap-8 justify-center items-center">
                <NavLink to={'/'}  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-primary' : ""}><li><IoIosHome size={25}/></li></NavLink>
                <NavLink to={'/catalog'}  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-primary' : ""}><li><GrCatalog size={25}/></li></NavLink>  
                <NavLink to={'/top-anime'}  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-primary' : ""}><li><FaFireAlt size={25}/></li></NavLink>  
                <NavLink to={'/profile'} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? 'text-primary' : ""}><CgProfile size={25} /></NavLink>
            </ul>
        </nav>
    </div>

    </>
  )
}
