import type { NextApiRequest, NextApiResponse } from 'next'
import { EmailTemplate } from '../../components/EmailTemplate'
import { FormData } from '@/components/FormButton'

import { Resend } from 'resend'

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
      // Se houver dados na resposta, encerramos a rota
      return res.status(201).end()
    } else if (response.error) {
      // Se houver um erro na resposta, lançamos uma exceção
      throw new Error(`Failed to send email: ${response.error.message}`)
    } else {
      // Se a resposta não tiver dados nem erro, consideramos como um erro desconhecido
      throw new Error('Unknown error in email sending')
    }
  } catch (error) {
    // Se ocorrer um erro durante o processamento, retornamos um erro interno do servidor
    console.error(error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
