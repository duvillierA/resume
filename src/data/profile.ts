import { env } from "@/config/env";

export const profile = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Antoine Duvillier",
  "jobTitle": "Senior Front-End Software Engineer",
  "email": env.profile.email ?? "",
  "telephone": env.profile.telephone ?? "",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Soorts-Hossegor",
    "addressRegion": "Nouvelle-Aquitaine",
    "addressCountry": "France"
  },
  "url": env.profile.url ?? "",
  "sameAs": [
    "https://www.linkedin.com/in/antoine-duvillier-4602a639",
    "https://github.com/duvillierA"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Virtuo",
    "url": "https://www.govirtuo.com"
  },
  "location": "Full remote. Soorts-Hossegor, Nouvelle-Aquitaine, France.",
  "startDate": "2015-12"
}