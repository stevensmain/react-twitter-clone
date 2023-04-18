'use client'
import { useCallback, useState } from 'react'

import useForm from '@/hooks/useForm'
import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'

import Input from '../Input'
import Modal from '../Modal'

const RegisterModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)
  const [values, handleInputChange, reset] = useForm({
    email: '',
    name: '',
    username: '',
    password: '',
  })

  const onToggle = useCallback(() => {
    if (isLoading) {
      return
    }

    registerModal.onClose()
    loginModal.onOpen()
  }, [isLoading])

  const handleSubmit = () =>
    useCallback(() => {
      try {
        setIsLoading(true)
        // Fecth sign in
        reset()
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }, [registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        disabled={isLoading}
        name="email"
        onChange={handleInputChange}
        type="text"
        value={values.email}
      />
      <Input
        placeholder="Name"
        disabled={isLoading}
        name="name"
        onChange={handleInputChange}
        type="text"
        value={values.name}
      />
      <Input
        placeholder="Username"
        disabled={isLoading}
        name="username"
        onChange={handleInputChange}
        type="text"
        value={values.username}
      />
      <Input
        placeholder="Password"
        disabled={isLoading}
        onChange={handleInputChange}
        type="text"
        value={values.password}
      />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?
        <span
          className="ml-1 text-white cursor-pointer hover:underline"
          onClick={onToggle}
        >
          Sign in
        </span>
      </p>
    </div>
  )

  return (
    <Modal
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit}
      disabled={isLoading}
      title="Create an account"
      actionLabel="Register"
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal
