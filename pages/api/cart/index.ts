import Bitrix from '@2bad/bitrix'

export default async function handler(req: any, res:any) {

  const bitrix =  Bitrix('https://b24-oi8hy7.bitrix24.ru/rest/7/ex5e9ytkcfobwq10')

  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });return
  }
  if (req.method === 'POST') {

    const body = req.body

    if (body.name && body.phone && body.email && body.summ && body.itemsInCart[0]){

      bitrix.leads.create({

        OPPORTUNITY: body.summ.toString(),

        COMMENTS: `Контакты клиента \n\n\n
        Почта: ${body.email}
        Телефон: ${body.phone}`,

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