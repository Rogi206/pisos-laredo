"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres"),
  phone: z.string().min(9, "Teléfono inválido"),
  email: z.string().email("Email inválido"),
  subject: z.string().optional(),
  message: z.string().min(10, "Mínimo 10 caracteres").max(1000, "Máximo 1000 caracteres"),
})

export type ContactFormState = {
  success?: boolean
  errors?: {
    name?: string
    phone?: string
    email?: string
    subject?: string
    message?: string
    _form?: string
  }
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const result = contactSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    subject: formData.get("subject") || undefined,
    message: formData.get("message"),
  })

  if (!result.success) {
    const errors: ContactFormState["errors"] = {}
    for (const err of result.error.errors) {
      const field = err.path[0] as keyof NonNullable<ContactFormState["errors"]>
      if (!errors[field]) errors[field] = err.message
    }
    return { errors }
  }

  const body = new FormData()
  body.append("name", result.data.name)
  body.append("phone", result.data.phone)
  body.append("email", result.data.email)
  if (result.data.subject) body.append("subject", result.data.subject)
  body.append("message", result.data.message)
  body.append("_replyto", result.data.email)

  try {
    const response = await fetch(
      `https://formspree.io/f/${process.env.FORMSPREE_ID}`,
      { method: "POST", body, headers: { Accept: "application/json" } }
    )
    if (!response.ok) return { errors: { _form: "Error al enviar. Inténtalo de nuevo." } }
    return { success: true }
  } catch {
    return { errors: { _form: "Error de conexión. Inténtalo de nuevo." } }
  }
}
