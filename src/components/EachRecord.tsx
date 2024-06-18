import { FC } from "react"
import { RecordType } from "../types"

export const EachRecord: FC<RecordType> = ({
  id,
  companySigDate,
  companySignatureName,
  documentName,
  documentStatus,
  documentType,
  employeeNumber,
  employeeSigDate,
  employeeSignatureName,
}) => {


  

  return (
    <div>
      <p>id: {id}</p>
      <p>companySigDate: {companySigDate}</p>
      <p>companySignatureName: {companySignatureName}</p>
      <p>documentName: {documentName}</p>
      <p>documentStatus: {documentStatus}</p>
      <p>documentType: {documentType}</p>
      <p>employeeNumber: {employeeNumber}</p>
      <p>employeeSigDate: {employeeSigDate}</p>
      <p>employeeSignatureName: {employeeSignatureName}</p>
    </div>
  )
}
