import { clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'
import { User } from '@/models/user'
import connected from '@/config/dbConnect'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)
    const client = await clerkClient()
    if (evt.type === 'user.created') {
      const userId = evt.data.id;

      await client.users.updateUserMetadata(userId || "", {
        publicMetadata: {
          role: 'test1',
        },
      })

      await connected()
      await User.create({
        clerkId: evt.data.id,
        email: evt.data.email_addresses[0].email_address,
        role: "user"
      })
      return NextResponse.json({ message: "user created", role: "user" })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}
