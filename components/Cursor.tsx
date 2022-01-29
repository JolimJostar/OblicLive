import React from 'react'

export default function Cursor({outline, dot}:any) {


        return (
            <React.Fragment >
                <div ref={outline} className='cursor-dot-outline '></div>
                <div ref={dot} className='cursor-dot'></div>
            </React.Fragment>
        )
}
