import { Middleware } from '@reduxjs/toolkit';
import { TypeRootState } from '../store'; // Adjust the import to your actual store file
import {watchlistActions} from '../watchlist/watchlist.slice'
import { getFirestore, doc, setDoc } from "firebase/firestore";

const updateWatchlist: Middleware<{}, TypeRootState> = store => next => async action => {
  const {addItem, removeItem, changeListTag} = watchlistActions


  const result = next(action);
  const state = store.getState();
  const uid = state.user?.id;


  //if watchlist was modified
  if(addItem.match(action) || removeItem.match(action)|| changeListTag.match(action)) {
    // logic here
    localStorage.setItem('reduxState', JSON.stringify(state.watchlist.items));

    //save to firestore
    if (uid) {
      const db = getFirestore();
  
      const userDoc = doc(db, "users", uid);
      await setDoc(userDoc, {

        watchlist: state.watchlist.items,
      });
    }
  
  }
  return result;
};

export default updateWatchlist;
