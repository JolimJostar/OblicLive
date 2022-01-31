import TestButton from '@components/TestButton'
import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import PriceFilter from '@components/CatalogFilters/PriceFilter/PriceFilter';
import SizeFilter from '@components/CatalogFilters/SizeFilter/SizeFilter';
import TypeFilter from '@components/CatalogFilters/TypeFilter/TypeFilter';

export default function Index({rings, ringsSizes, chains, chainsSizes, earrings,  mouseOverEvent, mouseOutEvent}:any) {

    const [active, setActive] = useState(false)
    
    const [typeOfFilter, setTypeOfFilter] = React.useState<string | null>(null);
    const [greaterThanNumber, setGreaterThanNumber] = useState('')
    const [smallerThanNumber, setSmallerThanNumber] = useState('')
    const [sizeFilter, setSizeFilter] = useState('')
    const [lenghtFilter, setLenghtFilter] = useState('')

    const [filteredItems, setFilteredItems] = useState([])
    const [unfilteredItems, setUnfilteredItems] = useState<any>([])

    const [height, setHeight] = useState(0)
    const ref = useRef<any>(null)

    const myLoader = ({ src } : any) => {
        return `${src}`
    }


   
    function checkIfGreaterThanTrue(greaterThanNumber:any, item:any){
        if(greaterThanNumber){
            return parseInt(item.attributes.price) > parseInt(greaterThanNumber)
        }
        return true
    }
    function checkIfSmallerThanTrue(smallerThanNumber:any, item:any){
        if(smallerThanNumber){
            return parseInt(item.attributes.price) < parseInt(smallerThanNumber)
        }
        return true
    }
    function checkSizeTrue(sizeFilter:any, item:any){
        if (typeOfFilter === 'кольцо' && sizeFilter){             
            return item.attributes.ring_sizes.data.some((sizeFromData:any) => sizeFilter === sizeFromData.attributes.size)
        } else if (typeOfFilter === 'цепь' && sizeFilter){
            return item.attributes.chain_sizes.data.some((sizeFromData:any) => sizeFilter === sizeFromData.attributes.size)
        }
        return true
    }
    function checkLenghtTrue(lenghtFilter:any, item:any){
        if (typeOfFilter !== 'цепь'){
            return true
        }
        if(lenghtFilter){
            if(item.attributes.chain_lenghts){
                return item.attributes.chain_lenghts.data.some((lenghtFromData:any) => lenghtFilter === lenghtFromData.attributes.lenght)
            }
        }
        return true
    }

    function resetFilter(){
        setTypeOfFilter(null);
        setGreaterThanNumber('');
        setSmallerThanNumber('');
        setSizeFilter('');
        setLenghtFilter('');
        (document.getElementsByClassName("number-separator")[0] as HTMLInputElement).value = '';
        (document.getElementsByClassName("number-separator1")[0] as HTMLInputElement).value = '';
    }

    function filterItems(type:any){
        setFilteredItems(type.filter((item:any) => {
            if (greaterThanNumber || smallerThanNumber || sizeFilter || lenghtFilter){
                console.log(checkSizeTrue(sizeFilter, item))
                console.log(checkIfGreaterThanTrue(greaterThanNumber, item))
                console.log(checkIfSmallerThanTrue(smallerThanNumber, item))
                console.log(checkLenghtTrue(lenghtFilter, item))
                return (
                    checkIfGreaterThanTrue(greaterThanNumber, item)
                    &&
                    checkIfSmallerThanTrue(smallerThanNumber, item)
                    &&
                    checkSizeTrue(sizeFilter, item)
                    &&
                    checkLenghtTrue(lenghtFilter, item)
                )
            } else {
                return true
            }
        }))
    }

    useEffect(() => {
        if (unfilteredItems !== null){
            if (typeOfFilter === 'цепь'){
                filterItems(chains)
            } else if ( typeOfFilter === 'кольцо' ) {
                filterItems(rings)
            } else if ( typeOfFilter === 'серьги' ) {
                filterItems(earrings)
            } else {
                filterItems(unfilteredItems)
            }
        }
    }, [unfilteredItems, typeOfFilter, greaterThanNumber, smallerThanNumber, sizeFilter, lenghtFilter])

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    }, [filterItems])

    useEffect(() => {
        setUnfilteredItems([...rings, ...chains, ...earrings])
        
    }, [rings, chains, earrings])

    useEffect(() => {
        function handleScroll(){
            const currentScroll = window.pageYOffset
            if (currentScroll > 114) {
                setActive(true)   
              } else {
                setActive(false)
              }       
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (
        <React.Fragment >
            <div className={`pl-[220px] pr-[20px] transition-all duration-700 ease-in-out pb-[50px] flex flex-col space-y-[50px]`}>
                <div className={` sticky top-[0] transition-all duration-700 ease-in-out z-20 bg-mainGray h-[132px] pt-[30px] w-full ${active && 'w-screen'}`}>
                    <div className={`flex flex-row justify-between max-w-[1170px] w-full `}>
                        <div className={`flex flex-row space-x-[100px] transition-all duration-700 ease-in-out ${active ? 'relative right-[180px]' : 'relative right-0'}`}>
                            <div className='flex flex-col space-y-[15px]' >
                                <p className='text-gray font-semibold text-[18px] font-main'>категория:</p>
                                <TypeFilter 
                                    mouseOverEvent={mouseOverEvent} 
                                    mouseOutEvent={mouseOutEvent} 
                                    value={typeOfFilter} 
                                    setValue={setTypeOfFilter}
                                />
                            </div>
                            <div className='flex flex-col space-y-[15px]'>
                                <p className='text-gray font-semibold text-[18px] font-main'>стоимость:</p>
                                <PriceFilter 
                                    mouseOverEvent={mouseOverEvent} 
                                    mouseOutEvent={mouseOutEvent}
                                    setSmallerThanNumber={setSmallerThanNumber} 
                                    smallerThanNumber={smallerThanNumber} 
                                    greaterThanNumber={greaterThanNumber} 
                                    setGreaterThanNumber={setGreaterThanNumber} 
                                />
                            </div>
                            <div className='flex flex-col space-y-[15px]'>
                                <p className='text-gray font-semibold text-[18px] font-main'>{typeOfFilter !== 'цепь' ? 'размер:' : 'длинна цепи:'}</p>
                                <SizeFilter 
                                    ringsSizes={ringsSizes}
                                    chainsSizes={chainsSizes}
                                    mouseOverEvent={mouseOverEvent} 
                                    mouseOutEvent={mouseOutEvent}
                                    typeOfFilter={typeOfFilter} 
                                    value={typeOfFilter !== 'цепь' ? sizeFilter : lenghtFilter } 
                                    setValue={ typeOfFilter !== 'цепь' ? setSizeFilter : setLenghtFilter } 
                                />
                            </div>
                        </div>
                        <div className='grid items-end'>
                            <button 
                                onMouseEnter={mouseOverEvent} 
                                onMouseLeave={mouseOutEvent} 
                                onClick={() => resetFilter()} 
                                className='hover:bg-white h-[32px] cursor-none hover:text-[#292A2D] transition-testAnim duration-200 max-h-[fit-content] px-[15px] py-[4px] border border-white text-white font-semibold font-main text-[16px] leading-[22px]'
                            >
                                Сброс
                            </button>
                        </div>
                    </div>
                </div>
                <div ref={ref} className="flex flex-wrap space-y-reverse space-x-reverse space-y-[50px] space-x-[30px]">
                    {filteredItems ? filteredItems.map((item:any, id:any) => 
                            <div key={item.attributes.slug} className={id === 0 ? 'mr-[30px] mb-[50px]' : ''}>
                                <div className="relative text-[0px]">
                                    <Image
                                        loader={myLoader}
                                        src={item.attributes.cover.data.attributes.url}
                                        alt="Landscape picture"
                                        width={370}
                                        height={370}
                                    />
                                    <Link href={`catalog/${item.attributes.ring_sizes ? 'rings' : item.attributes.chain_sizes ? 'chains' : 'earrings' }/${item.attributes.slug}`}>
                                        <a onClick={mouseOutEvent} onMouseEnter={mouseOverEvent} onMouseLeave={mouseOutEvent}>
                                            <div className="hover:bg-white hover:text-[#292A2D] hover:border-white transition-all duration-300 absolute right-0 bottom-0 px-[20px] py-[10px] border border-mainGray border-solid font-semibold text-[14px] font-main">
                                                Узнать больше 
                                            </div>
                                        </a>
                                    </Link >
                                </div>
                                <div className="text-white font-main font-medium text-[16px] flex flex-row justify-between mt-[20px]">
                                    <p>{item.attributes.name}</p>
                                    <p>₽ {item.attributes.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                                </div>
                            
                            </div>
                    ) : <h1 className='text-white'>Something wrong with the server</h1>}
                </div>
            </div>
            <div style={{'height': height}} className={` absolute  left-[-160px]  top-[506px]  font-main font-light text-[80px] leading-[109px]`}>
                <h1 className='gradient-text sticky top-[358px] -rotate-90 font-light'>oblic | каталог</h1>
            </div>
        </React.Fragment>
    )
}

export async function getServerSideProps() {

    

    function status(res:any){
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return res
    }

    /*Promise.all([
        await fetch('https://oblic-back.herokuapp.com/api/products?sort=name:desc&populate[cover][fields][0]=url&populate[sizes][fields][0]=sizeRU&populate[sizes][fields][0]=sizeEU&fields=name,price,slug'),

        //Get sizes for rings
        await fetch('https://oblic-back.herokuapp.com/api/sizes?sort[0]=sizeRU%3Aasc&fields[0]=sizeRU&fields[1]=sizeEU'),


        //Get Chains
        await fetch('https://oblic-back.herokuapp.com/api/chains?sort=name:desc&populate[cover][fields][0]=url&populate[chain_lenghts][fields][0]=lenght&fields=name,price,slug'),

        //Get Earrings
        await fetch('https://oblic-back.herokuapp.com/api/earrings?sort=name:desc&populate[cover][fields][0]=url&fields=name,price,slug'),

    ]).then(res => )*/


    //Get rings
    const ringsRes = await fetch('https://oblic-back.herokuapp.com/api/rings?sort=name:desc&populate[cover][fields][0]=url&populate[ring_sizes][fields][0]=size&populate[ring_sizes][fields][0]=sizeEU&fields=name,price,slug')
    .then(status)
    .catch(error => {return null})
    const rings = await ringsRes ? await ringsRes.json() : null

    //Get sizes for rings

    const ringsSizesRes= await fetch('https://oblic-back.herokuapp.com/api/ring-sizes?sort[0]=size%3Aasc&fields[0]=size&fields[1]=sizeEU')
    .then(status)
    .catch(error => {return null})
    const ringsSizes = await ringsSizesRes ? await ringsSizesRes.json() : null

    //Get Chains
    const chainsRes = await fetch('https://oblic-back.herokuapp.com/api/chains?sort=name:desc&populate[cover][fields][0]=url&populate[chain_sizes][fields][0]=size&fields=name,price,slug')
    .then(status)
    .catch(error => {return null})
    const chains = await chainsRes ? await chainsRes.json() : null

    //Get sizes for rings

    const chainsSizesRes= await fetch('https://oblic-back.herokuapp.com/api/chain-sizes?sort[0]=size%3Aasc&fields[0]=size')
    .then(status)
    .catch(error => {return null})
    const chainsSizes = await chainsSizesRes ? await chainsSizesRes.json() : null

    //Get Earrings
    const earringsRes = await fetch('https://oblic-back.herokuapp.com/api/earrings?sort=name:desc&populate[cover][fields][0]=url&fields=name,price,slug')
    .then(status)
    .catch(error => {return null})
    const earrings = await earringsRes ? await earringsRes.json() : null


    return {
        props: {
            rings: rings.data,
            chains: chains.data,
            earrings: earrings.data,
            ringsSizes: ringsSizes.data,
            chainsSizes: chainsSizes.data,
        },
    }
}
