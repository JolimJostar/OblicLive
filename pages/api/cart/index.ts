import Bitrix from '@2bad/bitrix'

export default async function handler(req: any, res:any) {

  const bitrix =  Bitrix('https://b24-oi8hy7.bitrix24.ru/rest/7/ex5e9ytkcfobwq10')

  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });return
  }
  if (req.method === 'POST') {

    const body = req.body

    if (body.name && body.phone && body.email && body.summ && body.itemsInCart[0]){

      let COMMENTS = `
      Контакты клиента 
      <br/> Почта: ${body.email} 
      <br/> Телефон: ${body.phone} 
      <br/> Сумма: ${body.summ}
      <br/> Способ доставки: ${body.typeOfDelivery}
      ${body.typeOfDelivery !== 'Самовывоз' ? 
      `
      <br/> Город: ${body.sity}
      <br/> Адресс: ${body.adress}
      `
      : 
      ''
      }
      `

      body.itemsInCart.forEach((item:any, i:any) => {
        
        COMMENTS = COMMENTS.concat(`
          <br/><br/>
          <br/><br/>
          Товар ${i}
          <br/><br/>
          <br/> Имя объекта: ${item.name}
          <br/> Цена объекта: ${item.price}
          <br/> Размер объекта: ${item.size}
          <br/> Камень объекта: ${item.rock}
          <br/> Кол-во объекта: ${item.amount}
          <br/> Упаковка объекта: ${item.wrapper}
          `)
      });

      bitrix.leads.create({

        OPPORTUNITY: body.summ.toString(),

        COMMENTS: COMMENTS,

        TITLE: body.name,

      }, {

        REGISTER_SONET_EVENT: 'Y'

      })

      try {

        res.redirect(307, '/success')

      } catch {

        res.status(500).send({ error: 'failed' })

      }
    } else {

      res.status(501).json({ message: 'Ne hvataet chegoto v korzine' })
      
    }
    return
  }
  }