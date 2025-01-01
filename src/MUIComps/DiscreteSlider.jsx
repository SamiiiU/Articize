import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value} + 300`;
}

export default function DiscreteSlider({slider , onValueChange}) {
  return (
    <Box sx={{ 
        width: 300 ,
         color: 'green', // Changes the main color of the slider
        '& .MuiSlider-thumb': {
          backgroundColor: '#207DE9',
           // Thumb (circle) color
        },
        '& .MuiSlider-rail': {
          backgroundColor: 'gray',
          height : 10, // Inactive track color
        },
        '& .MuiSlider-track': {
          backgroundColor: '#013a6e',
          height : 10, // Active track color
        },}}>
      <Slider
        aria-label="none"
        defaultValue={slider.defaultValue}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={slider.shiftStep}
        step={slider.steps}
        marks
        min={slider.minVal}
        max={slider.maxVal}
        onChange={(event, newValue) => onValueChange(newValue)}   
      />
    </Box>
  );
}
