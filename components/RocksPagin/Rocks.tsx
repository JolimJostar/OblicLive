import Pagination from '@components/RocksPagin/Pagination'
import Rock from '@components/RocksPagin/Rock';
import React from 'react'
import { useState, useRef, useEffect } from "react";

export default function Rocks({rocksData, setRock, mouseOverEvent, mouseOutEvent}:any) {
  const [Data, SetData] = useState<any>({})
  const [active, setActive] = useState(8)
  const rocksDiv = useRef<any>(null);
  


  useEffect(() => {
    SetData(rocksData)
  }, []);

  function scroll(howMuch:number) {
    if (rocksDiv.current && rocksDiv){
      rocksDiv.current.scroll({left: howMuch, behavior: 'smooth'})
    }
  }

  if (Data.length > 0){
    return (
      <div className=" w-[267px] font-main space-y-[10px]">
          <div className="flex flex-row justify-between ">
              <p className='text-white text-[16px] font-semibold leading-[22px]'>камень</p>
              {Data.length > 2 && 
                <Pagination 
                  mouseOverEvent={mouseOverEvent} 
                  mouseOutEvent={mouseOutEvent}
                  scroll={scroll} 
                  number={Data.length} 
                />
              }
          </div>
          <div ref={rocksDiv} className="overflow-hidden w-[265px]">
            <div className="flex flex-row space-x-[25px] w-max pt-[1px]">
              {Data.map((rock:any) => (
                <Rock 
                  mouseOverEvent={mouseOverEvent} 
                  mouseOutEvent={mouseOutEvent}
                  key={rock.id} 
                  rock={rock} 
                  active={active} 
                  setActive={setActive} 
                  setRock={setRock} 
                />
              ))}
            </div>
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
