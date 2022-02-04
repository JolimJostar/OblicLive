import React, { useEffect, useState } from 'react'
import ListComponent from './ListComponent';


export default function CartChose({value, setValue, setInputValues, inputValues, mouseOverEvent, mouseOutEvent}:any) {

    const list = [
        {name: 'Самовывоз'},
        {name: 'Курьером'},
    ]

    const [active, setActive] = useState(false)


        
    
    return (
        <div>
            <div 
                onMouseEnter={mouseOverEvent} 
                onMouseLeave={mouseOutEvent}
                className='custom-select-option text-white h-[27px] w-[152px] items-center flex flex-row justify-between' 
                onClick={() => (setActive(!active))}
            >
                <p className='custom-select-option'>
                    {value}
                </p>
                <div className={active ? 'rotate-180' : ''}>
                    <svg className='custom-select-option' width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.7017 1.83692L8.22017 8.68483C7.82243 9.10505 7.17757 9.10505 6.77983 8.68483L0.298304 1.83692C-0.0994349 1.4167 -0.0994349 0.735388 0.298304 0.315166C0.696042 -0.105056 1.3409 -0.105056 1.73864 0.315166L7.5 6.4022L13.2614 0.315166C13.6591 -0.105056 14.304 -0.105055 14.7017 0.315166C15.0994 0.735388 15.0994 1.4167 14.7017 1.83692Z" fill="white"/>
                    </svg>
                </div>
            </div>
           {active ? 
                <ListComponent
                    mouseOverEvent={mouseOverEvent} 
                    mouseOutEvent={mouseOutEvent} 
                    active={active} 
                    list={list} 
                    value={value} 
                    setValue={setValue} 
                    setActive={setActive} 
                    setInputValues={setInputValues}
                    inputValues={inputValues}
                />
            : 
            null
           }
        </div>
    )
}

