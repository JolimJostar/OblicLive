import Pagination from '@components/RocksPagin/Pagination'
import Rock from '@components/RocksPagin/Rock';
import React from 'react'
import { useState, useRef, useEffect } from "react";

export default function Rocks({rocksData, setRock}:any) {
  const [Data, SetData] = useState<any>({})
  const [active, setActive] = useState(undefined)
  const rocksDiv = useRef<any>(null);
  


  useEffect(() => {
    SetData(rocksData)
  }, []);

  function scroll(howMuch:number) {
    if (rocksDiv.current && rocksDiv){
      rocksDiv.current.scrollBy({left: howMuch, behavior: 'smooth'})
    }
  }

  if (Data.length > 0){
    return (
      <div className="h-[172px] w-[267px] font-main space-y-[10px]">
          <div className="flex flex-row justify-between text-white text-[16px] font-semibold">
              <p>камень</p>
              {Data.length > 2 && <Pagination scroll={scroll} number={Data.length}/>}
          </div>
          <div ref={rocksDiv} className="overflow-hidden w-[265px]">
            <div className="flex flex-row space-x-[25px] w-max pt-[1px]">
              {Data.map((rock:any) => (
              <Rock key={rock.id} rock={rock} active={active} setActive={setActive} setRock={setRock} />
            ))}</div>
          </div>
      </div>
  )
  } else {
    return (
      <div>
        
      </div>
    )
  }
}
