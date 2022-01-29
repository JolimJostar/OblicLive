import React, { useEffect } from 'react'

export default function ListComponent({active, list, size, setSize, setActive, mouseOverEvent, mouseOutEvent}:any) {

    useEffect(() => {

        document.addEventListener("mousedown", handleClickOutside);
        

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function handleClickOutside (e:any) {
        if (
          !e.target.classList.contains("custom-select-option") &&
          !e.target.classList.contains("selected-text")
        ) {
            setActive(!active)
        }
      };

    return (
        <div className='w-[304px] z-10 bg-mainGray p-[20px] drop-shadow-filterShadow absolute custom-select-option'>
                <ul className='w-full '>
                    {list.sort(function(a:any, b:any){return parseInt(a.attributes.size) - parseInt(b.attributes.size)}).map((item:any) => (
                        <li 
                            onMouseEnter={mouseOverEvent} 
                            onMouseLeave={mouseOutEvent}
                            className='flex flex-row justify-between items-center w-full selected-text border-b font-main text-[16px] font-semibold border-[#555555] text-white' 
                            key={item.attributes.size} 
                            onClick={() => {setSize(item.attributes.size);setActive(!active)}}>
                                {item.attributes.size} 
                                {size === item.attributes.size && <div className='w-[11px] h-[11px] rounded-full bg-white'></div>} 
                        </li>
                    ))}
                </ul>
        </div>
    )
}
