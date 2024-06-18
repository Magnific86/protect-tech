import axios from "axios"
import { getCookies } from "../utils/getCookies"

const token = getCookies()

export const axiosService = axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf8",
    "x-auth": token,
  },
})
