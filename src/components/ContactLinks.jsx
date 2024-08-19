import { Stack, Typography } from '@mui/material'
import React from 'react'

const ContactLinks = () => {
  return (
      <Stack height={'75vh'} width={'100vw'} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'black'}}>
          <h3>Kontakta mig</h3>
          <a href="mailto:alex.andsten@hotmail.com">
              <Typography sx={{ color: 'white', fontFamily: "Gotu" }}>
                alex.andsten@hotmail.com
              </Typography>
            </a>
          <Typography sx={{ color: 'white', fontFamily: "Gotu" }}>
              076-260 82 27
          </Typography>
        <Stack justifyContent={'center'} alignItems={'center'}>
          <h3>Linkedin och github</h3>
          <ul id='mainLinks'>
            <li onClick={() => openWindow("https://www.linkedin.com/in/alex-andstén-47937116b")}>
              <Typography sx={{ color: 'white', fontFamily: "Gotu" }}>
                Linkedin
              </Typography>
            </li>
            <li onClick={() => openWindow("https://github.com/alexandsten")}>
              <Typography sx={{ color: 'white', fontFamily: "Gotu" }}>
                Github
              </Typography>
            </li>
          </ul>
        </Stack>
      </Stack>
  )
}

export default ContactLinks
