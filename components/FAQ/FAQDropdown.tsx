import React, { useState } from 'react'

export default function FAQDropdown({number, text}:any) {


    const [active, setActive] = useState(false)

    return (
        <div onClick={() => (setActive(!active))} className={`${active ? 'max-h-[1000px]' : 'max-h-[77px]'} cursor-pointer font-main flex flex-col space-y-[30px] px-[25px] py-[25px] border-b-[1px] border-b-[#555555] border-t-[1px] border-t-[#555555] overflow-hidden transition-testAnim `}>
            <div className='grid grid-cols-4'>
                <div>
                    <p className='font-semibold text-[20px] leading-[27px]'>{('0' + number).slice(-2)}</p>
                    <p className='mt-[30px] mb-[15px] text-[18px] leading-[25px] font-semibold '>Окружность пальца (мм)</p>
                    <div className='flex flex-col space-y-[10px] leading-[22px]'>
                        <p>47</p>
                        <p>48,7</p>
                        <p>50,3</p>
                    </div>
                </div>
                <div>
                    <p className='font-medium text-[18px] leading-[25px]'>{text}</p>
                    <p className='mt-[30px] mb-[15px] text-[18px] leading-[25px] font-semibold'>Размер</p>
                    <div className='flex flex-col space-y-[10px] leading-[22px]'>
                        <p>15</p>
                        <p>15,5</p>
                        <p>16</p>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <p className='font-medium text-[18px] text-[#555555] leading-[25px] '>Объекты</p>
                </div>
                <div className="flex items-center justify-end max-h-[30px]">
                    <svg className={`${active ? 'rotate-180' : ''} transition-testAnim duration-100`} width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.7017 1.83692L8.22017 8.68483C7.82243 9.10505 7.17757 9.10505 6.77983 8.68483L0.298304 1.83692C-0.0994349 1.4167 -0.0994349 0.735388 0.298304 0.315166C0.696042 -0.105055 1.3409 -0.105055 1.73864 0.315166L7.5 6.4022L13.2614 0.315166C13.6591 -0.105055 14.304 -0.105055 14.7017 0.315166C15.0994 0.735388 15.0994 1.4167 14.7017 1.83692Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
