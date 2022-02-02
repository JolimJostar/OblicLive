import type { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import ShowCaseItem from "@components/MainPage/ShowCaseItem";
import { useHorizontalScroll } from "@components/MainPage/HorisontalScroll";


const Home: NextPage = ({items, mouseOverEvent, mouseOutEvent}:any) => {

  const [active, setActive] = useState(false)
  const scrollRef:any = useHorizontalScroll({active, setActive});

  if (!items){
    return(
      <h1 className='text-white'>Something whrong with the server</h1>
    )
  }

  return (
    <div ref={scrollRef} className=" grid grid-cols-simple2 w-[100vw] overflow-hidden pb-[95px] pt-[20px] ">
      <div className={`w-screen transition-all ease-in-out duration-1000 ${!active ? 'right-0' : 'right-[100vw]'}  pr-[50px] first-screen relative`}>
        <div className={` ${!active ? 'left-0' : 'left-[-200px]' } h-screen top-[-134px] absolute duration-1000 transition-all ease-in-out flex justify-center items-center opacity-50`}>
          <Image src="/MainPage.jpg" width={572} height={500} alt="Jewelery Image"/>
        </div>
        <div className="h-screen top-[-134px] absolute  flex items-center z-10">
          <div className="text-white relative leading-[100px] text-[90px] font-main font-medium left-[50px]">
            <p>Баланс металла</p>
            <p className={`relative ${!active ? 'left-[415px]' : 'left-[-370px]'} transition-all duration-1000 ease-in-out `}>и смысла</p>
          </div>
        </div>
        <div className="flex flex-row justify-between h-full">
          <div className="w-[572px] h-[500px] opacity-0"></div>
          <div className={`${!active ? 'left-0' : 'left-[-150px]'} relative top-[5px] duration-1000 transition-all ease-in-out flex items-end`}>
            <ShowCaseItem mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent} item={items[0]} />
          </div>
          <div className="relative flex flex-col items-start justify-between">
            <div className={`${!active ? 'left-0' : 'left-[-50px]'} relative duration-1000 transition-all ease-in-out flex items-end`}>
              <ShowCaseItem  mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent} item={items[1]} />
            </div>
            <div className={`relative ml-auto mt-[20px] ${!active ? 'bottom-0' : 'bottom-[-200px]'} top-[5px] duration-1000 ease-in-out transition-all right-0`}>
              <p className="mb-[20px] text-white font-medium font-main text-[20px] leading-[27px]">Листай<br></br>дальше</p>
              <svg width="51" height="22" viewBox="0 0 51 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M41.1117 0.437513L50.5649 9.94375C51.145 10.5271 51.145 11.4729 50.5649 12.0562L41.1117 21.5625C40.5316 22.1458 39.591 22.1458 39.0109 21.5625C38.4308 20.9791 38.4308 20.0333 39.0109 19.45L45.9284 12.4938H0V9.50624H45.9284L39.0109 2.55001C38.4308 1.96666 38.4308 1.02086 39.0109 0.437513C39.591 -0.145838 40.5316 -0.145838 41.1117 0.437513Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
        </div>
      <div className={`${active ? 'right-[100vw]' : 'right-0'} ease-in-out transition-all duration-1000 relative w-screen first-screen flex flex-row justify-between pl-[50px] pr-[62px] `}>
          <div className={` ${active ? 'left-0' : 'left-[50px]' } relative duration-1000 transition-all ease-in-out flex justify-center items-center`}>
            <Image src="/MainPageSecond.jpg" width={510} height={666} alt="Man in Jewelery Image"/>
          </div>
          <div className={`${active ? 'left-0' : 'left-[150px]'} transition-all duration-1000 ease-in-out flex items-start top-[28px] relative`}>
            <ShowCaseItem mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent} item={items[2]} />
          </div>
          <div className={`${active ? 'left-0' : 'left-[200px]'} flex items-end bottom-[62px] relative transition-all duration-1000 ease-in-out`}>
            <ShowCaseItem mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent} item={items[3]} />
          </div>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {

  function status(res:any){
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return res
  }


  const res = await fetch('https://oblic-back.herokuapp.com/api/rings?sort=name:desc&pagination[limit]=4&populate[cover][fields][0]=url&populate[ring_sizes]=*&fields=name,slug')
  .then(status)
  .catch(error => {return null})
  
  const data = await res ? await res.json() : null

  return {
    props: {
      items: data.data
    },
  }
}
