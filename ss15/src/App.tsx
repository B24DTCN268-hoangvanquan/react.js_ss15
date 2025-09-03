import { useState } from 'react'
import Exercise01 from './bt01'
import Exercise02 from './bt02'
import Exercise05 from './bt05'
import DateForm from './bt03'
import Exercise04 from './bt04'
import ListPost from './bt06/ListPost'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Exercise01/>
      {/* <Exercise02/> */}
      {/* <DateForm/> */}
      {/* <Exercise04/> */}
      {/* <Exercise05/> */}
      {/* <ListPost/> */}
    </>
  )
}

export default App
