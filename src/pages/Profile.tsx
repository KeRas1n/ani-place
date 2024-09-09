import { useEffect } from "react";
import { Logout } from "../components/Logout";
import { SignInGoogle } from "../components/SignInGoogle"
import { Watchlist } from "../components/Watchlist"
import {useAuth} from '../hooks/useAuth'

export const Profile = () => {
  const {isAuth, email} = useAuth();

  console.log(email)

  return (
    <div className='wrapper root mt-4'>

      <h1 className="text-3xl">Profile</h1>
      
      <div>
      {isAuth ? <div>{email} <Logout/></div> : <SignInGoogle/>}
      </div>
      

      <Watchlist/>
    </div>
  )
}
