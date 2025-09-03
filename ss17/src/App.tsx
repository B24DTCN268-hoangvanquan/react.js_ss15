import { useState } from 'react'
import Exercise01 from './Exercise01'
import Exercise02 from './Exercise02'
import ChangeColor from './Exercise03'
import Toggle from './Exercise04'
import Form from './Exercise05'
import CounText from './Exercise06'
import SelectCity from './Exercise07'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Exercise01/> */}
     {/* <Exercise02/> */}
     {/* <ChangeColor/> */}
     {/* <Toggle/> */}
     <Form/>
     {/* <CounText/> */}
     {/* <SelectCity/> */}

    </>
  )
}

export default App
