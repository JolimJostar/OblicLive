import React, { useEffect } from 'react'
import Image from "next/image";
import TestButton from '@components/TestButton';

const CartItem = React.memo(function CartItem({item, deleteItemFromCart}:any) {

    

    const myLoader = ({ src } : any) => {
        return `${src}`
    }

    return (
        <div className='flex flex-row space-x-[15px] h-[89px] relative'>
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
                <p className=' text-[18px] leading-[25px] font-medium'>{item.name}</p>
                <div className='flex flex-row space-x-[25px] text-[16px] h-[22px]'>
                    <div className='flex flex-row'>
                        <p className='text-[#555] text-[16px] leading-[22px] font-medium'>Размер:&nbsp;</p><p className='text-[16px] leading-[22px] font-medium text-white'> {item.size}</p>
                    </div>
                    <div className='flex flex-row'>
                        <p className='text-[#555] text-[16px] leading-[22px] font-medium'>Камень:&nbsp;</p><p className='text-[16px] leading-[22px] font-medium text-white'> {item.rock}</p>
                    </div>
                </div>
                <div className='flex flex-row space-x-[10px]'>
                    <p className='font-medium text-[16px] leading-[22px] text-white'>₽ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                    <p className='text-[#555] font-medium text-[16px] leading-[22px]'>X</p>
                    <p className='font-medium text-[16px] leading-[22px] text-white'>{('0' + item.amount).slice(-2)}</p>
                </div>
            </div>
            <button className='absolute top-0 right-0' onClick={() => deleteItemFromCart(item.id)}>X</button>
        </div>
    )
})

export default CartItem
