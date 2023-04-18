"use client"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { BiArrowBack } from "react-icons/bi"

interface HeaderProps {
  label?: string
  showBackArrow?: boolean
}

const Header: React.FC<HeaderProps> = ({ label = "Home", showBackArrow }) => {
  const router = useRouter()

  const goBack = useCallback(() => {
    router.back()
  }, [router])

  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row gap-2 items-center">
        {showBackArrow && (
          <BiArrowBack
            onClick={goBack}
            color="white"
            size={20}
            className="cursor-pointer hover:opacity-70 transition"
          />
        )}
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  )
}

export default Header
