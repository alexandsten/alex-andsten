import { Stack, Typography } from '@mui/material'
import React from 'react'

const ContactLinks = () => {
  return (
      <Stack height={'75vh'} justifyContent={'center'} alignItems={'center'}>
        <h3>Kontakta mig</h3>
        <a href="mailto:alex.andsten@hotmail.com">alex.andsten@hotmail.com</a>
        <Typography>
            076-260 82 27
        </Typography>
        <Stack justifyContent={'center'} alignItems={'center'}>
          <h3>Linkedin och github</h3>
          <ul id='mainLinks'>
            <li onClick={() => openWindow("https://www.linkedin.com/in/alex-andstén-47937116b")}>Linkedin</li>
            <li onClick={() => openWindow("https://github.com/alexandsten")}>Github</li>
          </ul>
        </Stack>
      </Stack>
  )
}

export default ContactLinks
