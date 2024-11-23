'use server'

export async function submitName(formData: FormData) {
  const name = formData.get('name')
  return { message: `Hello ${name}!` }
}

