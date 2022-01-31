import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import Image from "next/image";
import {Context} from '@components/GlobalState/store'
import TestButton from '@components/TestButton';

export default function Menu({mouseOverEvent, mouseOutEvent}:any) {

    const [state, dispatch] = useContext<any>(Context)
    const [active, setActive] = useState<boolean>(false)

    /*const [visible, setVisible] = useState(true)*/

    /*useEffect(() => {
        let prevScroll = window.pageYOffset
        function handleScroll(){
            const currentScroll = window.pageYOffset
            if (prevScroll > currentScroll) {
                setVisible(true)   
              } else {
                setVisible(false)
              }
              prevScroll = currentScroll       
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);*/

    useEffect(() => {
        if (window) { 
            const data = JSON.parse(`${sessionStorage.getItem('ItemsInCart')}`)
            if (data) {
                dispatch({type: "setItems",payload: data})
            } else {
                return
            }
        }
    }, []);

    useEffect(() => {
        console.log("update")
    }, [state])

    return (
        <React.Fragment>
            <div className={` transition-all duration-700 ease-in-out flex flex-row items-end bg-mainGray z-30 h-[114px] relative top-0${/*visible ? 'top-0' : 'top-[-114px]'*/''} left-0 w-full px-[50px] pb-[30px]`}>
                <div className="flex flex-row items-center justify-between w-full h-34px">
                    <div className="flex flex-row items-center">
                        <Link href="/" >
                            <a onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent}>
                                <div className="flex flex-row space-x-[10px] items-center">
                                    <svg width="30" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.274146 15.0997L11.5 0.500002L22.6088 15.0997L11.5 29.5L0.274146 15.0997Z" fill="white"/>
                                    </svg>
                                    <p className="relative bottom-[3px]  font-main text-white font-semibold text-[30px]">oblic</p>
                                </div>
                            </a>
                        </Link>
                        <div className="flex flex-row space-x-[50px] ml-[100px]">
                            <Link href='/catalog'>
                                <a onClick={() => setActive(false)} onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent}>
                                    <div className="h-full border-b border-transparent transition-all ease-in-out duration-100 hover:border-white mb-[-1px]  flex flex-row items-center font-semibold text-[20px] text-white space-x-[15px]">
                                        <p className="h-full relative translate-y-[-10%] ">каталог</p>
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="3" r="2.5" fill="white"/>
                                            <circle cx="13.5" cy="3" r="2.5" fill="white"/>
                                            <circle cx="2.5" cy="14" r="2.5" fill="white"/>
                                            <circle cx="13.5" cy="14" r="2.5" fill="white"/>
                                        </svg>
                                    </div>
                                </a>
                            </Link>
                            <button onClick={() => setActive(!active)} onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} className="mb-[-1px] max-h-[29px] cursor-none border-b border-transparent transition-all ease-in-out duration-100 hover:border-white flex flex-row items-center font-semibold text-[20px] text-white space-x-[15px]">
                                <p className="max-h-[29px] relative translate-y-[-10%] ">меню</p>
                                <svg width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="35" height="2" fill="white"/>
                                    <rect x="10" y="7.5" width="15" height="2" fill="white"/>
                                    <rect x="5" y="14.5" width="25" height="2" fill="white"/>
                                </svg>
                            </button>
                            <Link href='/cart'>
                                <a onClick={() => setActive(false)} onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent}>
                                    <div className="h-full mb-[-1px] border-b border-transparent transition-all ease-in-out duration-100 hover:border-white  flex flex-row items-center font-semibold text-[20px] text-white space-x-[15px]">
                                        <p className="h-full relative translate-y-[-10%] ">корзина</p>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.875 17.375C7.22018 17.375 7.5 17.0952 7.5 16.75C7.5 16.4048 7.22018 16.125 6.875 16.125C6.52982 16.125 6.25 16.4048 6.25 16.75C6.25 17.0952 6.52982 17.375 6.875 17.375Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M15.625 17.375C15.9702 17.375 16.25 17.0952 16.25 16.75C16.25 16.4048 15.9702 16.125 15.625 16.125C15.2798 16.125 15 16.4048 15 16.75C15 17.0952 15.2798 17.375 15.625 17.375Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M1.875 3.625H4.375L6.25 14.25H16.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6.25 11.75H15.9937C16.066 11.7501 16.1361 11.725 16.192 11.6793C16.2479 11.6335 16.2862 11.5697 16.3004 11.4988L17.4254 5.87383C17.4345 5.82847 17.4334 5.78166 17.4222 5.73678C17.4109 5.69191 17.3899 5.65008 17.3606 5.61431C17.3312 5.57855 17.2943 5.54974 17.2525 5.52997C17.2107 5.5102 17.165 5.49997 17.1187 5.5H5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        {   state.itemsInCart.length > 0 &&
                                            
                                            <div className='bg-white rounded-full h-[16px] w-[16px] text-[12px] flex justify-center items-center font-main font-extrabold text-[#292A2D]'>
                                                {state.itemsInCart.length}
                                            </div>
                                        }
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row w-[80px] justify-between">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M24.3125 12.5712C24.3125 6.04792 19.0232 0.758667 12.5 0.758667C5.97676 0.758667 0.6875 6.04792 0.6875 12.5712C0.6875 18.4669 5.00645 23.3538 10.6543 24.2408V15.9868H7.65424V12.5712H10.6543V9.96873C10.6543 7.00874 12.4183 5.3724 15.1162 5.3724C16.4087 5.3724 17.7608 5.60337 17.7608 5.60337V8.51062H16.2705C14.804 8.51062 14.3452 9.42082 14.3452 10.3563V12.5712H17.621L17.0979 15.9868H14.3457V24.2418C19.9936 23.3553 24.3125 18.4685 24.3125 12.5712Z" fill="white"/>
                    </svg>
                    <a onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} href="https://www.instagram.com/oblic.jewelry/" target="_blank" >
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4217 3.65607C19.726 3.65997 20.9757 4.17981 21.8979 5.10206C22.8202 6.02432 23.34 7.27404 23.3439 8.5783V18.4217C23.34 19.726 22.8202 20.9757 21.8979 21.8979C20.9757 22.8202 19.726 23.34 18.4217 23.3439H8.5783C7.27404 23.34 6.02432 22.8202 5.10206 21.8979C4.17981 20.9757 3.65997 19.726 3.65607 18.4217V8.5783C3.65997 7.27404 4.17981 6.02432 5.10206 5.10206C6.02432 4.17981 7.27404 3.65997 8.5783 3.65607H18.4217ZM18.4217 1.6875H8.5783C4.78828 1.6875 1.6875 4.78828 1.6875 8.5783V18.4217C1.6875 22.2117 4.78828 25.3125 8.5783 25.3125H18.4217C22.2117 25.3125 25.3125 22.2117 25.3125 18.4217V8.5783C25.3125 4.78828 22.2117 1.6875 18.4217 1.6875Z" fill="white"/>
                            <path d="M19.8982 8.57837C19.6062 8.57837 19.3207 8.49177 19.0779 8.32952C18.8351 8.16728 18.6458 7.93667 18.5341 7.66686C18.4223 7.39706 18.3931 7.10017 18.4501 6.81374C18.507 6.52732 18.6477 6.26422 18.8542 6.05772C19.0607 5.85122 19.3238 5.71059 19.6102 5.65362C19.8966 5.59664 20.1935 5.62588 20.4633 5.73764C20.7331 5.8494 20.9637 6.03865 21.126 6.28147C21.2882 6.52429 21.3748 6.80977 21.3748 7.10181C21.3752 7.29583 21.3373 7.48802 21.2633 7.66736C21.1892 7.84669 21.0805 8.00963 20.9433 8.14683C20.8061 8.28402 20.6431 8.39277 20.4638 8.46682C20.2845 8.54088 20.0923 8.57879 19.8982 8.57837ZM13.5 9.56239C14.2788 9.56239 15.0401 9.79333 15.6876 10.226C16.3352 10.6587 16.8399 11.2737 17.1379 11.9932C17.436 12.7127 17.5139 13.5044 17.362 14.2683C17.2101 15.0321 16.835 15.7337 16.2843 16.2844C15.7337 16.8351 15.032 17.2101 14.2682 17.3621C13.5044 17.514 12.7126 17.436 11.9931 17.138C11.2736 16.84 10.6586 16.3353 10.2259 15.6877C9.79326 15.0402 9.56232 14.2789 9.56232 13.5001C9.56344 12.4561 9.97866 11.4552 10.7169 10.7169C11.4551 9.97873 12.456 9.56351 13.5 9.56239ZM13.5 7.59382C12.3318 7.59382 11.1899 7.94021 10.2187 8.5892C9.24739 9.23819 8.49037 10.1606 8.04334 11.2398C7.59631 12.3191 7.47935 13.5066 7.70724 14.6523C7.93513 15.798 8.49765 16.8504 9.32365 17.6764C10.1497 18.5024 11.202 19.0649 12.3477 19.2928C13.4934 19.5207 14.681 19.4038 15.7602 18.9567C16.8394 18.5097 17.7619 17.7527 18.4109 16.7814C19.0598 15.8101 19.4062 14.6682 19.4062 13.5001C19.4062 11.9336 18.784 10.4314 17.6763 9.32372C16.5687 8.21608 15.0664 7.59382 13.5 7.59382Z" fill="white"/>
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
            <div className={`px-[50px] bg-mainGray items-center flex flex-row justify-between w-full top-[114px] z-[29] h-[calc(100vh-114px)] absolute transition-all duration-500 ease-in-out ${active ? "translate-y-[0%]" : "translate-y-[-120%]"}`}>
                <div className="flex flex-col space-y-[25px] text-white text-[30px] font-semibold  font-main">
                    <Link href='/'>
                        <a onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} className='border-b border-transparent hover:border-white w-fit' onClick={() => setActive(!active)}>
                            Главная
                        </a>
                    </Link>
                    <Link href='/catalog'>
                        <a onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} className='border-b border-transparent hover:border-white w-fit' onClick={() => setActive(!active)}>
                            Каталог
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} className='border-b border-transparent hover:border-white w-fit' onClick={() => setActive(!active)}>
                            О бренде
                        </a>
                    </Link>
                    <Link href='/contacts'>
                        <a onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} className='border-b border-transparent hover:border-white w-fit' onClick={() => setActive(!active)}>
                            Контакты
                        </a>
                    </Link>
                    <Link href='/faq'>
                        <a onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} className='border-b border-transparent hover:border-white w-fit' onClick={() => setActive(!active)}>
                            FAQ
                        </a>
                    </Link>
                    {/*<Link href=''>
                        <a onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} className='border-b border-transparent hover:border-white w-fit' onClick={() => setActive(!active)}>                           
                            Журнал
                        </a>
                    </Link>*/}
                </div>
                <div className="h-[434px] justify-items-end relative flex flex-col text-white text-[100px] font-normal  font-main">
                    <h1 className="leading-[137px] absolute z-[9999] top-0 left-[50%] translate-x-[-50%] ">меню</h1>
                    <div className="z-20 mt-auto h-[350px]">
                        <Image
                            src='/Menu Picture.png'
                            alt="Menu Picture"
                            width={750}
                            height={350}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
