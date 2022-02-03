import React from 'react'

export default function FilterName({text, value, setValue, globalValue, mouseOverEvent, mouseOutEvent}:any) {
    return (
        <div 
            onMouseEnter={mouseOverEvent} 
            onMouseLeave={mouseOutEvent}
            onClick={() => value === globalValue ? setValue(null) : setValue(value)} 
            className='cursor-pointer'
        >
            <p className={`${globalValue === null ? 'text-white' : value === globalValue ? 'text-white' : 'text-[#555]'} leading-[22px] font-main text-[16px] font-semibold transition-testAnim duration-200`}>{text}</p>
        </div>
    )
}
