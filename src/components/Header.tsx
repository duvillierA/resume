import { Avatar } from "@/components/Avatar";
import type { PropsWithChildren } from "react";

interface HeaderProps {
  name: string;
  title: string;
}

export const Header: React.FC<PropsWithChildren<HeaderProps>> = ({ name, title, children }) => {

  return (
    <header>
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-3xl font-bold text-heading">{name}</h1>
        <p className="text-xl text-foreground">{title}</p>
        {children}
      </div>
      <Avatar src="/portrait.jpg" alt={name} />
    </div>
  </header>
  );
};