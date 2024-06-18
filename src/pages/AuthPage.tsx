import { ChangeEvent, FormEvent, useState } from "react"
import { useAppDispatch } from "../store/storeHooks"
import { login } from "../store/reducers/authReducer"
import { useCookies } from "react-cookie"
import { setPage } from "../store/reducers/pageReducer"

export const AuthPage = () => {
  const [cookies, setCookie] = useCookies(["token"])

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useAppDispatch()

  const onAuthHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("username, password", username, password)

    dispatch(login({ username, password }))
      .then(resp => {
        const token = resp.payload.data.token
        console.log("setCookie token: ", token)
        setCookie("token", token)
        dispatch(setPage("records"))
      })
      .catch(e => console.error(e))
  }

  const usernameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <form onSubmit={e => onAuthHandler(e)}>
      <label>
        username
        <input type="text" value={username} onChange={usernameHandler} />
      </label>
      <label>
        password
        <input type="password" value={password} onChange={passwordHandler} />
      </label>
      <button>login</button>
    </form>
  )
}
