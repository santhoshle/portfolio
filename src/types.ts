export interface MenuItem {
    id: string;
    title: string;
    path: string;
  }
  
  export interface IntroData {
    name: string;
    role: string;
    subHeading: string;
    menus: MenuItem[];
  }
  
  export interface ExperienceItem {
    company: string;
    role: string;
    years: string;
    description: string;
    skills: string[];
  }
  
  export interface Project {
    title: string;
    description: string;
    link: string;
    icon: string;
  }
  
  export interface SocialLink {
    name: string;
    icon: string;
    url: string;
  }
  
  export interface PortfolioData {
    intro: IntroData;
    about: string[];
    experience: ExperienceItem[];
    projects: Project[];
    socialLinks: SocialLink[];
  }

  // A post in src/content/blog (see README for frontmatter fields)
  export interface BlogPostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    draft: boolean;
    readingMinutes: number;
  }

  export interface BlogPost extends BlogPostMeta {
    html: string;
  }

  // An entry in src/data/roadmap.json (see README for field notes)
  export interface RoadmapItem {
    title: string;
    year?: number | string;
    summary?: string;
    author?: string;
    image?: string;
    status?: string;
    repoUrl?: string;
    demoUrl?: string;
  }
