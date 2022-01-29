import React, { Fragment, useEffect, useState } from 'react';

export default function Preloader({loading}:any) {

    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true)
        setTimeout(()=>setActive(false), 800)
    }, []);
    

    return (
        <Fragment > 
            {loading &&
                <div className={`z-50 absolute top-0 left-0 w-screen h-screen bg-gray transition-all duration-1000 ease-in-out ${active ? 'opacity-100' :'opacity-0'}`}>
                </div>
            }
        </Fragment>
        )
}
