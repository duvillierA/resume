import React from "react";
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, BuildingIcon, CodeIcon } from "lucide-react";

interface ContactInfoProps {
  company: string;
  companyUrl: string;
  email?: string;
  github: string;
  linkedin: string;
  location: string;
  telephone?: string;
}

const iconClassName = "w-4 h-4"

export const ContactInfo: React.FC<ContactInfoProps> = ({ company, companyUrl, email, github, linkedin, location, telephone }) => (
  <dl className="grid grid-cols-[auto_1fr] gap-x-2 text-sm">
    {!!email && (
      <ContactInfoItem value={email} href={`mailto:${email}`} leftElement={<MailIcon className={iconClassName} />} />
    )}
    {!!telephone && (
      <ContactInfoItem value={telephone} href={`tel:${telephone}`} leftElement={<PhoneIcon className={iconClassName} />} />
    )}
    <ContactInfoItem value={"View profile"} href={github} leftElement={<GithubIcon className={iconClassName} />} />
    <ContactInfoItem value={"View profile"} href={linkedin} leftElement={<LinkedinIcon className={iconClassName} />} />
    <ContactInfoItem value={company} href={companyUrl} leftElement={<BuildingIcon className={iconClassName} />} />
    <ContactInfoItem value={"View repository"} href={`https://github.com/duvillierA/resume`} leftElement={<CodeIcon className={iconClassName} />} />
  </dl>
);

interface ContactInfoItemProps {
  label?: string;
  value: React.ReactNode;
  href?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ label, value, href, leftElement, rightElement }) => (
  <>
    <dt className="flex items-center gap-2">
      {leftElement}
      {label}
    </dt>
    <dd className="flex items-center gap-2">
      {href ? (
        <a href={href} className="hover:text-primary text-muted-foreground no-underline">
          {value}
        </a>
      ) : (
        value
      )}
      {rightElement}
    </dd>
  </>
);