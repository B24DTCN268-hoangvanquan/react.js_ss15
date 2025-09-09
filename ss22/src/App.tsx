import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './component/bt01'
import Inputs from './component/bt02'
import Cart from './component/bt03'
import UserDropdown from './component/bt04'
import AlertGroup from './component/bt05'
import SpinnerGroup from './component/bt06'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Buttons></Buttons> */}
      {/* <Inputs></Inputs> */}
      {/* <Cart></Cart> */}
      {/* <UserDropdown></UserDropdown> */}
      {/* <AlertGroup></AlertGroup> */}
      <SpinnerGroup></SpinnerGroup>
    </>
  )
}

export default App
