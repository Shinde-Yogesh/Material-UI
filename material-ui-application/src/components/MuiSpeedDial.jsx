import React from 'react'
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from '@mui/material'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'

export const MuiSpeedDial = () => {
  return (
   <SpeedDial ariaLabel='Navigation speed dial'
    sx={{position: 'absolute', bottom: 16, right: 16}}
     icon={<SpeedDialIcon openIcon={<EditIcon />}/>}>
        <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' onClick={() => console.log('copy')}/>
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' onClick={() => console.log('print')}/>
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' onClick={() => console.log('share')}/>
   </SpeedDial>
  )
}
