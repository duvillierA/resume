import React from "react";

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export const List: React.FC<ListProps> = ({ children, className = "" }) => (
  <ul className={`list-disc list-inside ml-4 space-y-2 ${className}`}>{children}</ul>
);