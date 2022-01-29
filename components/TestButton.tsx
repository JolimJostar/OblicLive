import React, { useEffect, useState } from 'react'

export default function TestButton({data}:any) {

    const [Data, setData] = useState({})

    useEffect(() => {
        setData(data)
      }, [data])

    return (
        <div>
            <button className="text-white font-main text-lg font-light" onClick={() => console.log(Data)}>Click</button>
        </div>
    )
}
