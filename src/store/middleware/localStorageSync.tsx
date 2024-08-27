import { Middleware } from '@reduxjs/toolkit';
import { TypeRootState } from '../store'; // Adjust the import to your actual store file

const localStorageSync: Middleware<{}, TypeRootState> = store => next => action => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem('reduxState', JSON.stringify(state.watchlist.items));
  return result;
};

export default localStorageSync;
