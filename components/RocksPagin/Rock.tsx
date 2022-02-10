import React from 'react'
import Image from "next/image";

export default function Rock({rock, active, setActive, setRock, mouseOverEvent, mouseOutEvent}:any) {
    return (
        <div 
            onClick={() => 
                {
                setRock(rock.attributes.name)
                setActive(rock.id)
                }
            }
            className='max-w-[120px] space-y-[10px]'
            onMouseEnter={mouseOverEvent}
            onMouseLeave={mouseOutEvent}
        >
            <div className={`${active == rock.id ? "bg-[#292A2D]" : ""} p-[25px] outline outline-1 outline-offset-[-1px] outline-[#292A2D] leading-[0] transition-all duration-300`} >
                <Image
                loader={() => {
                    return `${rock.attributes.cover.data.attributes.url}`;
                }}
                src={`${rock.attributes.cover.data.attributes.url}`}
                alt="Landscape picture"
                width={70}
                height={70}
                />
            </div>
            <p className={`${active == rock.id ? 'text-white' : 'text-gray'} transition-all duration-300 break-word text-[15px] font-bold font-main leading-[20px]`}>{rock.attributes.name}</p>
        </div>
    )
}
