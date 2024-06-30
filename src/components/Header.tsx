import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/aniplace-logo-2.png";
import { IoIosHome } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";


export default function Header() {
  return (
    <>
    <header className="header">
        <div className="wrapper grid grid-flow-col items-center pl-[2rem] pr-[2rem]">
         <Link to={'/'}> 
        <div className=" inline-grid">
            <img src={logo} width={200}/>
        </div></Link>  

        <nav className=" text-xl inline-grid text-center">
            <ul className="flex gap-8 justify-center items-center">
                <NavLink to={'/'}  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-primary' : ""}><li>Home</li></NavLink>
                <NavLink to={'/catalog'}  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-primary' : ""}><li>Catalog</li></NavLink>  
                <NavLink to={'/top-anime'}  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-primary' : ""}><li>Top Anime</li></NavLink>  
            </ul>
        </nav>

        <div className="text-xl inline-grid justify-end">
          <div className="flex gap-3 items-center">

          <NavLink to={'/profile'} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? 'text-primary' : ""}><CgProfile size={25} /></NavLink>
          </div>
        </div>
        </div>
    </header>



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
