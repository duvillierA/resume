import { Avatar } from "@/components/Avatar";
import type { PropsWithChildren } from "react";

interface HeaderProps {
  name: string;
  title: string;
  tags?: React.ReactNode[];
  subtitle?: React.ReactNode;
  avatar?: string;
}

export const Header: React.FC<PropsWithChildren<HeaderProps>> = ({ name, title, subtitle, children, tags, avatar }) => {
  return (
    <header className="flex flex-row justify-between gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-2">
          {!!avatar && <Avatar src={avatar} alt={name} className="rounded-full size-22 object-cover shadow-md" />}
          <div>
            <h1 className="text-3xl font-bold text-heading">{name}</h1>
            <p className="text-xl text-foreground">{title}</p>
            {subtitle ? <span className="text-sm text-muted-foreground">{subtitle}</span> : null}
          </div>
        </div>
        {!!tags?.length && (
          <ul className="flex flex-wrap gap-1">
            {tags?.map((tag, idx) => <li key={idx}>{tag}</li>)}
          </ul>
        )}
     </div>
     {children} 
  </header>
  );
};