import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value} + 300`;
}

export default function DiscreteSlider({slider , onValueChange , className}) {
  return (
    <Box sx={{ 
        ...className ,
         color: 'green', // Changes the main color of the slider
        '& .MuiSlider-thumb': {
          backgroundColor: '#207DE9',
          // display : 'none',     
          transition: 'transform 0.3s ease-in-out',
          
        },
        '& .MuiSlider-rail': {
          backgroundColor: '#grey',
          height : 10, // Inactive track color
        },
        '& .MuiSlider-track': {
          backgroundColor: '#013a6e',
          height : 10, // Active track color
          transition: 'width 0.3s ease-in-out'
        },}}>
      <Slider
        aria-label="Saad"
        defaultValue={slider.defaultValue}
        getAriaValueText={valuetext}
        valueLabelDisplay="off"
        shiftStep={slider.shiftStep}
        step={slider.steps}
        // marks
        min={slider.minVal}
        max={slider.maxVal}
        onChange={(event, newValue) => onValueChange(newValue)}
      />
    </Box>
  );
}
