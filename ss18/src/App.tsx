import { useState } from 'react'
import Increase from './Exercise01'
import InputText from './Exercise05'
import InputRadio from './Exercise06'
import UserList from './Exercise02'
import LoginForm from './Exercise03'
import ColorPicker from './Exercise04'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Increase/> */}
     {/* <InputText/> */}
     {/* <InputRadio/> */}
     {/* <UserList/> */}
     {/* <LoginForm></LoginForm> */}
     <ColorPicker></ColorPicker>
    </>
  )
}

export default App
