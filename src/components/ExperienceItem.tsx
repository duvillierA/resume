import React from "react";
import { type PartialDate } from "@/lib/date";
import { FormatPartialDate } from "@/components/common/date";

interface ExperienceItemProps {
  company: string;
  title: string;
  start_date: PartialDate | null;
  end_date: PartialDate | null;
  remote: boolean;
  introduction?: React.ReactNode;
  description: React.ReactNode;
  link?: `https://${string}`;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, title, start_date, end_date, remote, introduction, description, link }) => {
    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">
            {company} - {title}
            <span className="text-sm font-normal text-foreground ml-2">
                <em>({start_date && <FormatPartialDate date={start_date} />} - {end_date ? <FormatPartialDate date={end_date} /> : "Present"} { remote ? ", Remote" : ""})</em>
                {link && (<small className="text-sm">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="ml-2">{link}</a>
                </small>
                )}
            </span>
            </h3>
            <div className="mt-2">{description}</div>
            {introduction && <blockquote className="font-normal text-sm text-muted-foreground italic mt-2"><p>{introduction}</p></blockquote>}
        </div>
    );
};