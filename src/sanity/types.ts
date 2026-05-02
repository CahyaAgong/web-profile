export interface Stat {
  label: string;
  value: string;
}

export interface HeroContent {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  availability: string;
  stats: Stat[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface AboutContent {
  bio: string;
  skills: SkillCategory[];
  stats: Stat[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

export interface ProjectsContent {
  projects: Project[];
  viewAllLink: string;
}

export interface Social {
  platform: string;
  icon: string;
  url: string;
}

export interface FormPlaceholder {
  name: string;
  email: string;
  message: string;
}

export interface ContactContent {
  email: string;
  location: string;
  formPlaceholder: FormPlaceholder;
  socials: Social[];
}
