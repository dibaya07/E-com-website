import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '@/lib/stripe'

export async function POST(req : NextRequest) {
  try {
    const headersList = await headers()
    const body = await req.json()
    // console.log(body)
    // const amount = Math.ceil( body.price + body.tax ) / 94
    // console.log((amount))

    const origin = headersList.get('origin')
 
    const session = await stripe.checkout.sessions.create({
      line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Total of your cart items',
          },
          unit_amount: body.price + body.tax,
        },
        quantity: 1,
      },
    ],
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    ///success?session_id={CHECKOUT_SESSION_ID}
    
    // if(session.url){
    //     return NextResponse.redirect(session.url, 303)
    // }

    return NextResponse.json({url:session.url})
  } catch (err) {
    console.log(err)
    // return NextResponse.json(
    //   { error: err.message },
    //   { status: err.statusCode || 500 }
    // )
  }
}