import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { useDispatch } from "react-redux";
import {setUser} from '../store/user/userSlice'
import { watchlistActions } from "../store/watchlist/watchlist.slice";

import 'firebase/firestore';

import {doc, getDoc, getFirestore } from "firebase/firestore";

export const SignInGoogle = () => {

    const dispatch = useDispatch();
    const db = getFirestore();

    const {setWatchlist} = watchlistActions

    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    const handleSignIn = async() => {
      try{
        // Sign in with Google
        const result = await signInWithPopup(auth, provider);
        const { user } = result;

        console.log(user);
        dispatch(setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
        }));

        //load data
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

       

        if (docSnap.exists()) {
          const newWatchlist = docSnap.data()
          dispatch(setWatchlist(newWatchlist.watchlist))

        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }

      }
      catch(error){
        console.error(error)
      }

    }

    

    return (
      <div>
          <button className="flex gap-2 text-xl p-3 bg-[#282828] border-none hover:bg-[#444444]" onClick={handleSignIn} >
            <img width={30} src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/>
            Sign in with Google
            
            </button>
      </div>
    )
  }
  