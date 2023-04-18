import React, { useEffect, useState } from 'react'

type FormState = [
  { [key: string]: string },
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
]

export const useForm = (initialState: { [key: string]: string }): FormState => {
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
