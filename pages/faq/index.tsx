import FAQDropdown from '@components/FAQ/FAQDropdown'
import React from 'react'

export default function Index({mouseOverEvent, mouseOutEvent}:any) {
    return (
        <div className='px-[50px] pt-[77px] flex flex-col gap-y-[50px] relative font-main text-white'>
            <div className='absolute left-[50px] top-[236px] leading-[25px] text-[18px]'>
                <p className='font-semibold'>oblic | FAQ</p>
                <p className='font-light'>объекты</p>
            </div>
            <div className=' pl-[250px] flex flex-col'>
                <h1 className='gradient-text text-[80px] font-light w-max leading-[109px]'>oblic | FAQ</h1>
                <div className='mt-[50px] w-full flex flex-col gap-y-[25px]'>
                    <FAQDropdown number={'1'} text={"Размерная сетка общая"} />
                    <FAQDropdown number={'2'} text={"Размерная сетка колец"} />
                </div>
            </div>
        </div>
    )
}
