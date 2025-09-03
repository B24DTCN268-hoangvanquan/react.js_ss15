import { useState } from 'react'
import './App.css'
import Exercise01 from './ss01'
import Exercise02 from './ss02'
import Welcome from './ss03'
import PageTitle from './ss04'
import Timer from './ss05'
import Ex06 from './ss06'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Exercise01></Exercise01> */}
      {/* <Exercise02></Exercise02> */}
      {/* <Welcome></Welcome> */}
      {/* <PageTitle></PageTitle> */}
      {/* <Timer></Timer> */}
      <Ex06></Ex06>
    </>
  )
}

export default App
