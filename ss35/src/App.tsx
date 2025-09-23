import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Bt02 from './components/bt02'
import Bt03 from './components/bt03'
import Bt04 from './components/bt04'
import Bt05 from './components/bt05'
import Bt06 from './components/bt06'
import Counter from './components/bt01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Counter></Counter> */}
     {/* <Bt02></Bt02> */}
     {/* <Bt03></Bt03> */}
     {/* <Bt04></Bt04> */}
     {/* <Bt05></Bt05> */}
     <Bt06></Bt06>

    </>
  )
}

export default App
