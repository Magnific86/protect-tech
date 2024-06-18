import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../store/storeHooks"
import { getRecords } from "../store/reducers/recordReducer"
import { EachRecord } from "../components/EachRecord"
import { UnloginButton } from "../components/Unlogin"

export const RecordsPage = () => {
  const records = useAppSelector(state => state.record.records)

  const dispatch = useAppDispatch()
  console.log("records", records)

  useEffect(() => {
    dispatch(getRecords())
  }, [])

  return (
    <div>
      RecordsPage
      <UnloginButton/>
      {records.map(el => (
        <EachRecord key={el.id} {...el} />
      ))}
    </div>
  )
}
