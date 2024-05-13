import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modeTheme: 'light',
}

export const modeThemeSlice = createSlice({
  name: 'modeTheme',
  initialState,
  reducers: {
    // State management from actions
    addModeTheme: (state, action) => {
      state.modeTheme = action.payload
    },
    clearModeTheme: () => {
      return {
        modeTheme: '',
      }
    },
  },
})
// Actions to manage state
export const { addModeTheme, clearModeTheme } = modeThemeSlice.actions
// Grab states
export const modeThemeSelector = (state) => state.modeTheme

export default modeThemeSlice.reducer
