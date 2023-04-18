import { on } from 'events'

interface InputProps {
  placeholder?: string
  value?: string
  type?: string
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  type,
  placeholder,
  disabled,
  name,
}) => {
  return (
    <input
      className="w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:bordder-2 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"
      onChange={onChange}
      value={value}
      disabled={disabled}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  )
}

export default Input
