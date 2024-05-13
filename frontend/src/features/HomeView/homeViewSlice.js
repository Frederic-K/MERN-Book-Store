import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  homeView: 'table',
}

export const homeViewSlice = createSlice({
  name: 'homeView',
  initialState,
  reducers: {
    // State management from actions
    setHomeView: (state, action) => {
      state.homeView = action.payload
    },
    clearHomeView: () => {
      return {
        homeView: '',
      }
    },
  },
})
// Actions to manage state
export const { setHomeView, clearHomeView } = homeViewSlice.actions
// Grab states
export const homeViewSelector = (state) => state.homeView

export default homeViewSlice.reducer
