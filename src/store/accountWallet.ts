import {createSlice, PayloadAction} from '@reduxjs/toolkit'
export interface CounterState {
  address:string,
  isConnected:boolean
}

const initialState: CounterState = {
  address:"",
  isConnected:false
}

export const counterSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setWalletData: (state, action: PayloadAction<any>) => {
      state = {
        ...state,
        ...action.payload,
      };
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const {setWalletData} = counterSlice.actions

export default counterSlice.reducer
