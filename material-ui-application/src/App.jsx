import { useState } from 'react'
import './App.css'

import BasicButtons from './components/BasicButtons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>Application is Up and Runing</h2>
     <BasicButtons/>
    </>
  )
}

export default App
