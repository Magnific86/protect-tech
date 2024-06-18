import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = { page: "start" }

const slice = createSlice({
  name: "page",
  initialState,

  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload
    },
  },
})

export const pageReducer = slice.reducer
export const setPage = slice.actions.setPage
