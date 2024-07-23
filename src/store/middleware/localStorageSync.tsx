export const localStorageSync = store => next => action => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('reduxState', JSON.stringify(state.watchlist.items));
    return result;
  }