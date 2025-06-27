import "./App.css";
import ReactMarkdown from "react-markdown";
import { isHttpsUrl } from "@/lib/link";
import { isPartialDate } from "@/lib/date";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Header } from "@/components/Header";
import { PageBreak } from "@/components/Print/PageBreak";
import professionalSummary from "@/data/summary.md";
import professionalExperience from "@/data/professionalExperience.json";
import coreSkills from "@/data/coreSkills.md";
import technicalHighlights from "@/data/technicalHighlights.md";
import leadershipCollaboration from "@/data/leadershipCollaboration.md";
import education from "@/data/education.md";
import languages from "@/data/languages.md";
import profile from "@/data/profile.json";
import { Microdata } from "@/components/common/Microdata";

function App() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <Microdata data={profile} />
      <Header
        name={profile.name}
        title={profile.jobTitle}
        email={profile.email}
        linkedin={profile.sameAs[0]}
        github={profile.sameAs[1]}
        company={profile.worksFor.name}
        companyUrl={profile.worksFor.url}
        location={profile.location}
      />
      <Section title="Professional Summary">
        <ReactMarkdown>{professionalSummary}</ReactMarkdown>
      </Section>
      <Section title="Professional Experience">
        {professionalExperience.items.map((item, idx: number) => (
          <ExperienceItem
            key={idx}
            company={item.company}
            title={item.title}
            start_date={isPartialDate(item.start_date) ? item.start_date : isPartialDate(profile.startDate) ? profile.startDate : null}
            end_date={isPartialDate(item.end_date) ? item.end_date : null}
            remote={item.remote}
            link={isHttpsUrl(item.link) ? item.link : undefined}
            introduction={!!item.introduction && <ReactMarkdown>{item.introduction}</ReactMarkdown>}
            description={<ReactMarkdown>{item.description.join("\n")}</ReactMarkdown>}
          />
        ))}
      </Section>
      <PageBreak position="before" variant="always"  />
      <Section title="Core Skills">
        <ReactMarkdown>{coreSkills}</ReactMarkdown>
      </Section>
      <Section title="Technical Highlights">
        <ReactMarkdown>{technicalHighlights}</ReactMarkdown>
      </Section>
      <Section title="Leadership & Collaboration">
        <ReactMarkdown>{leadershipCollaboration}</ReactMarkdown>
      </Section>
      <Section title="Education">
        <ReactMarkdown>{education}</ReactMarkdown>
      </Section>
      <Section title="Languages">
        <ReactMarkdown>{languages}</ReactMarkdown>
      </Section>
    </main>
  );
}

export default App;
