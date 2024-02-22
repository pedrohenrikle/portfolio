import type { NextApiRequest, NextApiResponse } from 'next'
import { EmailTemplate } from '../../components/EmailTemplate'
import { FormData } from '@/components/FormButton'

import { Resend } from 'resend'
import { setCookie } from 'nookies'

const resend = new Resend(`${process.env.RESEND_API_KEY}`)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { email, name, message }: FormData = req.body

    const response = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['pedro.klein.sl@gmail.com'],
      subject: `Novo contato de: ${name}`,
      text: 'E-mail de contato',
      react: EmailTemplate({ name, email, message }),
      headers: {
        'X-Entity-Ref-ID': '123456789',
      },
      tags: [
        {
          name: 'category',
          value: 'confirm_email',
        },
      ],
    })

    if (response.data) {
      // Se houver dados na resposta, encerre a rota

      // Define um cookie indicando que o usuário já entrou em contato
      setCookie({ res }, '@portfolio:voted', 'true', {
        maxAge: 60 * 60 * 24 * 1, // 1 day
        path: '/', // Especifica o caminho do cookie
      })

      return res.status(201).end()
    } else if (response.error) {
      // Se houver um erro na resposta, lance uma exceção
      throw new Error(`Failed to send email: ${response.error.message}`)
    } else {
      // Se a resposta não tiver dados nem erro, considere como um erro desconhecido
      throw new Error('Unknown error in email sending')
    }
  } catch (error) {
    // Se ocorrer um erro durante o processamento, retorne um erro interno do servidor
    return res.status(500).json({ error: 'Internal server error' })
  }
}
