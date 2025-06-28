import React from "react";
import { MailIcon, PhoneIcon, MapPinIcon, GithubIcon, LinkedinIcon, BuildingIcon, CodeIcon } from "lucide-react";

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
  <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-sm">
    {!!email && (
      <ContactInfoItem label="Email" value={email} href={`mailto:${email}`} leftElement={<MailIcon className={iconClassName} />} />
    )}
    {!!telephone && (
      <ContactInfoItem label="Telephone" value={telephone} href={`tel:${telephone}`} leftElement={<PhoneIcon className={iconClassName} />} />
    )}
    <ContactInfoItem label="Location" value={location} leftElement={<MapPinIcon className={iconClassName} />} />
    <ContactInfoItem label="GitHub" value={"View profile"} href={github} leftElement={<GithubIcon className={iconClassName} />} />
    <ContactInfoItem label="LinkedIn" value={"View profile"} href={linkedin} leftElement={<LinkedinIcon className={iconClassName} />} />
    <ContactInfoItem label="Company" value={company} href={companyUrl} leftElement={<BuildingIcon className={iconClassName} />} />
    <ContactInfoItem label="Source code" value={"View repository"} href={`https://github.com/duvillierA/resume`} leftElement={<CodeIcon className={iconClassName} />} />
  </dl>
);

interface ContactInfoItemProps {
  label: string;
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
        <a href={href}>
          {value}
        </a>
      ) : (
        value
      )}
      {rightElement}
    </dd>
  </>
);