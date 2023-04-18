import React, { useState } from 'react'

type useForm = [
  { [key: string]: string },
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
]

interface FormValues {
  [key: string]: string
}

export default function useForm(initialState: FormValues): useForm {
  const [values, setValues] = useState(initialState)

  const reset = () => {
    setValues(initialState)
  }

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(target.name)
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  return [values, handleInputChange, reset]
}
