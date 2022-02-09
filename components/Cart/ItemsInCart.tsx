import React, { useContext } from 'react';
import CartItem from './CartItem';
import {Context} from '@components/GlobalState/store'



export default function ItemsInCart({itemsInCart, setItemsInCart, summ}:any) {

    const [state, dispatch] = useContext<any>(Context)

    function deleteItemFromCart(itemID:any){
        const temp = [...itemsInCart].filter(item => item.id !== itemID)
        setItemsInCart(temp)
        dispatch({type: "setItems",payload: temp})
    }


  return (
      <React.Fragment>
        <h1 className='mb-[30px] text-[25px] font-medium leading-[34px]'>Ваш заказ</h1>
        <div className='flex flex-col space-y-[20px]'>
            {itemsInCart.map((item:any) => (
                <div key={Math.random()}>
                    <CartItem deleteItemFromCart={deleteItemFromCart} item={item} />
                </div>
            ))}
            
        </div>
        <div className='flex flex-row justify-between mt-[50px] font-medium text-[20px] leading-[27px]'>
            <h3>Всего:</h3>
            <p>₽ {summ.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
        </div>
      </React.Fragment>
  );
}
