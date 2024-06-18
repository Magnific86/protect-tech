import { configureStore } from "@reduxjs/toolkit"
import { pageReducer } from "./reducers/pageReducer"
import { authReducer } from "./reducers/authReducer"
import { recordReducer } from "./reducers/recordReducer"
// ...
const store = configureStore({
  reducer: {
    page: pageReducer,
    auth: authReducer,
    record: recordReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
