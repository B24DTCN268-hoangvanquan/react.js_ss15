import { useState } from 'react'
import SubjectList from './SubjectList'
import Exercise01 from './SubjectList'
import LoginStatus from './ LoginStatus'
import Exercise03 from './Exercise03'
import Exercise04 from './ClickCounter'
import Exercise05 from './Exercise05'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SubjectList/> */}
      {/* <LoginStatus/> */}
      {/* <Exercise03/> */}
      {/* <Exercise04/> */}
      <Exercise05/>

      
    </>
  )
}

export default App
