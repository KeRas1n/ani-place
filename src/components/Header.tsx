import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/aniplace-logo-2.png";
import { SearchBar } from "./SearchBar";


export default function Header() {
  return (
    <header className="header">
        <div className="wrapper grid grid-flow-col items-center pl-[2rem] pr-[2rem]">
         <Link to={'/'}> 
        <div className=" inline-grid">
            <img src={logo} width={200}/>
        </div></Link>  

        <nav className=" text-xl inline-grid text-center">
            <ul className="flex gap-8 justify-center">
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
  )
}
