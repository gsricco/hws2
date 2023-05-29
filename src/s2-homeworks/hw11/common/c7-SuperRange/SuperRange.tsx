import React, {ChangeEvent, useState} from 'react'
import {Slider, SliderProps} from '@mui/material'
type PropsType ={
    value:number|number[]
    change:( newValue: number | number[])=>void
}
const SuperRange: React.FC<SliderProps&PropsType> = ({value, change,...props}) => {
    const [value1, setValue] = useState<number|number[]>(value);
    const handleChange =(event: Event, newValue: number | number[])=>{
        if (!Array.isArray(newValue)) {
            setValue(newValue as number)
            change(newValue)
        } else {
            setValue(newValue as number[])
            change(value1 as number[])

        }

    }

    return (
        <Slider
            sx={{width: 600, color: '#00CC22', backgroundColor: '#fff',
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                        boxShadow: 'inherit',
                    },},
                '& .MuiSlider-valueLabel': {
                    lineHeight: 1.2,
                    fontSize: 12,
                    background: 'unset',
                    padding: 0,
                    width: 32,
                    height: 32,
                    borderRadius: '50% 50% 50% 0',
                    backgroundColor: '#00CC22',
                    transformOrigin: 'bottom left',
                    transform: 'translate(50%, -100%)  scale(0)',
                    '&:before': { display: 'none' },
                    '&.MuiSlider-valueLabelOpen': {
                        transform: 'translate(50%, -100%)  scale(1)',
                    },
            }}}
            value={value}
            onChange={handleChange}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            valueLabelDisplay="auto"
        />
    )
}

export default SuperRange
