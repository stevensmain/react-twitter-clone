'use client'
import { useForm } from '@/hooks/useForm'
import useLoginModal from '@/hooks/useLoginModal'
import { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'

const LoginModal = () => {
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)
  const [values, handleInputChange, reset] = useForm({
    email: '',
    password: '',
  })

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
    }, [loginModal])

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
        placeholder="Password"
        disabled={isLoading}
        onChange={handleInputChange}
        type="text"
        value={values.password}
      />
    </div>
  )

  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit}
      actionLabel="Sign in"
      title="Login"
      body={bodyContent}
      disabled={isLoading}
    />
  )
}

export default LoginModal
