import React,{useState} from 'react'
import DatePicker from "react-multi-date-picker"
const Datetimeselection = () => {
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState([today, tomorrow])
 
  return (
<div>
<DatePicker 
      multiple
      value={values} 
      onChange={setValues}
    />
    </div>
  )
}

export default Datetimeselection