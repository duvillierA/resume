import { Avatar } from "@/components/Avatar";
import type { PropsWithChildren } from "react";

interface HeaderProps {
  name: string;
  title: string;
  tags?: React.ReactNode[];
}

export const Header: React.FC<PropsWithChildren<HeaderProps>> = ({ name, title, children, tags }) => {

  return (
    <header>
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-3xl font-bold text-heading">{name}</h1>
        <p className="text-xl text-foreground">{title}</p>
        {tags?.length ? (
          <ul className="flex flex-wrap gap-1">
            {tags?.map((tag, idx) => <li key={idx}>{tag}</li>)}
          </ul>
        ) : null}
        {children}
      </div>
      <Avatar src="/portrait.jpg" alt={name} />
    </div>
  </header>
  );
};