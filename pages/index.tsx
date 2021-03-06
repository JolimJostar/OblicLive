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
          <div className="w-[572px] h-[500px] relative 2xl:w-[763px] 2xl:h-[600px]">
            <Image src="/MainPage.jpg" layout="responsive" unoptimized width={572} height={500} alt="Jewelery Image"/>
          </div>
        </div>
        <div className="h-screen top-[-134px] absolute  flex items-center z-10">
          <div className="text-white relative leading-[100px] text-[90px] font-main font-medium left-[50px]">
            <p>Баланс металла</p>
            <p className={`relative ${!active ? 'left-[415px]' : 'left-[-370px]'} transition-all duration-1000 ease-in-out `}>и смысла</p>
          </div>
        </div>
        <div className="flex flex-row justify-between h-full">
          <div className="w-[572px] h-[500px] 2xl:w-[763px] 2xl:h-[600px] opacity-0"></div>
          <div className={`${!active ? 'left-0' : 'left-[-150px]'} relative top-[5px] duration-1000 transition-all ease-in-out flex items-end`}>
            <ShowCaseItem mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent} item={items[0]} />
          </div>
          <div className="relative flex flex-col items-start justify-between">
            <div className={`${!active ? 'left-0' : 'left-[-50px]'} relative duration-1000 transition-all ease-in-out flex items-end`}>
              <ShowCaseItem  mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent} item={items[1]} />
            </div>
            <div onMouseEnter={mouseOverEvent} onMouseLeave={mouseOutEvent} onClick={() => setActive(true)} className={`relative ml-auto ${!active ? 'bottom-[-5px]' : 'bottom-[-205px]'} duration-1000 ease-in-out transition-all right-0`}>
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
            <Image src="/MainPageSecond.jpg" width={510} height={666} unoptimized alt="Man in Jewelery Image"/>
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

export async function getStaticProps() {

  function status(res:any){
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return res
  }

  const urls = [
    //Ссылки на объекты бэка , что бы запихнуть в Promise.all
    //Предмет получаем фильтруя его по имени через REST api strapi
    //Объект 09
    'https://oblic-backend.herokuapp.com/api/chains?filters[name][$eq]=%D0%9E%D0%B1%D1%8A%D0%BA%D0%B5%D1%82%20%E2%84%9609&pagination[limit]=1&populate[chain_sizes][fields][0]=size&populate[cover][fields][0]=url&fields=name,slug',
    //Объект 28
    'https://oblic-backend.herokuapp.com/api/rings?filters[name][$eq]=%D0%9E%D0%B1%D1%8A%D0%BA%D0%B5%D1%82%20%E2%84%9628&pagination[limit]=1&populate[cover][fields][0]=url&populate[ring_sizes][fields][0]=size&fields=name,slug',
    //Объект 06
    'https://oblic-backend.herokuapp.com/api/rings?filters[name][$eq]=%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%20%E2%84%9606&pagination[limit]=1&populate[cover][fields][0]=url&populate[ring_sizes][fields][0]=size&fields=name,slug',
    //
    'https://oblic-backend.herokuapp.com/api/rings?filters[name][$eq]=%D0%9E%D0%B1%D1%8A%D0%BA%D0%B5%D1%82%20%E2%84%9621&pagination[limit]=1&populate[cover][fields][0]=url&populate[ring_sizes][fields][0]=size&fields=name,slug'
  ]


  const data = await Promise.all(urls.map(async u => {
    const res = await fetch(u);
    return res.json()
  }))

  console.log(data[0].data[0].attributes)

  return {
    props: {
      items: [data[0].data[0], data[1].data[0], data[2].data[0], data[3].data[0] ]
    },
  }
}
