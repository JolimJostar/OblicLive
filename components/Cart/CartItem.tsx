import React, { useEffect } from 'react'
import Image from "next/image";

export default function CartItem({item}:any) {

    

    const myLoader = ({ src } : any) => {
        return `${src}`
    }

    return (
        <div className='flex flex-row space-x-[15px]'>
            <div>
                <Image
                    loader={myLoader}
                    src={item.pic}
                    alt="Landscape picture"
                    width={89}
                    height={89}
                />
            </div>
            <div className='flex flex-col space-y-[10px] font-medium'>
                <p className=' text-[18px]'>{item.name}</p>
                <div className='flex flex-row space-x-[25px] text-[16px]'>
                    <div className='flex flex-row'>
                        <p className='text-[#555]'>Размер:&nbsp;</p><p> {item.size}</p>
                    </div>
                    <div className='flex flex-row'>
                        <p className='text-[#555]'>Камень:&nbsp;</p><p> {item.rock}</p>
                    </div>
                </div>
                <div className='flex flex-row space-x-[10px]'>
                    <p>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                    <p className='text-[#555]'>X</p>
                    <p>{item.amount}</p>
                </div>
            </div>
        </div>
    )
}
