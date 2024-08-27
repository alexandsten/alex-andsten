import { Stack, Typography } from '@mui/material'
import React from 'react'

const ContactLinks = () => {
  return (
      <Stack height={'75vh'} width={'100vw'} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'black'}} gap={5}>
          <Typography sx={{ color: 'white', fontFamily: "Gotu", fontWeight: 'bold', fontSize: '20px' }}>
              Lets get in touch!
          </Typography>
          <h3>Contact me</h3>
          <a href="mailto:alex.andsten@hotmail.com">
              <Typography sx={{ color: 'white', fontFamily: "Gotu" }}>
                alex.andsten@hotmail.com
              </Typography>
            </a>
          <Typography sx={{ color: 'white', fontFamily: "Gotu" }}>
              076-260 82 27
          </Typography>
      
          {/* <h3>Linkedin och github</h3> */}
         
            <a href="https://linkedin.com/in/alex-andstén-47937116b" target='_blank'>
              <Typography sx={{ color: 'white', fontFamily: "Gotu" }}>
                  Linkedin
              </Typography>
            </a>
                
            <a href="https://github.com/alexandsten" target='_blank'>
              <Typography sx={{ color: 'white', fontFamily: "Gotu" }}>
              Github
              </Typography>
            </a>
      </Stack>
  )
}

export default ContactLinks
