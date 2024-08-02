import React from 'react'
import { useStyles } from './style'


const ZPresentTextBox = () => {
    const classes = useStyles();
  return (
    <div>
            <div className={classes.praposalDataSectionTextarea}>
        <span
          className={classes.praposalDataSectionPara}
          children="Ut fringilla odio sed pulvinar pharetra. Nulla vitae nulla auctor, lobortis felis at,
          sodales arcu. Praesent ac egestas est. Integer sit amet metus tincidunt, volutpat leo ac, 
          consequat leo. Sed mollis ex tortor, et porta odio lobortis at. Cras suscipit diam sed maximus 
          pulvinar. Donec malesuada velit non eros vulputate lobortis. Duis auctor accumsan odio lobortis 
          porta. Nam et libero malesuada, sollicitudin neque non, sagittis augue.Ut fringilla odio sed pulvinar pharetra. Nulla vitae nulla auctor, lobortis felis at,
          sodales arcu. Praesent ac egestas est. Integer sit amet metus tincidunt, volutpat leo ac, 
          consequat leo. Sed mollis ex tortor, et porta odio lobortis at. Cras suscipit diam sed maximus 
          pulvinar. Donec malesuada velit non eros vulputate lobortis. Duis auctor accumsan odio lobortis 
          porta. Nam et libero malesuada, sollicitudin neque non, sagittis augue."
        />
      </div>
    </div>
  )
}

export default ZPresentTextBox
