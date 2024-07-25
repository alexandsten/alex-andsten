import { Stack } from '@mui/material'
import React from 'react'

const MyProjects = () => {
  return (
      <Stack height={'75vh'} width={'99vw'} sx={{ backgroundColor: 'pink'}}
        justifyContent={'center'} alignItems={'center'}
      >
        <h2>Mina projekt</h2>
        <a href="https://storied-sundae-b1d64e.netlify.app/" target='_blank'>Film och spel API</a> <br />
        <a href="https://dapper-longma-6212ba.netlify.app/" target='_blank'>Film shop</a> <br />
        <a href="https://frosty-ramanujan-ec2af0.netlify.app/" target='_blank'>Javascript spel</a> <br />
        <a href="https://gleeful-alfajores-115146.netlify.app/" target='_blank'>Hänga gubbe</a> <br />
        <a href="https://super-medovik-6d5ee3.netlify.app/" target='_blank'>MMA AI projekt</a>
      </Stack>
  )
}

export default MyProjects
