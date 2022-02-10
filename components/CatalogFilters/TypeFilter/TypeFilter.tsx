import React, { useState } from 'react'
import FilterName from './FilterName'

export default function TypeFilter({value, setValue, mouseOverEvent, mouseOutEvent}:any) {


    return (
        <div className='flex flex-row space-x-[15px] items-center'>
            <FilterName 
                mouseOverEvent={mouseOverEvent} 
                mouseOutEvent={mouseOutEvent}
                value={'кольцо'} 
                text={'кольца'} 
                setValue={setValue} 
                globalValue={value}
            />
            <svg width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="16" x2="0.999999" y2="4.37115e-08" stroke="#292A2D" strokeWidth="2"/>
            </svg>
            <FilterName 
                mouseOverEvent={mouseOverEvent} 
                mouseOutEvent={mouseOutEvent}
                value={'цепь'} 
                text={'подвески'} 
                setValue={setValue} 
                globalValue={value} 
            />
            <svg width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="16" x2="0.999999" y2="4.37115e-08" stroke="#292A2D" strokeWidth="2"/>
            </svg>
            <FilterName 
                mouseOverEvent={mouseOverEvent} 
                mouseOutEvent={mouseOutEvent}
                value={'серьга'} 
                text={'серьги'} 
                setValue={setValue} 
                globalValue={value} 
            /> 
        </div>
    )
}
