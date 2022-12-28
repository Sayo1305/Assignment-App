import React from 'react'
import HomeNavbar from './HomeNavbar'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const MyPage = () => {
  return (
    <div>
      <HomeNavbar/>
      <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>
    </div>
  )
}

export default MyPage