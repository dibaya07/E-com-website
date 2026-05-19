import { clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)
    const client = await clerkClient()
    // console.log("evt", evt)
    if (evt.type === 'user.created') {
      const userId = evt.data.id

      await client.users.updateUserMetadata(userId || "", {
        publicMetadata: {
          role: 'user',
        },
      })
      console.log("user is created now save the users details in database ")
      return NextResponse.json({message: "user created", role : "user"})
    }
    // else if(evt.type === "session.created"){
    //   if(evt.data.user?.public_metadata.role === "user"){
    //     console.log("user is logged in now  ")
    //     return NextResponse.json({message: "user logged in", role : "user"})
    //   }else{
    //     return NextResponse.json({message: "Admin logged in", role : "admin"})
    //   }
    // }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}

// // export async function GET() {
// //   return Response.json({ message: 'Hello World!' })
// // }




// // return NextResponse.redirect("http://localhost:3000/products")
// // console.log(evt.type)
// // return NextResponse.redirect("http://localhost:3000")
// // console.log(evt.type)