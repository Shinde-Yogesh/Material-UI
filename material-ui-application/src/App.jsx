// package imported

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
import { MuiNavbar } from './components/MuiNavbar'
import { MuiLinks } from './components/MuiLinks'
import { MuiBreadcrumbs } from './components/MuiBreadcrumbs'
import { MuiDrawer } from './components/MuiDrawer'
import { MuiSpeedDial } from './components/MuiSpeedDial'
import PlaygroundSpeedDial from './components/PlaygroundSpeedDial'
import SpeedDialTooltipOpen from './components/SpeedDialTooltipOpen'
import AnchorTemporaryDrawer from './components/AnchorTemporaryDrawer'
import SimpleBottomNavigation from './components/SimpleBottomNavigation'
import MuiAvatar from './components/MuiAvatar'
import { MuiList } from './components/MuiList'
import { MuiChip } from './components/MuiChip'
import { MuiTooltips } from './components/MuiTooltips'


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
    {/* <CustomImageList /> */}
    {/* <MuiNavbar /> */}
    {/* <MuiLinks /> */}
    {/* <MuiBreadcrumbs /> */}
    {/* <MuiDrawer /> */}
    {/* <MuiSpeedDial /> */}
    {/* <PlaygroundSpeedDial /> */}
    {/* <AnchorTemporaryDrawer /> */}
    {/* <SpeedDialTooltipOpen /> */}
    {/* <SimpleBottomNavigation /> */}
    {/* <MuiAvatar /> */}
    {/* <MuiList /> */}
    {/* <MuiChip /> */}
    <MuiTooltips />
    </>
  )
}

export default App
