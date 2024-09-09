import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/aniplace-logo-2.png";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user/userSlice";


export default function Header() {
  const dispatch = useDispatch();
  const auth = getAuth();
  const [photo, setPhoto] = useState('')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, dispatch the user info to Redux
            dispatch(setUser({
                email: user.email,
                token: user.refreshToken,
                id: user.uid,
            }));

            if(user.photoURL){
              setPhoto(user.photoURL);
            }
        } else {
            // User is signed out, clear the user from Redux
            //dispatch(clearUser());
        }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
}, [auth, dispatch]);



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
                  isPending ? "pending" : isActive ? 'text-primary' : ""}> 
                  {photo 
                  ? 
                  <img src={photo} width={30} className="rounded-full"/>
                  :
                  <CgProfile size={30} />
                  }
                  </NavLink>
          </div>
        </div>
        </div>
    </header>

    </>
  )
}
