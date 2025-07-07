// Styles
import "./App.css";

// Utilities
import { isHttpsUrl, isPartialDate } from "@/lib";

// Components
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Header } from "@/components/Header";
import { PageBreak } from "@/components/Print/PageBreak";
import { Microdata } from "@/components/common/Microdata";
import { ContactInfo } from "@/components/ContactInfo";
import { Markdown } from "@/components/common/Markdown";
import { WorkMode } from "@/components/WorkMode";
import { Skill } from "@/components/Skill";

// Data
import { profile } from "@/data/profile";
import professionalSummary from "@/data/summary.md";
import professionalExperience from "@/data/professionalExperience.json";
import coreSkills from "@/data/coreSkills.md";
import technicalHighlights from "@/data/technicalHighlights.md";
import leadershipCollaboration from "@/data/leadershipCollaboration.md";
import education from "@/data/education.md";
import languages from "@/data/languages.md";

function App() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <Microdata data={profile} />
      <Header
        name={profile.name}
        title={profile.jobTitle}
        tags={[
          <Skill skill="Node.js" />,
          <Skill skill="React" />,
          <Skill skill="TypeScript" />,
          <Skill skill="Next.js" />,
          <Skill skill="Tailwind CSS" />,
          <WorkMode workMode="full-remote" />,
          <WorkMode workMode="hybrid" />,
        ]}
      >
        <ContactInfo
          email={profile.email}
          github={profile.sameAs[1]}
          company={profile.worksFor.name}
          linkedin={profile.sameAs[0]}
          companyUrl={profile.worksFor.url}
          location={profile.location}
        />
      </Header>
      <Section title="Professional Summary" asMarkdown>
        {professionalSummary}
      </Section>
      <Section title="Professional Experience">
        {professionalExperience.items.map((item, idx: number) => (
          <ExperienceItem
            key={idx}
            company={item.company}
            title={item.title}
            startDate={isPartialDate(item.start_date) ? item.start_date : isPartialDate(profile.startDate) ? profile.startDate : null}
            endDate={isPartialDate(item.end_date) ? item.end_date : null}
            remote={item.remote}
            link={isHttpsUrl(item.link) ? item.link : undefined}
            introduction={!!item.introduction && <Markdown>{item.introduction}</Markdown>}
            description={<Markdown>{item.description.join("\n")}</Markdown>}
          />
        ))}
      </Section>
      <PageBreak position="before" variant="always" />
      <Section title="Core Skills" asMarkdown>
        {coreSkills}
      </Section>
      <Section title="Technical Highlights" asMarkdown>
        {technicalHighlights}
      </Section>
      <Section title="Leadership & Collaboration" asMarkdown>
        {leadershipCollaboration}
      </Section>
      <Section title="Education" asMarkdown>
        {education}
      </Section>
      <Section title="Languages" asMarkdown>
        {languages}
      </Section>
    </main>
  );
}

export default App;
