// app/components/user-avatar.tsx
import React from 'react';

interface UserAvatarProps {
  name: string;
  image?: string;
  size?: number;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ name, image, size = 40 }) => {
  const getInitials = (name: string) => {
    const initials = name
      .split(' ')
      .map(part => part[0].toUpperCase())
      .slice(0, 2)
      .join('');
    return initials;
  };

  return (
    <div
      className="flex items-center justify-center bg-gray-300 text-white font-semibold rounded-full"
      style={{ width: size, height: size }}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          className="rounded-full object-cover"
          style={{ width: size, height: size }}
        />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
};
