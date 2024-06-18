import { useCookies } from "react-cookie"
import { useAppDispatch } from "../store/storeHooks"
import { setPage } from "../store/reducers/pageReducer"

export const UnloginButton = () => {
  const [cookies, _, removeCookie] = useCookies(["token"])

  const dispatch = useAppDispatch()

  return (
    <div>
      <button
        onClick={() => {
          removeCookie("token")
          dispatch(setPage("start"))
        }}
      >
        Unlogin
      </button>
    </div>
  )
}
