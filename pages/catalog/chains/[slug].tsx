
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
        
        <div className=" px-[50px] pt-[86px] pb-[20px] flex flex-row justify-between font-main h-[calc(100vh-114px)]">
          
          <div className="LeftPart">
            <div className="flex flex-col justify-between">
              <div className='flex flex-col space-y-[15px]'>
                <div className={`${active === "name" ? "text-white left-0" : "text-gray left-[-25px]"} relative transition-all duration-500 ease-in-out h-[25px] flex flex-row space-x-[15px] items-center text-[18px] font-medium`}>
                  <div className='overflow-hidden w-[10px] h-[15px]'>
                    <div className={`${active === "name" ? "left-0" : "left-[-10px]" } relative transition-all duration-500 ease-in-out`}>
                      <Arrow />
                    </div>
                  </div>
                  <button 
                    onMouseEnter={mouseOverEvent} 
                    onMouseLeave={mouseOutEvent} 
                    onClick={() => SetActive("name")} 
                  >
                    {item.name}
                  </button>
                </div>
                <div className={`${active === "har" ? "text-white left-0" : "text-gray left-[-25px]"} relative flex transition-all duration-300 ease-in-out h-[25px] flex-col-reverseflex flex-row space-x-[15px] items-center text-[18px] font-medium`}>
                  <div className='overflow-hidden w-[10px] h-[15px]'>
                    <div className={`${active === "har" ? "left-0" : "left-[-10px]" } relative transition-all duration-500 ease-in-out`}>
                      <Arrow />
                    </div>
                  </div>
                  <button 
                    onMouseEnter={mouseOverEvent} 
                    onMouseLeave={mouseOutEvent}
                    onClick={() => SetActive("har")}
                    className='cursor-none'
                  >
                    Характеристики
                  </button>
                </div> 
                
              </div>
              {active === "har" && (
              <div className="ActiveHar flex flex-col space-y-[46px] max-w-[566px]">
                <div className="flex flex-col space-y-[25px] font-main ">
                  <h1 className="text-gray text-[25px] font-medium leading-[34px]">Описание:</h1>
                  <p className="text-white font-normal text-[18px] max-w-[566px] leading-[25px]">{item.desc}</p>
                </div>
                <div className="flex flex-col space-y-[25px] font-main">
                  
                </div>
              </div>
            )}
            
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

          <div
            className={`${active === "name" ? "left-[50%]" : "left-[calc(50%+310px)]"} absolute top-[50%] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out w-[500px] h-[500px] `}
          >
            <Image
              loader={myLoader}
              src={item.cover.data.attributes.url}
              alt="Landscape picture"
              width={500}
              height={500}
            />
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
                      list={item.chain_sizes.data} />
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
                            id: Math.random(),
                            name: item.name,
                            price: item.price,
                            size: size,
                            rock: selectedRock,
                            amount: howMany,
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

export async function getStaticPaths(){
  const chainsRes = await fetch('https://oblic-backend.herokuapp.com/api/chains?sort=name:desc&populate[cover][fields][0]=url&populate[chain_sizes][fields][0]=size&fields=name,price,slug')
  const chains = await chainsRes.json()
  const paths = chains.data.map((item: any) =>({
    params: {slug: item.attributes.slug}
  }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params }:any) {

  const data = await fetch(`https://oblic-backend.herokuapp.com/api/chains?filters[slug][$eq]=${params.slug}&populate[rocks][populate]=*&populate[cover]=*&populate[chain_sizes]=*&populate[pictures]=*&populate[metal]=*`).then(res => res.json())


  return {
    props: {
      item: data.data[0].attributes
    },
  }
}
