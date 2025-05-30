import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'
import db from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)
    const body = req.body
    let { data } = evt

    // Do something with payload
    // For this guide, log payload to console

    const eventType = evt.type
    console.group('\n\nReceived webhook...')
    console.log('Received webhook with ID', data.id, 'and event type of', eventType)
    console.log('Webhook payload (data):\n', data)
    console.log('Webhook payload (body):\n', body)
    console.groupEnd()

    if (eventType === 'user.created') {
      let { data } = evt
      await db.insert(users).values({
        clerkId: data.id,
        name: `${data.first_name} ${data.last_name}`,
        imageUrl: data.image_url,
        email: data.email_addresses[0].email_address,
      })
    }

    if (eventType === 'user.deleted') {
      let { data } = evt
      if (!data.id) return new Response('Missing user ID', { status: 400 })
      await db.delete(users).where(eq(users.clerkId, data.id))
    }

    if (eventType === 'user.updated') {
      let { data } = evt
      if (!data.id) return new Response('Missing user ID', { status: 400 })
      await db
        .update(users)
        .set({
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
          email: data.email_addresses[0].email_address,
        })
        .where(eq(users.clerkId, data.id))
    }

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}
