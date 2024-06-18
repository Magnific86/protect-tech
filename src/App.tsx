import { useCookies } from "react-cookie"
import { AUTH_PAGE, RECORDS_PAGE, START_PAGE } from "./const"
import { AuthPage } from "./pages/AuthPage"
import { RecordsPage } from "./pages/RecordsPage"
import { StartPage } from "./pages/StartPage"
import { useAppSelector } from "./store/storeHooks"
import { getCookies } from "./utils/getCookies"

export const App = () => {
  const page = useAppSelector(state => state.page.page)

  const [cookies, setCookie] = useCookies(["token"])

  // console.log("cookies", cookies)

  console.log(" getCookies()", getCookies())

  return (
    <div className="wrapper">
      {page === START_PAGE && <StartPage />}
      {page === AUTH_PAGE && <AuthPage />}
      {page === RECORDS_PAGE && <RecordsPage />}
    </div>
  )
}
