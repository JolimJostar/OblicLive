import CartItem from '@components/Cart/CartItem';
import CartChose from '@components/CartDostavka/CartChose'
import {Context} from '@components/GlobalState/store'
import TestButton from '@components/TestButton';
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import FormNameEmailPhone from '@components/Cart/FormNameEmailPhone';
import ItemsInCart from '@components/Cart/ItemsInCart';


export default function Index({mouseOverEvent, mouseOutEvent}:any) {

    const [state, dispatch] = useContext<any>(Context)

    function handleSumbmit(e:any){
        e.preventDefault();
        const temp = {...inputValues}
        temp.itemsInCart = itemsInCart
        temp.summ = summ
        sendZakaz(temp)
        dispatch({type: "setItems",payload: []})
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
        itemsInCart: [],
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
        console.log(itemsInCart)
        if (itemsInCart[0]){
            itemsInCart.map((item:any) => {
                tempSumm = tempSumm + item.price*item.amount         
                setSumm(tempSumm)
            })
        } else {
            setSumm(0)
        }
    }, [url, itemsInCart])

    return (
        <div className='px-[50px] pt-[27px] pb-[100px] flex flex-col font-main text-white'>
            <h1 className='mb-[50px] text-[80px] gradient-text w-max font-light leading-[109px]'>oblic | корзина</h1>
            <form onSubmit={(e) => handleSumbmit(e)} className='relative flex flex-row justify-between'>
                <div className='flex flex-col space-y-[50px]'>
                    <FormNameEmailPhone 
                        mouseOverEvent={mouseOverEvent} 
                        mouseOutEvent={mouseOutEvent} 
                        inputValues={inputValues} 
                        setInputValues={setInputValues} 
                    />
                    {summ < 60000 ? 
                        <div className='flex flex-col space-y-[30px]'>
                            <h1 className='font-medium text-[25px] leading-[34px]'>Доставка</h1>
                            <div className='flex space-x-[150px] items-end'>
                                <div className='flex flex-col space-y-[10px] w-[152px]'>
                                    <p className='font-semibold text-[18px] leading-[25px]'>Способ доставки</p>
                                    <CartChose  
                                        mouseOverEvent={mouseOverEvent} 
                                        mouseOutEvent={mouseOutEvent} 
                                        value={value} 
                                        setValue={setValue}
                                        setInputValues={setInputValues}
                                        inputValues={inputValues}
                                    />
                                </div>
                                {value === 'Самовывоз' ? 
                                    <div className='text-[18px] text-gray relative left-[-50px] leading-[25px] font-medium'>
                                        <p>*Самовывоз по адресу: <br /> Большой Трехсвятительский переулок, 2/1 с.8, Москва, 109028</p>
                                    </div>
                                    
                                    : 
                                    <React.Fragment >
                                        <div className='flex flex-col space-y-[10px]'>
                                            <p className='font-semibold text-[18px] leading-[25px]'>Город</p>
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
                                            <p className='font-semibold text-[18px] leading-[25px]'>Адрес</p>
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
                    <ItemsInCart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} summ={summ} />
                </div>
            </form>
            <div className='absolute left-50 bottom-[100px]'>
                    <button 
                        disabled={itemsInCart[0] ? false : true}
                        onMouseEnter={mouseOverEvent} 
                        onMouseLeave={mouseOutEvent} 
                        type='submit' 
                        className={`${itemsInCart[0] ? 'hover:bg-white hover:text-[#161A16] border-white ' : 'border-gray text-gray'} border px-[30px] py-[10px] font-semibold text-[18px] leading-[24px] font-main`}
                    >
                        {summ < 60000 ? 'Оформить заказ' : 'Оформить запрос на покупку'}
                    </button>
                </div>
        </div>
    )
}
