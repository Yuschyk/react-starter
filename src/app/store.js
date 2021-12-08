import { createAction, createSlice } from '@reduxjs/toolkit';

import { STORE_NAME } from './consts';


export const initialState = {

};

const appStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    resetState: () => initialState,
  },

});

export const INIT = `${STORE_NAME}/init`;

export const appActions = {
  ...appStore.actions,
  init: createAction(INIT),
};

export const appReducer = appStore.reducer;

