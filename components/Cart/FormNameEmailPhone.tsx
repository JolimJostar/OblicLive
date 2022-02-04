import React from 'react';
import InputMask from 'react-input-mask';

export default function FormNameEmailPhone({mouseOverEvent, mouseOutEvent, inputValues, setInputValues}:any) {
  return (
    <div className='flex flex-col space-y-[30px] w-[690px]'>
      <h1 className=' font-medium text-[25px] leading-[34px]'>Давайте знакомиться</h1>
      <div className='flex space-x-[150px]'>
          <div className='flex flex-col space-y-[10px]'>
              <p className='font-semibold text-[18px] leading-[25px]'>Имя</p>
              <input
                  onMouseEnter={mouseOverEvent} 
                  onMouseLeave={mouseOutEvent} 
                  className=' outline-none font-normal text-[20px] leading-[27px] w-[91px]' 
                  type="text" 
                  placeholder='Ваше имя' 
                  onChange={(event:any) => {
                      const temp = {...inputValues}
                      temp.name = event.target.value
                      setInputValues(temp)
                  }}
                  required
              />
          </div>
          <div className='flex flex-col space-y-[10px]'>
              <p className='font-semibold text-[18px] leading-[25px]'>Телефон</p>
              <InputMask
                  onMouseEnter={mouseOverEvent} 
                  onMouseLeave={mouseOutEvent} 
                  mask="+7 (999) 999 99-99"
                  className='outline-none font-normal text-[20px] leading-[27px] w-[192px]' 
                  type="tel" 
                  placeholder='+7 (___) ___ __-__' 
                  onChange={(event:any) => {
                      const temp = {...inputValues}
                      temp.phone = event.target.value
                      setInputValues(temp)
                  }}
                  required
              />
          </div>
          <div className='flex flex-col space-y-[10px]'>
              <p className='font-semibold text-[18px] leading-[25px]'>E-mail</p>
              <input 
                  onMouseEnter={mouseOverEvent} 
                  onMouseLeave={mouseOutEvent} 
                  className='outline-none font-normal text-[20px] leading-[27px] w-[101px]' 
                  type="email" 
                  placeholder='Ваш e-mail' 
                  onChange={(event:any) => {
                      const temp = {...inputValues}
                      temp.email = event.target.value
                      setInputValues(temp)
                  }}
                  required
              />
          </div>
      </div>
  </div>
  );
}
