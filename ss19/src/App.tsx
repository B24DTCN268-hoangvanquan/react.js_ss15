import { useState } from 'react'
import './App.css'
import ShoppingCart from './Ex01'
import RenderCounter from './Ex03'
import RandomQuote from './Ex05'
import RegistrationForm from './Ex04'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoppingCart/>
      <RenderCounter/>
      <RandomQuote/>
      <RegistrationForm></RegistrationForm>
    </>
  )
}

export default App
