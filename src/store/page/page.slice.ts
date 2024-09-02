// store/slice/pageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageState {
  pages: {
    [key: string]: number; // Index pages by context name
  };
}

interface PageActionPayload {
  context: string;
  page?: number;
}

const initialState: PageState = {
  pages: {
    context1: 1, // Initial page for context1
    context2: 1, // Initial page for context2
  },
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<PageActionPayload>) => {
      const { context, page = 1 } = action.payload;
      state.pages[context] = page;
    },
    nextPage: (state, action: PayloadAction<{ context: string }>) => {
      const { context } = action.payload;
      state.pages[context] += 1;
    },
  },
});

export const pageReducer = pageSlice.reducer
export const pageActions = pageSlice.actions