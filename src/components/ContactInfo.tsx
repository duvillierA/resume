import React from "react";

interface ContactInfoProps {
  email?: string;
  github: string;
  linkedin: string;
  company: string;
  companyUrl: string;
  location: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ email, github, linkedin, company, companyUrl, location }) => (
  <dl className="mt-4 text-sm grid grid-cols-[auto_1fr] gap-x-2 gap-y-1">
    {!!email && (
      <>
        <dt>Email</dt>
        <dd>
          <a href={`mailto:${email}`}>{email}</a>
        </dd>
      </>
    )}
    <dt>Location</dt>
    <dd>{location}</dd>
    <dt>GitHub</dt>
    <dd>
      <a href={github}>{github}</a>
    </dd>
    <dt>LinkedIn</dt>
    <dd>
      <a href={linkedin}>{linkedin}</a>
    </dd>
    <dt>Company</dt>
    <dd>
      <a href={companyUrl}>{company}</a>
    </dd>
  </dl>
);