import { Box, TextField, MenuItem, } from '@mui/material'
import React, { useState } from 'react'

export default function LessonSelect() {
    const [value, setValue] = useState('')
    console.log(value)
    return (
    <Box width={250}>
        <TextField select label='ülke seçiniz' fullWidth value={value} onChange={(e)=> setValue(e.target.value)}>
        <MenuItem value ='TR'>Türkiye</MenuItem>
        <MenuItem value ='USA'>ABD</MenuItem>
        <MenuItem value ='FR'>Fransa</MenuItem>
        </TextField>
    </Box>
  )
}
