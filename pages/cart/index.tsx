import CartItem from '@components/Cart/CartItem';
import CartChose from '@components/CartDostavka/CartChose'
import TestButton from '@components/TestButton';
import InputMask from 'react-input-mask';
import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'


export default function Index({mouseOverEvent, mouseOutEvent}:any) {

    function handleSumbmit(e:any){
        e.preventDefault();
        const temp = {...inputValues}
        temp.itemsInCart = itemsInCart
        temp.summ = summ
        sendZakaz(temp)
    }

    async function sendZakaz(data:any){
        data = await fetch('/api/cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        setUrl(data.url)
    }
    
    const router = useRouter()
    const [value, setValue] = useState('Самовывоз')
    const [itemsInCart, setItemsInCart] = useState<any>([])
    const [summ, setSumm] = useState(0)
    const [url, setUrl] = useState('')
 
    const [inputValues, setInputValues] = useState({
        itemsInCart: null,
        name: '',
        phone: '',
        email: '',
        typeOfDelivery: value,
        sity: '',
        adress: '',
        summ: summ
    })

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
        if (url){
            sessionStorage.clear();
            router.push(url)
        }
        let tempSumm = 0
        itemsInCart.map((item:any) => {
            tempSumm = tempSumm + item.price*item.amount
            setSumm(tempSumm)
        })
    }, [url, itemsInCart])

    return (
        <div className='px-[50px] pt-[27px] pb-[100px] flex flex-col font-main text-white'>
            <h1 className='mb-[50px] text-[80px] gradient-text w-max'>oblic | корзина</h1>
            <form onSubmit={(e) => handleSumbmit(e)} className='relative flex flex-row justify-between'>
                <div className='flex flex-col space-y-[50px]'>
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
                    {summ < 60000 ? 
                        <div className='flex flex-col space-y-[30px]'>
                            <h1>Доставка</h1>
                            <div className='grid grid-cols-3'>
                                <div className='flex flex-col space-y-[10px] w-[152px]'>
                                    <p>Способ доставки</p>
                                    <CartChose  
                                        mouseOverEvent={mouseOverEvent} 
                                        mouseOutEvent={mouseOutEvent} 
                                        value={value} 
                                        setValue={setValue}
                                    />
                                </div>
                                {value === 'Самовывоз' ? 
                                    <div className='text-[18px] text-gray'>
                                        <p>*Самовывоз по адресу: <br /> Москва, Басманный типик, 10/12</p>
                                    </div>
                                    
                                    : 
                                    <React.Fragment >
                                        <div className='flex flex-col space-y-[10px]'>
                                            <p>Город</p>
                                            <input 
                                                onMouseEnter={mouseOverEvent} 
                                                onMouseLeave={mouseOutEvent} 
                                                className='pr-[20px] outline-none' 
                                                type="text" 
                                                placeholder='Ваш город' 
                                                onChange={(event:any) => {
                                                    const temp = {...inputValues}
                                                    temp.sity = event.target.value
                                                    setInputValues(temp)
                                                }}
                                                required
                                            />
                                        </div>
                                        <div className='flex flex-col space-y-[10px]'>
                                            <p>Адрес</p>
                                            <input 
                                                onMouseEnter={mouseOverEvent} 
                                                onMouseLeave={mouseOutEvent} 
                                                className='pr-[20px] outline-none' 
                                                type="text"
                                                placeholder='Адрес доставки'
                                                onChange={(event:any) => {
                                                    const temp = {...inputValues}
                                                    temp.adress = event.target.value
                                                    setInputValues(temp)
                                                }} 
                                                required
                                            />
                                        </div>
                                    </React.Fragment>
                                }
                            </div>
                        </div>
                    :
                        <p className='w-[404px] font-medium text-[18px]'>*По достижению суммы в 60.000 ₽ и более, заказ считается оптом.<br/><br/>Для оформления отправьте запрос на покупку и менеджер свяжется с вами.</p>
                    }
                </div>
                <div className='w-[404px]'>
                    <h1 className='mb-[30px]'>Ваш заказ</h1>
                    <div>
                        {itemsInCart.map((item:any) => (
                        <CartItem key={Math.random()} item={item} />
                        ))}
                        
                    </div>
                    <div className='flex flex-row justify-between'>
                        <h3>Всего:</h3>
                        <p>₽ {summ.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                    </div>
                </div>
                <div className='absolute left-0 bottom-[-150px]'>
                    <button 
                        onMouseEnter={mouseOverEvent} 
                        onMouseLeave={mouseOutEvent} 
                        type='submit' 
                        className='hover:bg-white hover:text-[#161A16] border border-white px-[30px] py-[10px]'
                    >
                        {summ < 60000 ? 'Оформить заказ' : 'Отправить запрос на покупку'}
                    </button>
                </div>
            </form>
        </div>
    )
}
