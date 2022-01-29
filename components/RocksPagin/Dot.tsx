import React from 'react'

export default function Dot({index, activeIndex}:any) {
    return (
        <div className={index === activeIndex[0] || index === activeIndex[1] ? "Dot activeDot" : "Dot" }></div>
    )
}
