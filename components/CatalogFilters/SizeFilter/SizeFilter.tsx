import TestButton from '@components/TestButton';
import React, { useState } from 'react'
import ListComponent from './ListComponent';


export default function SizeFilter({ringsSizes, chainsSizes, value, setValue, typeOfFilter, mouseOverEvent, mouseOutEvent}:any) {

    function SetFilterArray() {
        if (typeOfFilter === 'цепь'){
            return(chainsSizes)
        }
        return(ringsSizes)
    }

    const list = SetFilterArray()


    const [active, setActive] = useState(false)

        
    
    return (
        <div>
            
            <div    
                className={` ${active ? 'boder-white border bg-white text-[#292A2D]' : 'border border-[#555] text-white'}  h-[32px] font-main font-semibold text-[16px] custom-select-option transition-testAnim duration-200 w-[100px] items-center px-[15px] py-[5px] flex flex-row justify-between`} 
                onClick={() => (setActive(!active))}
                onMouseEnter={mouseOverEvent} 
                onMouseLeave={mouseOutEvent}
            >
                <p className='custom-select-option'>
                    {value}
                </p>
                <div className={`${active ? 'rotate-180' : ''} transition-testAnim duration-100 custom-select-option`}>
                    <svg className='custom-select-option' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.7017 2.33692L8.22017 9.18483C7.82243 9.60505 7.17757 9.60505 6.77983 9.18483L0.298304 2.33692C-0.0994349 1.9167 -0.0994349 1.23539 0.298304 0.815166C0.696042 0.394945 1.3409 0.394945 1.73864 0.815166L7.5 6.9022L13.2614 0.815166C13.6591 0.394945 14.304 0.394945 14.7017 0.815166C15.0994 1.23539 15.0994 1.9167 14.7017 2.33692Z" fill={active ? '#292A2D' : 'white'}/>
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
                />
            : 
            null
           }
        </div>
    )
}

