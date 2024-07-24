import { Stack, Typography } from '@mui/material'
import React from 'react'

const ContactLinks = () => {
  return (
      <Stack id='contact'>
        <h3>Kontakta mig</h3>
        <a href="mailto:alex.andsten@hotmail.com">alex.andsten@hotmail.com</a>
        <Typography>
            076-260 82 27
        </Typography>
      </Stack>
  )
}

export default ContactLinks
