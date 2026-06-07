import { db } from './firebase'
import { ref, push, serverTimestamp } from 'firebase/database'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_x10uggs'
const EMAILJS_TEMPLATE_ID = 'template_b6o3pwe'
const EMAILJS_PUBLIC_KEY = 'itO7c32ZDcBwPdEr2'

export interface ContactMessage {
  name: string
  email: string
  message: string
}

export async function sendContactMessage(data: ContactMessage): Promise<boolean> {
  try {
    // 1. Save to Firebase Realtime Database
    const messagesRef = ref(db, 'messages')
    await push(messagesRef, {
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: serverTimestamp(),
      read: false,
    })
    console.log('[v0] Message saved to Firebase!')

    // 2. Send email notification via EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      EMAILJS_PUBLIC_KEY
    )
    console.log('[v0] Email notification sent!')

    return true
  } catch (error) {
    console.error('[v0] Error sending message:', error)
    return false
  }
}
