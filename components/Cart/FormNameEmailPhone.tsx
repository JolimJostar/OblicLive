import React from 'react';
import InputMask from 'react-input-mask';

export default function FormNameEmailPhone({mouseOverEvent, mouseOutEvent, inputValues, setInputValues}:any) {
  return (
    <div className='flex flex-col space-y-[30px] w-[690px]'>
      <h1>Давайте знакомиться</h1>
      <div className='grid grid-cols-3'>
          <div className='flex flex-col space-y-[10px]'>
              <p>Имя</p>
              <input
                  onMouseEnter={mouseOverEvent} 
                  onMouseLeave={mouseOutEvent} 
                  className='pr-[20px] outline-none' 
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
              <p>Телефон</p>
              <InputMask
                  onMouseEnter={mouseOverEvent} 
                  onMouseLeave={mouseOutEvent} 
                  mask="+7 (999) 999 99-99"
                  className='pr-[20px] outline-none' 
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
              <p>E-mail</p>
              <input 
                  onMouseEnter={mouseOverEvent} 
                  onMouseLeave={mouseOutEvent} 
                  className='pr-[20px] outline-none' 
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
