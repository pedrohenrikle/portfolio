/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Dialog from '@radix-ui/react-dialog'
import { MousePointerClick } from 'lucide-react'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

export interface FormData {
  name: string
  email: string
  message: string
}

export function FormButton() {
  const { register, handleSubmit, formState, setValue, setError } =
    useForm<FormData>()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.email && !isEmailValid(data.email)) {
      setError('email', {
        type: 'pattern',
        message: 'Por favor, insira um email válido',
      })
      return
    }

    if (!data.name || !data.message) {
      if (!data.name) {
        setError('name', { type: 'required', message: 'Nome é obrigatório' })
      }

      if (!data.message) {
        setError('message', {
          type: 'required',
          message: 'Mensagem é obrigatória',
        })
      }

      return
    }

    try {
      const response = await fetch('/api/send.api.ts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorMessage = await response.text()
        throw new Error(`Erro ao enviar os dados. Detalhes: ${errorMessage}`)
      }

      setValue('name', '')
      setValue('email', '')
      setValue('message', '')

      alert('Obrigado pelo contato!')
      setIsDialogOpen(false)
    } catch (error) {
      console.error('Erro ao enviar os dados:', error)
    }
  }

  return (
    <Dialog.Root
      open={isDialogOpen}
      onOpenChange={(open) => setIsDialogOpen(open)}
    >
      <Dialog.Trigger asChild>
        <button
          className="flex w-fit text-3xl max-[676px]:text-2xl max-[676px]:py-2 duration-200 shadow-inner shadow-slate-950 font-bold px-14 py-5 rounded-full bg-gradient-to-br hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 text-zinc-800 hover:text-rose-50 transition-all items-center gap-4"
          onClick={() => setIsDialogOpen(true)}
        >
          CLIQUE AQUI
          <MousePointerClick className="w-8 h-8" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA8 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-900 p-6  focus:outline-none">
          <div className="flex gap-2 pl-4">
            <span className="w-4 h-4 bg-yellow-500 hover:bg-yellow-700 transition-all rounded-full" />
            <span className="w-4 h-4 bg-green-500 hover:bg-green-700 transition-all rounded-full" />
          </div>
          <Dialog.Title className="text-slate-200 m-0 text-2xl font-semibold pt-6">
            Contato
          </Dialog.Title>
          <Dialog.Description className="text-slate-400 mt-[10px] mb-5 text-base leading-relaxed text-justify">
            Desbravando linhas de código e moldando o amanhã digital. Vamos
            programar um futuro incrível, cheio de inovações e conquistas no
            mundo da tecnologia juntos?
          </Dialog.Description>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(onSubmit)()
              }}
              method="post"
            >
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label
                  className="text-slate-100 w-[90px] text-right text-[15px] font-semibold"
                  htmlFor="name"
                >
                  Nome
                </label>
                <input
                  className="text-slate-100 bg-slate-800 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-3 text-[15px] leading-none outline-none focus:shadow-[0_0_0_2px]"
                  id="name"
                  placeholder="John Doe"
                  required
                  {...register('name')}
                />
                {formState.errors.name && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.name.message}
                  </p>
                )}
              </fieldset>

              <div className="flex w-full justify-end">
                {formState.errors.email && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.email.message}
                  </p>
                )}
              </div>

              <fieldset className="mb-[15px] flex items-center gap-5">
                <label
                  className="text-slate-100 w-[90px] text-right text-[15px] font-semibold"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className="text-slate-100 bg-slate-800 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-3 text-[15px] leading-none outline-none focus:shadow-[0_0_0_2px]"
                  id="email"
                  placeholder="john.doe@email.com"
                  required
                  {...register('email')}
                />
              </fieldset>

              <fieldset className="mb-[15px] flex items-start gap-5">
                <label
                  className="text-slate-100 w-[90px] text-right text-[15px] font-semibold"
                  htmlFor="message"
                >
                  Mensagem
                </label>
                <textarea
                  className="text-slate-100 bg-slate-800 focus:shadow-violet8 inline-flex min-h-[5rem] w-full flex-1 items-center justify-center rounded-[4px] px-3 py-2 text-sm leading-relaxed outline-none  resize-none"
                  id="message"
                  placeholder="O que acha de..."
                  required
                  {...register('message')}
                />
                {formState.errors.message && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.message.message}
                  </p>
                )}
              </fieldset>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="flex w-fit text-xl max-[676px]:text-2xl max-[676px]:py-2 duration-200 shadow-inner shadow-slate-950 font-bold px-4 py-2 rounded-full bg-gradient-to-br hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 text-zinc-800 hover:text-rose-50 transition-all items-center gap-4"
                >
                  {formState.isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="bg-red-500 hover:bg-red-700 transition-all absolute top-6 left-4 inline-flex h-4 w-4 appearance-none rounded-full focus:outline-none"
              aria-label="Close"
              type="button"
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
