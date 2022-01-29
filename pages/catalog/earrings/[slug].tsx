
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Arrow from "@components/Arrow";
import Rocks from "@components/RocksPagin/Rocks";
import TestButton from '@components/TestButton';


export default function Index({item, mouseOverEvent, mouseOutEvent}:any) {

  const [howMany, setHowMany] = useState(1);
  const [age, setAge] = useState("");
  const [active, SetActive] = useState("name");
  const [selectedRock, setRock] = useState("")
  const [alignment, setAlignment] = React.useState("обычная");
  const [itemsInCart, setItemsInCart] = useState<any>([])

  function changeHowMany(value: string) {
    if (value === "-" && howMany > 1) {
      setHowMany(howMany - 1);
    }
    if (value === "+" && howMany < 10) {
      setHowMany(howMany + 1);
    }
  }

  const handleChangeButton = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleChange = (event:any) => {
    setAge(event.target.value as string);
  };

  const myLoader = ({ src, width} : any) => {
    return `http://localhost:1337${src}?w=${width}`
  }


  useEffect(() => {
    if (window) { 
        const data = sessionStorage.getItem('ItemsInCart')
        if (data) {
            setItemsInCart(JSON.parse(data))
        } else {
            return
        }
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('ItemsInCart', JSON.stringify(itemsInCart))
  }, [itemsInCart])


  return (
    <div>
      <div>
        {item === undefined ? <p>Загрузка</p> :
        
        <div className=" px-[50px] pt-[200px] pb-[50px] flex flex-row justify-between">
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
          <div className="LeftPart">
            <div className="Tabs">
              <div className={`${active === "name" ? "Tab Active" : "Tab"} flex flex-row space-x-[15px] items-center`}>
                <Arrow />
                <button onClick={() => SetActive("name")}>{item.name}</button>
              </div>
              <div className={`${active === "har" ? "Tab Active" : "Tab"} flex flex-row space-x-[15px] items-center`}>
                <Arrow />
                <button onClick={() => SetActive("har")}>Характеристики</button>
              </div>
              {item.sizes.data[0] && 
              <div className={`${active === "setka" ? "Tab Active" : "Tab"} flex flex-row space-x-[15px] items-center`}>
                <Arrow />
                <button onClick={() => SetActive("setka")}>
                  Размерная сетка
                </button>
              </div>
              }
              {active === "name" && (
                <div className="mt-[290px]">
                  <Rocks rocksData={item.rocks.data} setRock={setRock} />
                </div>
              )}
            </div>
            {active === "har" && (
              <div className="ActiveHar flex flex-col space-y-[46px] max-w-[566px]">
                <div className="flex flex-col space-y-[25px] font-main ">
                  <h1 className="text-gray">Описание:</h1>
                  <p className="text-white">{item.desc}</p>
                </div>
                <div className="flex flex-col space-y-[25px]">
                  <h1 className="text-gray">Характеристики:</h1>
                  <div className="text-white HarHolder">
                    <div className="HarParam">
                      <h1>Металл:</h1>
                      <p>{item.metals.data[0].attributes.Name ? `${item.metals.data[0].attributes.Name}` : ''}</p>
                    </div>
                    <div className="HarParam">
                      <h1>Камень:</h1>
                      <p>Чёрный агат</p>
                    </div>
                    <div className="HarParam">
                      <h1>Размер:</h1>
                      <p>15 – 26</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {active === "setka" && (
              <div className="RazmeriHolder text-white mt-[50px]">
                <div className="RazmeriH1">
                  <h1>Размер российский</h1>
                  <h1>Размер европейский</h1>
                </div>
                <div className="Razmeri">
                  {item.sizes.data.map((size: any) => (
                    <div
                      className="Razmer border-b-[1px] border-white"
                      key={size.id}
                    >
                      <p className="RazmerP">{size.attributes.sizeRU}</p>
                      <p className="RazmerP">{size.attributes.sizeEU}</p>
                    </div>
                  ))}
                </div>
              </div>
                  )}
          </div>
          {active === "name" && (
            <div className="text-white font-semibold text-[16px]">
              <h1 className="text-right text-[25px] font-medium">₽ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h1>
              <div className="LeftPartBottom mt-[300px] w-[304px] flex flex-col space-y-[30px]">
                
                  <div className="RazmerChouseHolder">
                  </div>
                  <div className="WrapHolder">
                    <p className="mb-[10px]">упаковка</p>
                  </div>
                  <div className="flex flex-row justify-between AddToCartHolder">
                    <div className="HowMany text-[18px] text-white flex flex-row border border-white w-[108px] justify-between px-[15px] py-[10px]">
                      <button onClick={() => changeHowMany("-")}>
                        <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="15" height="2" fill="white"/>
                        </svg>
                      </button>
                      <p>{howMany}</p>
                      <button onClick={() => changeHowMany("+")}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.75 8.25V15H8.25V8.25H15V6.75H8.25V0H6.75V6.75H0V8.25H6.75Z" fill="white"/>
                        </svg>
                      </button>
                    </div>
                    <button onClick={() => {
                      if (item){
                        const newItemsInCart = [...itemsInCart]
                        newItemsInCart.push({
                          name: item.name,
                          price: item.price,
                          size: age,
                          rock: selectedRock,
                          amount: howMany,
                          wrapper: alignment,
                          pic: item.cover.data.attributes.url,
                        })
                        setItemsInCart(newItemsInCart)
                      }
                      }} className="py-[10px] px-[43.5px] border border-white hover:text-[#161A16] hover:bg-white">В корзину</button>
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

  const data = await fetch(`http://localhost:1337/api/earrings?filters[Slug][$eq]=${params.slug}&populate[rocks][populate]=*&populate[cover]=*&populate[sizes]=*&populate[chain_lenghts]=*&populate[pictures]=*&populate[metals]=*`).then(res => res.json())


  return {
    props: {
      item: data.data[0].attributes
    },
  }
}
