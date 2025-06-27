import { Avatar } from "@/components/Avatar";
import { ContactInfo } from "@/components/ContactInfo";

interface HeaderProps {
  name: string;
  title: string;
  email?: string;
  github: string;
  linkedin: string;
  company: string;
  companyUrl: string;
  location: string;
}

export const Header = ( {
  name,
  title,
  email,
  github,
  linkedin,
  company,
  companyUrl,
  location
}: HeaderProps) => {

  return (
    <header>
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-3xl font-bold text-heading">{name}</h1>
        <p className="text-xl text-foreground">{title}</p>
        <ContactInfo
          email={email}
          github={github}
          company={company}
          linkedin={linkedin}
          companyUrl={companyUrl}
          location={location}
        />
      </div>
      <Avatar src="/portrait.jpg" alt={name} />
    </div>
  </header>
  );
};