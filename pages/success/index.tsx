import React from 'react'
import Image from "next/image"
import Link from 'next/link'

export default function Index({mouseOverEvent, mouseOutEvent}:any) {
    return (
        <div className='flex flex-row justify-between font-main full-height-without-navbar'>
                <div className='success-bg px-[50px] pt-[50px] pb-[100px] text-white text-[0px] flex flex-col justify-between w-[350px] '>
                    <div className='flex flex-col gap-y-[50px]'>
                        <div>
                            <Image src="/successpage_pic1.jpg" width={177} height={235} alt="Man in Jewelery Image"/>
                        </div>
                        <div className='relative left-[73px]'>
                            <Image src="/successpage_pic2.jpg" width={177} height={235} alt="Man in Jewelery Image"/>
                        </div>
                    </div>
                    <Link href='/'>
                        <a className='text-[18px] font-semibold border border-white py-[10px] px-[34px] w-fit self-center'>На главную</a>
                    </Link>
                </div>
                <div className='relative h-full flex justify-center items-center w-max'>
                    <div className='opacity-50'>
                        <Image src="/successpage_pic_main.png" width={400} height={400} alt="Man in Jewelery Image"/>
                    </div>
                    <h1 className=' absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-max font-light text-[80px] leading-[90px] text-center gradient-text text-transparent opacity-50'>
                        Теперь<br />вы часть oblic
                    </h1>
                </div>
                <div className='success-bg px-[50px] pt-[50px] pb-[100px] text-white text-[0px] flex flex-col justify-between w-[350px] '>
                    <div className='flex flex-col gap-y-[50px]'>
                        <div className='relative left-[73px]'>
                            <Image src="/successpage_pic3.jpg" width={177} height={235} alt="Man in Jewelery Image"/>
                        </div>
                        <div >
                            <Image src="/successpage_pic4.jpg" width={177} height={235} alt="Man in Jewelery Image"/>
                        </div>
                    </div>
                    <Link href='/catalog'>
                        <a className='text-[18px] font-semibold border border-white py-[10px] px-[34px] w-fit self-center'>В каталог</a>
                    </Link>
                </div>
        </div>
    )
}
