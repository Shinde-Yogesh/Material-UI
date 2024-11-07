import { useState } from 'react'
import './App.css'

import BasicButtons from './components/BasicButtons'
import BoxBasic from './components/BoxBasic'
import SimplePaper from './components/SimplePaper'
import MuiCard from './components/MuiCard'
import MuiAccordion from './components/AccordionUsage'
import AccordionUsage from './components/AccordionUsage'
import { MuiImageList } from './components/MuiImageList'
import CustomImageList from './components/CustomImageList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h2>Application is Up and Runing</h2>
     <BasicButtons/> */}
     {/* <BoxBasic/> */}
     {/* <SimplePaper /> */}
     {/* <MuiCard /> */}
    {/* <AccordionUsage /> */}
    {/* <MuiImageList/> */}
    <CustomImageList />
    </>
  )
}

export default App
