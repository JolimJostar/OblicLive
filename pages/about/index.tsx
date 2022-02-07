import React from 'react'
import Image from "next/image";

export default function index() {
    return (
        <div className="relative px-[50px] pb-[50px] pt-[77px] text-white font-main max-w-[1440px] mx-auto -my-0">
            <h1 className='gradient-text font-main font-light text-[80px] text-white inline-block leading-[110px]'>Сущность oblic</h1>
            <div className='mt-[100px] h-[518px] flex flex-row'>
                <div className='w-[300px] h-[400px] '>
                    <Image src="/About1.jpg" width={300} height={400} alt="Bartender wearing the ring" />
                </div>
                <div className='w-[378px] h-[391px] self-end ml-[100px]'>
                    <Image src="/About2.jpg" width={378} height={391} alt="Ring" />
                </div>
                <div className='w-[480px] flex flex-col space-y-[30px] ml-[80px] relative top-[10px]'>
                    <h1 className='font-medium text-[65px] leading-[89px]'>— идея бренда</h1>
                    <p className='text-[20px] font-normal leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className='mt-[120px] h-[580px] pl-[50px] flex flex-row justify-between'>
                <div className='w-[465px] h-[500px] self-end '>
                    <Image src="/About3.jpg" width={465} height={500} alt="Bartender wearing the ring" />
                </div>
                <div className='w-[660px] h-[391px] self-start '>
                    <Image src="/About4.jpg" width={660} height={391} alt="Ring" />
                </div>
            </div>
            <div className='mt-[150px] pl-[200px] '>
                <div className='flex flex-row justify-between space-x-[50px]'>
                    <div className='w-[465px] h-[296px]'>
                        <Image src="/About5.jpg" width={465} height={296} alt="Ring" />
                    </div>
                    <div className='w-[625px] flex flex-col space-y-[15px]'>
                        <h1 className='font-medium text-[30px] leading-[41px]'>— Заголовок 1</h1>
                        <p className='font-normal text-[18px] leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                    </div>
                </div>
                <div className='pl-[140px] mt-[150px] '>
                    <div className='w-[660px] h-[391px]'>
                        <Image src="/About6.jpg" width={660} height={391} alt="two man sitting in a bar" />
                    </div>
                </div>
                <div className='mt-[150px] flex flex-row justify-between'>
                    <div className='max-w-[625px] flex flex-col space-y-[15px]'>
                        <h1 className='font-medium text-[30px] leading-[41px]'>— Заголовок 2</h1>
                        <p className='font-normal text-[18px] leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                    </div>
                    <div className='w-[465px] h-[296px]'>
                        <Image src="/About7.jpg" width={465} height={296} alt="two man sitting in a bar" />
                    </div>
                </div>
            </div>
            <h1 className=' gradient-text absolute bottom-[625px] left-[-550px] -rotate-90 font-light text-[110px] '>oblic | ювелирные объекты</h1>
        </div>  
    )
}
