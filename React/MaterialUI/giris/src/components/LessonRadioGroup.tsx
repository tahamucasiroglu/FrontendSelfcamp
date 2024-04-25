import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormHelperText,
  } from '@mui/material';


export default function LessonRadioGroup() {
    const [value, setValue] = useState('');
    console.log(value);
  return (
    <FormControl>
      <FormLabel>Maaş Beklentiniz</FormLabel>
      <RadioGroup
        row
        name="extected-salary"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel label="2000$" value="2000" control={<Radio />} />
        <FormControlLabel label="3000$" value="3000" control={<Radio />} />
        <FormControlLabel label="4000$" value="4000" control={<Radio />} />
      </RadioGroup>
      <FormHelperText>Yanlış Seçim</FormHelperText>
    </FormControl>
  )
}
