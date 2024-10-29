import { useState } from 'react'
import './App.css'

import BasicButtons from './components/BasicButtons'
import BoxBasic from './components/BoxBasic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h2>Application is Up and Runing</h2>
     <BasicButtons/> */}
     <BoxBasic/>
    </>
  )
}

export default App
