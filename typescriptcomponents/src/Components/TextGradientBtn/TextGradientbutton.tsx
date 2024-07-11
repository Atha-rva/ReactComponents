import React from 'react'
import { ZButton } from 'zitics-core-ui'
import { useStyles } from './TextGradientbuttoncss'
import '../Lato.css'

const TextGradientbutton = () => {
    const classes = useStyles();
  return (
      <ZButton className={classes.root}>
        <div className={classes.textBtn}>
             Zitics Button 
       </div>
    </ZButton>
  )
}

export default TextGradientbutton
