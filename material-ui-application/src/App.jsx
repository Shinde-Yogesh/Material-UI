import { useState } from 'react'
import './App.css'

import BasicButtons from './components/BasicButtons'
import BoxBasic from './components/BoxBasic'
import SimplePaper from './components/SimplePaper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h2>Application is Up and Runing</h2>
     <BasicButtons/> */}
     <BoxBasic/>
     {/* <SimplePaper /> */}
    </>
  )
}

export default App
