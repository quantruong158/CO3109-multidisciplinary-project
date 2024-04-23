'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '../ui/button'

const PasswordInput = ({ value }: { value?: string }) => {
  const [isHiding, setIsHiding] = useState(true)
  const toggleVisibility = () => {
    setIsHiding((prev) => !prev)
  }
  return (
    <>
      <Input
        value={value}
        type={isHiding ? 'password' : 'text'}
        contentEditable={false}
      />
      <Button onClick={toggleVisibility}>
        {isHiding ? <EyeOff /> : <Eye />}
      </Button>
    </>
  )
}

export default PasswordInput
