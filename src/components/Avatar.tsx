import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, className = "" }) => (
  <img src={src} alt={alt} className={`w-28 h-auto rounded ${className}`} />
);