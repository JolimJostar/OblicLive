import React, { useState, useEffect } from 'react'
import Dot from '@components/RocksPagin/Dot'

export default function Pagination({scroll, number, mouseOverEvent, mouseOutEvent}:any) {

    function setLenght(number:any) {
        let countPush = []
        for (let i = 0; i< number; i++){
            countPush.push(i.toString())
        }
        setCount(countPush)
    }    

    const [count, setCount] = useState([''])
    const [activeIndex, setActiveIndex] = useState([0, 1])

    function handlePagChange(sign:String) {
        if (sign === '+' && activeIndex[1]<count.length-1){
            setActiveIndex([activeIndex[0]+1, activeIndex[1]+1]); 
            scroll(145 * activeIndex[1])   
        }
        if (sign === '-' && activeIndex[0]!= 0){
            setActiveIndex([activeIndex[0]-1, activeIndex[1]-1]); 
            scroll(145 * (activeIndex[0] - 1))    
        }
        
    }

    useEffect(() => {
        setLenght(number) 
    }, [])

    return (
        <div className="flex flex-row items-center justify-center" >

            <button 
                onClick={() => handlePagChange('-')} 
                className="mr-[15px]"
                onMouseEnter={mouseOverEvent}
                onMouseLeave={mouseOutEvent}
            >
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.16308 14.7017L0.315166 8.22017C-0.105055 7.82243 -0.105055 7.17757 0.315166 6.77983L7.16308 0.298304C7.5833 -0.0994349 8.26461 -0.0994349 8.68483 0.298304C9.10506 0.696042 9.10506 1.3409 8.68483 1.73864L2.5978 7.5L8.68483 13.2614C9.10506 13.6591 9.10506 14.304 8.68483 14.7017C8.26461 15.0994 7.5833 15.0994 7.16308 14.7017Z" fill="white"/>
                </svg>
            </button>

            <div className="flex flex-row space-x-[8px]">
                {count.map((dot, index) => (
                    <Dot key={dot} index={index} activeIndex={activeIndex} />
                ))}
            </div>

            <button 
                onClick={() => handlePagChange('+')} 
                className="ml-[15px]"
                onMouseEnter={mouseOverEvent}
                onMouseLeave={mouseOutEvent}
            > 
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.83692 0.298304L8.68483 6.77983C9.10505 7.17757 9.10505 7.82243 8.68483 8.22017L1.83692 14.7017C1.4167 15.0994 0.735388 15.0994 0.315166 14.7017C-0.105055 14.304 -0.105055 13.6591 0.315166 13.2614L6.4022 7.5L0.315166 1.73864C-0.105055 1.3409 -0.105055 0.696043 0.315166 0.298304C0.735388 -0.0994347 1.4167 -0.0994347 1.83692 0.298304Z" fill="white"/>
                </svg>
            </button>
            
        </div>
    )
}
