
import React, { useContext, useEffect, useState } from 'react';
import {Context} from '@components/GlobalState/store'
import Image from "next/image";
import Arrow from "@components/Arrow";
import Rocks from "@components/RocksPagin/Rocks";
import TestButton from '@components/TestButton';
import SizeChouser from '@components/ItemPage/SizeChouser';


export default function Index({item, mouseOverEvent, mouseOutEvent}:any) {

  
  const [state, dispatch] = useContext<any>(Context)

  const [howMany, setHowMany] = useState(1);
  const [size, setSize] = useState("");
  const [active, SetActive] = useState("name")
  const [selectedRock, setRock] = useState("")
  const [wrapper, setWrapper] = useState("обычная")

  function changeHowMany(value: string) {
    if (value === "-" && howMany > 1) {
      setHowMany(howMany - 1);
    }
    if (value === "+" && howMany < 10) {
      setHowMany(howMany + 1);
    }
  }

  const myLoader = ({ src } : any) => {
    return `${src}`
  }



  return (
    <div>
      <div>
        {item === undefined ? <p>Загрузка</p> :
        
        <div className=" px-[50px] pt-[86px] pb-[20px] flex flex-row justify-between">
          
          <div className="LeftPart">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className={`${active === "name" ? "Tab Active" : "Tab"} flex flex-row space-x-[15px] items-center text-[18px] font-medium`}>
                  <Arrow />
                  <button 
                    onMouseEnter={mouseOverEvent} 
                    onMouseLeave={mouseOutEvent} 
                    onClick={() => SetActive("name")} 
                    className='cursor-none'
                  >
                    {item.name}
                  </button>
                </div>
                <div className={`${active === "har" ? "Tab Active" : "Tab"} flex flex-row space-x-[15px] items-center text-[18px] font-medium`}>
                  <Arrow />
                  <button 
                    onMouseEnter={mouseOverEvent} 
                    onMouseLeave={mouseOutEvent}
                    onClick={() => SetActive("har")}
                    className='cursor-none'
                  >
                    Характеристики
                  </button>
                </div> 
                <div className={`${active === "setka" ? "Tab Active" : "Tab"} flex flex-row space-x-[15px] items-center text-[18px] font-medium`}>
                  <Arrow />
                  <button 
                    onMouseEnter={mouseOverEvent} 
                    onMouseLeave={mouseOutEvent}
                    onClick={() => SetActive("setka")} 
                    className='cursor-none'
                  >
                    Размерная сетка
                  </button>
                </div>
              </div>
              {active === "name" && (
                <div>
                  <Rocks 
                    mouseOverEvent={mouseOverEvent} 
                    mouseOutEvent={mouseOutEvent} 
                    rocksData={item.rocks.data} 
                    setRock={setRock} 
                  />
                </div>
              )}
            </div>
            {active === "har" && (
              <div className="ActiveHar flex flex-col space-y-[46px] max-w-[566px]">
                <div className="flex flex-col space-y-[25px] font-main ">
                  <h1 className="text-gray text-[25px] font-medium">Описание:</h1>
                  <p className="text-white font-normal text-[18px] max-w-[566px]">{item.desc}</p>
                </div>
                <div className="flex flex-col space-y-[25px] font-main">
                  <h1 className="text-gray text-[25px] font-medium">Характеристики:</h1>
                  <div className="text-white HarHolder">
                    <div className="HarParam">
                      <h1 className='font-semibold text-[18px]'>Металл:</h1>
                      <p className='font-normal text-[16px]'>{item.metal.data.attributes.name ? `${item.metal.data.attributes.name}` : ''}</p>
                    </div>
                    <div className="HarParam">
                      <h1 className='font-semibold text-[18px]'>Камень:</h1>
                      <p className='font-normal text-[16px]'>Чёрный агат</p>
                    </div>
                    <div className="HarParam">
                      <h1 className='font-semibold text-[18px]'>Размер:</h1>
                      <p className='font-normal text-[16px]'>15 – 26</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {active === "setka" && (
              <div className="RazmeriHolder text-white mt-[50px]">
                <div className="RazmeriH1 font-main font-semibold text-[16px]">
                  <h1>Размер российский</h1>
                  <h1>Размер европейский</h1>
                </div>
                <div className="Razmeri mt-[25px]">
                  {item.ring_sizes.data.map((size: any) => (
                    <div
                      className="Razmer border-b-[1px] border-[#555] font-main font-normal text-[18px] py-[6px]"
                      key={size.id}
                    >
                      <p className="RazmerP">{size.attributes.size.toString().replace(/\./g, ',')}</p>
                      <p className="RazmerP">{size.attributes.sizeEU.toString().replace(/\./g, ',')}</p>
                    </div>
                  ))}
                </div>
              </div>
                  )}
          </div>

          <div
            className={
              active === "name" ? "ItemMainImage" : "ItemMainImage Reposition"
            }
          >
            <Image
              loader={myLoader}
              src={item.cover.data.attributes.url}
              alt="Landscape picture"
              width={500}
              height={500}
            />
          </div>
          <div className='relative h-[calc(100vh-300px)] min-h-[500px] w-1 opacity-0'> {/* Этот блок нужен, что бы ровнять высоту родительского блока для адаптивности. Этот блок должен быть высотой с основную картинку */}
          </div>
          {active === "name" && (
            <div className="text-white font-semibold text-[16px] flex flex-col justify-between">
              <h1 className="text-right text-[25px] font-medium">₽ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h1>
              <div className="LeftPartBottom w-[304px] flex flex-col space-y-[30px]">
                  <div className="RazmerChouseHolder">
                    <p className='mb-[10px]'>размер</p>
                    <SizeChouser 
                      mouseOverEvent={mouseOverEvent} 
                      mouseOutEvent={mouseOutEvent} 
                      size={size} 
                      setSize={setSize} 
                      list={item.ring_sizes.data} />
                  </div>
                  <div className="WrapHolder">
                    <p className="mb-[10px]">упаковка</p>
                    <div className='flex flex-row text-[18px] font-semibold'>
                      <button 
                        onMouseEnter={mouseOverEvent} 
                        onMouseLeave={mouseOutEvent} 
                        onClick={() => setWrapper('обычная')} 
                        className={`${wrapper=== 'обычная' ? 'border-white' : 'border-gray text-gray'} transition-all duration-300 border px-[30px] py-[10px]`}
                      >
                        обычная
                      </button>
                      <button 
                        onMouseEnter={mouseOverEvent} 
                        onMouseLeave={mouseOutEvent} 
                        onClick={() => setWrapper('подарочная')} 
                        className={`${wrapper=== 'подарочная' ? 'border-white' : 'border-gray text-gray'} transition-all duration-300 px-[30px] py-[10px] border border-white`}
                      >
                        подарочная
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between AddToCartHolder">
                    <div className="HowMany text-[18px] text-white flex flex-row border border-white w-[108px] justify-between px-[15px] py-[10px]">
                      <button 
                        onMouseEnter={mouseOverEvent} 
                        onMouseLeave={mouseOutEvent} 
                        onClick={() => changeHowMany("-")}
                      >
                        <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="15" height="2" fill="white"/>
                        </svg>
                      </button>
                      <p>{howMany}</p>
                      <button 
                        onMouseEnter={mouseOverEvent} 
                        onMouseLeave={mouseOutEvent} 
                        onClick={() => changeHowMany("+")}
                      >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.75 8.25V15H8.25V8.25H15V6.75H8.25V0H6.75V6.75H0V8.25H6.75Z" fill="white"/>
                        </svg>
                      </button>
                    </div>
                    <button 
                      onMouseEnter={mouseOverEvent} 
                      onMouseLeave={mouseOutEvent} 
                      onClick={() => {
                        if (item){
                          const newItemInCart = {
                            name: item.name,
                            price: item.price,
                            size: size,
                            rock: selectedRock,
                            amount: howMany,
                            wrapper: wrapper,
                            pic: item.cover.data.attributes.url,
                          }
                          const tempItemsInCart = [...state.itemsInCart]
                          tempItemsInCart.push(newItemInCart)
                          dispatch({type: "setItems",payload: tempItemsInCart})
                        }
                        }} 
                      className="py-[10px] px-[43.5px] border border-white hover:text-[#161A16] hover:bg-white"
                    >
                      В корзину
                    </button>
                  </div>
              </div>
            </div>
                      )}
        </div>}
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }:any) {

  const data = await fetch(`https://oblic-back.herokuapp.com/api/rings?filters[slug][$eq]=${params.slug}&populate[rocks][populate]=*&populate[cover]=*&populate[ring_sizes]=*&populate[pictures]=*&populate[metal]=*`).then(res => res.json())


  return {
    props: {
      item: data.data[0].attributes
    },
  }
}
