/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'
import { EmailTemplate } from '../../components/EmailTemplate'
import { FormData } from '@/components/FormButton'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method !== 'POST') {
      res.status(405).end()
      return
    }

    const { name, email, message }: FormData = req.body

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['pedro.klein.sl@gmail.com'],
      subject: `Novo contato de: ${name}`,
      react:
        EmailTemplate({
          name,
          email,
          message,
        }) || '',
    })

    if (error) {
      res.status(400).json(error)
      return
    }

    res.status(200).json(data)
  } catch (error) {
    console.error('Erro ao processar a requisição:', error)
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
}
