// TypeScript interfaces
export interface NavItem {
  label: string;
  href: string;
}

export interface Value {
  icon: string;
  title: string;
  desc: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
  features: string[];
}

export interface Product {
  name: string;
  tagline: string;
  desc: string;
  gradient: string;
  features: string[];
}

export interface Project {
  category: string;
  title: string;
  desc: string;
  tech: string[];
  gradient: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  points: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  hours: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "linkedin" | "twitter";
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

// Navigation items (relative paths for React Router)
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Team", href: "/team" },
];

// Footer links
export const footerLinks = {
  main: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
  ] as NavItem[],
  secondary: [
    { label: "Products", href: "/products" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
};

// Contact info
export const contactInfo: ContactInfo = {
  email: "hello@infinititechpartners.com",
  location: "Available Worldwide",
  hours: "Mon - Fri: 9AM - 6PM IST",
};

// Social links
export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Twitter", href: "#", icon: "twitter" },
];

// Why Choose Us features
export const whyChooseUs: Feature[] = [
  {
    icon: "rocket",
    title: "Fast Delivery",
    desc: "We deliver projects on time without compromising quality.",
  },
  {
    icon: "shield",
    title: "Secure Solutions",
    desc: "Security-first approach in all our implementations.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    desc: "Cutting-edge technologies and modern approaches.",
  },
  {
    icon: "handshake",
    title: "Partnership",
    desc: "We work as an extension of your team.",
  },
];

// Core values
export const values: Value[] = [
  {
    icon: "zap",
    title: "Our Mission",
    desc: "Empower businesses with cutting-edge technology solutions that drive growth and digital transformation.",
  },
  {
    icon: "telescope",
    title: "Our Vision",
    desc: "Be the most trusted technology partner globally, known for excellence and innovation.",
  },
  {
    icon: "gem",
    title: "Our Values",
    desc: "Integrity, Innovation, Excellence, and Customer-Centricity guide everything we do.",
  },
];

// Company stats
export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 4, suffix: "", label: "Team Members" },
  { value: 6, suffix: "", label: "Services Offered" },
];

// Services
export const services: Service[] = [
  {
    icon: "server",
    title: "Data Center Management",
    desc: "Enterprise-grade data center solutions with 24/7 monitoring and optimal performance.",
    features: ["Infrastructure Design", "Power Management", "Cooling Systems", "Security"],
  },
  {
    icon: "wrench",
    title: "Custom MDC Software",
    desc: "Tailored modular data center software solutions for your specific needs.",
    features: ["DCIM Solutions", "Asset Tracking", "Capacity Planning", "Analytics"],
  },
  {
    icon: "building-2",
    title: "Smart City Solutions",
    desc: "IoT-powered urban infrastructure for smarter, more efficient cities.",
    features: ["Traffic Management", "Smart Lighting", "Waste Management", "Air Quality"],
  },
  {
    icon: "briefcase",
    title: "CRM, ERP & POS",
    desc: "Complete enterprise software suite for seamless business operations.",
    features: ["Sales Automation", "Inventory", "HR Management", "Reporting"],
  },
  {
    icon: "smartphone",
    title: "Web & Mobile Development",
    desc: "Cross-platform digital experiences that engage and convert.",
    features: ["React/Next.js", "React Native", "Progressive Web Apps", "API Development"],
  },
  {
    icon: "trending-up",
    title: "Digital Marketing",
    desc: "Data-driven growth strategies to maximize your online presence.",
    features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
  },
];

// Products
export const products: Product[] = [
  {
    name: "Marketplace",
    tagline: "B2B Commodity Trading",
    desc: "Enterprise B2B marketplace with tokenization, escrow payments, and blockchain integration.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    features: ["Tokenization", "Escrow Payments", "Blockchain", "Multi-currency"],
  },
  {
    name: "Accubooks",
    tagline: "Enterprise Accounting",
    desc: "Multi-tenant accounting with double-entry bookkeeping, inventory, HR & payroll.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    features: ["Double-entry", "Multi-tenant", "Payroll", "Inventory"],
  },
  {
    name: "School ERP",
    tagline: "School Management",
    desc: "Complete school management covering admissions, academics, fees, and transport.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    features: ["Admissions", "Academics", "Fees", "Transport"],
  },
  {
    name: "Fleet Management",
    tagline: "Enterprise Telematics",
    desc: "Real-time GPS tracking, ELD compliance, driver management, and analytics.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    features: ["GPS Tracking", "ELD Compliance", "Driver Mgmt", "Analytics"],
  },
];

// Portfolio projects
export const projects: Project[] = [
  {
    category: "Smart City",
    title: "Smart City Dashboard",
    desc: "Real-time urban monitoring system for efficient city management",
    tech: ["React", "Node.js", "IoT"],
    gradient: "linear-gradient(135deg, #00ffcc 0%, #00ccff 100%)",
  },
  {
    category: "Enterprise Software",
    title: "Enterprise CRM Platform",
    desc: "Custom CRM solution for manufacturing industry",
    tech: ["Next.js", "PostgreSQL", "Redis"],
    gradient: "linear-gradient(135deg, #ff6b35 0%, #ff9f1c 100%)",
  },
  {
    category: "Data Center",
    title: "Data Center Monitor",
    desc: "Comprehensive MDC management dashboard",
    tech: ["Vue.js", "Python", "Docker"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
];

// Development process
export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery",
    desc: "We get on a Teams call to understand your business module, end users, user personas, and your unique value proposition.",
    points: ["Business Analysis", "User Research", "Problem Definition", "USP Identification"],
  },
  {
    num: "02",
    title: "Scope of Work",
    desc: "Comprehensive project planning with clear timelines, milestones, and success criteria.",
    points: ["Timeline Planning", "Milestone Definition", "Acceptance Criteria", "Tech Stack"],
  },
  {
    num: "03",
    title: "Design",
    desc: "Iterative design process ensuring your vision comes to life perfectly.",
    points: ["UI/UX Design", "Prototype Creation", "Design Reviews", "Final Approval"],
  },
  {
    num: "04",
    title: "Development",
    desc: "Agile development with regular updates and quality assurance at every step.",
    points: ["Sprint Planning", "CI/CD", "Code Reviews", "Testing"],
  },
  {
    num: "05",
    title: "Deployment",
    desc: "Smooth launch and ongoing support to ensure your success.",
    points: ["Production Deploy", "Monitoring", "Training", "Maintenance"],
  },
];

// Team members
export const team: TeamMember[] = [
  { name: "Sudipto Mitra", role: "Founder & Lead Developer", avatar: "SM" },
  { name: "Pallabi Datta", role: "HR Manager", avatar: "PD" },
  { name: "Snehendu Roy", role: "Full-stack MERN Developer", avatar: "SR" },
  { name: "Soumyadip Chanda", role: "AI/ML Developer", avatar: "SC" },
];
