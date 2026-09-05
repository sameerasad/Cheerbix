import type { FAQ } from "./services";

export type { FAQ };

/** Homepage / general FAQ. Service-specific questions live on each service. */
export const generalFaqs: FAQ[] = [
  {
    question: "What services does Cherbix provide?",
    answer:
      "Cherbix provides custom software development, ERP and business systems, web and mobile application development, AI and automation, system integration, UI/UX, cloud solutions and digital growth services. Most engagements combine several of these, which is the point: one partner across build, launch and growth.",
  },
  {
    question: "How does the project process work?",
    answer:
      "Five stages: discover, strategise, design, build and grow. Discovery establishes the objective and constraints; strategy defines scope, technology and roadmap; design and build run in reviewed iterations; and growth covers launch, measurement and improvement. You see working output at every stage rather than a single reveal at the end.",
  },
  {
    question: "How long does a software or digital project take?",
    answer:
      "It depends what is being built. A focused marketing site is typically four to eight weeks. A web or mobile application with authentication and integrations usually runs three months or more. Custom software and ERP work is delivered in phases over several months, with the first module in production well before the full scope is complete. We give a phased timeline after discovery, because a number quoted before discovery is a guess.",
  },
  {
    question: "Can you take over or improve an existing system?",
    answer:
      "Yes, and it is a large share of what we do. We start with a code and architecture audit, give you an honest assessment of what is worth keeping, and propose a path that avoids an unnecessary rewrite. Replacing a working system is rarely the right opening move.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. For early-stage companies we usually recommend a tightly scoped first release aimed at learning quickly, built on foundations that will not need replacing when the product finds its shape. Established businesses are equally core to our work — most engagements involve systems that already exist.",
  },
  {
    question: "Can you work with an existing development team?",
    answer:
      "Regularly. We work as an embedded extension of an in-house team, take ownership of a specific workstream such as design or front-end, or handle a discipline the team does not cover internally. We adopt your existing conventions, tooling and review process rather than imposing ours.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. Most clients continue with a maintenance arrangement covering dependency and security updates, monitoring, small improvements and a defined response time. It can be a monthly retainer or an as-needed arrangement.",
  },
  {
    question: "Can you handle SEO after the build?",
    answer:
      "Yes, and it is the natural continuation of the build. Technical foundations, structured data, metadata and performance are part of every site we deliver; ongoing SEO adds content strategy, authority work and monitoring on top of that.",
  },
  {
    question: "Can you integrate AI into an existing application?",
    answer:
      "Yes. We add AI capability to software that is already in production — search, summarisation, classification, extraction or assistants — behind a defined interface, working within your existing stack and avoiding a rewrite wherever possible.",
  },
  {
    question: "How do you determine project pricing?",
    answer:
      "From scope, complexity and the level of ongoing involvement. Defined projects are quoted as a fixed price against an agreed scope; longer or evolving work runs on a monthly retainer. Either way you get a written breakdown before anything starts, and we flag scope changes rather than absorbing them silently into the timeline.",
  },
];
