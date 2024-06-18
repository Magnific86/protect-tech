import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { HOST } from "../../const"
import { RecordType } from "../../types"
import { axiosService } from "../axiosService"

export type InitialStateType = {
  records: RecordType[]
}

const initialState: InitialStateType = { records: [] }

const slice = createSlice({
  name: "record",
  initialState,

  reducers: {
    setRecords: (state, action: PayloadAction<RecordType[]>) => {
      state.records = action.payload
    },
  },
})

export const getRecords = createAsyncThunk(`record/get`, async (_, { rejectWithValue, dispatch }) => {
  try {
    const resp = await axiosService.get(
      `${HOST}/ru/data/v3/testmethods/docs/userdocs/get
`
    )

    dispatch(setRecords(resp.data.data))
    console.log("axios.get resp.data: ", resp.data.data)
    return resp.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const postRecord = createAsyncThunk(`table/get`, async (data: RecordType, { rejectWithValue }) => {
  const body = JSON.stringify(data)

  try {
    const resp = await axiosService.post(
      `${HOST}/ru/data/v3/testmethods/docs/userdocs/create
`,
      body
    )
    console.log("axios.post resp.data: ", resp.data)
    return resp.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const deleteRecord = createAsyncThunk(`table/get`, async (id: string, { rejectWithValue }) => {
  try {
    const resp = await axiosService.delete(
      `${HOST}/ru/data/v3/testmethods/docs/userdocs/delete/${id}

`
    )
    console.log("axios.delete resp.data: ", resp.data)
    return resp.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const recordReducer = slice.reducer
export const { setRecords } = slice.actions
