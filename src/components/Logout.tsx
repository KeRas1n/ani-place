import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import {removeUser} from '../store/user/userSlice'


export const Logout = () => {

    const dispatch = useDispatch();
    const auth = getAuth();

    const handleSignIn = () => {
        dispatch(removeUser())
        auth.signOut()
    }
    

    return (
      <div>
          <button className="flex gap-2 text-xl p-3 bg-[#282828] border-none hover:bg-[#444444]" onClick={handleSignIn} >
          Log Out
            
            </button>
      </div>
    )
  }
  