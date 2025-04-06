export interface MenuItem {
    id: string;
    title: string;
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
  