import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { CredentialPayload } from "../../types"
import { HOST } from "../../const"
import axios from "axios"

const initialState = { user: null }

const slice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    
  },
})

export const login = createAsyncThunk(`auth/login`, async (data: CredentialPayload, { rejectWithValue }) => {
  const body = JSON.stringify(data)

  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf8",
    },
  }

  try {
    const resp = await axios.post(`${HOST}/ru/data/v3/testmethods/docs/login`, body, config)
    console.log("resp.data", resp.data)
    return resp.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const authReducer = slice.reducer
export const {} = slice.actions
