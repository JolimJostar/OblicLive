import React, { useEffect, useState } from 'react'
import easyNumberSeparator from './easy-number-separator'

export default function PriceFilter({greaterThanNumber, setGreaterThanNumber, setSmallerThanNumber, smallerThanNumber, mouseOverEvent, mouseOutEvent}: any) {
    
    const [activeGreat, setActiveGreat] = useState(false)
    const [activeSmall, setactiveSmall] = useState(false)

    function handleChangeGreaterThanNumber(event:any) {
        setGreaterThanNumber(event.target.validity.valid ? event.target.value : greaterThanNumber)
    }

    function handleChangeSmallerThanNumber(event:any) {
        setSmallerThanNumber(event.target.validity.valid ? event.target.value : smallerThanNumber)
    }

    useEffect(() => {
        easyNumberSeparator({
            selector: '.number-separator',
            separator: '.',
            resultInput: '#result_input'
        }, setGreaterThanNumber)
        easyNumberSeparator({
            selector: '.number-separator1',
            separator: '.',
            resultInput: '#result_input1'
        }, setSmallerThanNumber)
    }, [])

    return (
        <div className="flex flex-row space-x-[15px]">
            <div className={`${activeGreat ? 'text-[#292A2D] bg-white border-white' : ' text-white'} border border-[#555] w-[130px] px-[15px] h-[32px] py-[4px] flex-row flex transition-testAnim duration-200`}>
                <p className='text-[#555] font-main font-semibold text-[16px] '>от</p>
                <input 
                    onMouseEnter={mouseOverEvent} 
                    onMouseLeave={mouseOutEvent}
                    onFocus={() =>setActiveGreat(true)}
                    onBlur={() => setActiveGreat(false)}
                    type="text" 
                    pattern="[0-9]*" 
                    className="number-separator w-full font-main font-semibold text-[16px] outline-none px-[8px]" 
                />
                <input type="text"
                    className='hidden'
                    id='result_input'
                    onInput={(event) => handleChangeGreaterThanNumber(event)} 
                    value={greaterThanNumber}
                />
                <p className='text-[#555] font-main font-semibold text-[16px]'>₽</p>
            </div>
            <div className={`${activeSmall ? 'text-[#292A2D] bg-white border-white' : ' text-white'} border border-[#555] w-[130px] px-[15px] h-[32px] py-[4px] flex-row flex transition-testAnim duration-200`}>
                <p className='text-[#555] font-main font-semibold text-[16px]'>до</p>
                <input
                    onMouseEnter={mouseOverEvent} 
                    onMouseLeave={mouseOutEvent}
                    onFocus={() => setactiveSmall(true)}
                    onBlur={() => setactiveSmall(false)}
                    type="text" 
                    pattern="[0-9]*"  
                    className="number-separator1 w-full font-main font-semibold text-[16px] outline-none px-[8px]" 
                />
                <input type="text"
                    className='hidden'
                    id='result_input1'
                    onInput={(event) => handleChangeSmallerThanNumber(event)} 
                    value={smallerThanNumber}
                />
                <p className='text-[#555] font-main font-semibold text-[16px]'>₽</p>
            </div>
        </div>
        
    )
}
