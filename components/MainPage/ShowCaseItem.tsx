import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function ShowCaseItem({item, mouseOverEvent, mouseOutEvent}:any) {
    return (
        <div className="flex justify-between flex-col h-[450px] 2xl:h-[540px]">
          <div className='h-[388px] w-[309px] 2xl:w-[370px] 2xl:h-[465px]'>
            <Image 
              loader={() => {
                return `${item.attributes.cover.data.attributes.url}`;
              }}
              src={`${item.attributes.cover.data.attributes.url}`}
              alt="Landscape picture"
              width={309}
              height={388}
              layout='responsive'
            />
          </div>
          <div className="flex flex-row justify-between font-main font-semibold pt-[25px] 2xl:pt-[30px]">
            <p className="text-white text-[18px]">{item.attributes.name}</p>
            <Link href={`catalog/${item.attributes.ring_sizes ? 'rings' : item.attributes.chain_lenghts ? 'chains' : 'earrings' }/${item.attributes.slug}`}>
              <a onClick={mouseOutEvent} onMouseEnter={mouseOverEvent} onMouseLeave={mouseOutEvent} className="bg-transparent border border-white hover:text-black text-white hover:bg-white px-[20px] py-[10px] text-[14px]">
                Узнать больше
              </a>
            </Link>
          </div>
          </div>
    )
}
