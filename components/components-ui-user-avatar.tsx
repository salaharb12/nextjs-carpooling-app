'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
  name: string
  image?: string
}

export function UserAvatar({ name, image }: UserAvatarProps) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <Avatar>
      <AvatarImage src={image} alt={name} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}