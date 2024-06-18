import { useCookies } from "react-cookie"
import { setPage } from "../store/reducers/pageReducer"
import { useAppDispatch } from "../store/storeHooks"
import { UnloginButton } from "../components/Unlogin"

export const StartPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"])

  const token = cookies?.token
  console.log("token", token)
  const isAuth = !!token

  const dispatch = useAppDispatch()

  return (
    <div>
      Добро пожаловать!
      {!isAuth && (
        <div className="notauth-block">
          Вы не авторизованы
          <button onClick={() => dispatch(setPage("auth"))}>авторизоваться</button>
        </div>
      )}
      {isAuth && (
        <div className="auth-block">
          Вы авторизованы
          <UnloginButton />
          <button onClick={() => dispatch(setPage("records"))}>перейти к записям</button>
        </div>
      )}
    </div>
  )
}
