/** Local mock content. No backend or CMS is required for this challenge. */

export interface NavItem {
  label: string;
  href: string;
}

export interface Category {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface CollageImage {
  src: string;
  /** Tailwind size classes: mobile first, then the desktop size from `xl`. */
  size: string;
}

export const navItems: NavItem[] = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#how-it-works" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#testimonial" },
];

export const categories: Category[] = [
  {
    id: "product-design",
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: "#featured-course",
  },
  {
    id: "technology",
    number: "02",
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
    href: "#featured-course",
  },
  {
    id: "business",
    number: "03",
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
    href: "#featured-course",
  },
  {
    id: "creative",
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: "#featured-course",
  },
];

export const featuredCourse = {
  eyebrow: "Most popular this month",
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: "with Maya Chen · Senior Product Designer",
  meta: ["8 lessons", "2h 40min", "Intermediate"],
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Choose your focus",
    description: "Find courses based on the skill you want to build, not endless content categories.",
  },
  {
    number: "02",
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
  },
  {
    number: "03",
    title: "Put it into practice",
    description: "Every course includes practical exercises designed to turn knowledge into action.",
  },
];

export const testimonial = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  name: "Alex Morgan",
  role: "Product Manager",
};

export const stats: Stat[] = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

/**
 * Collage columns of the "people" section. Mobile sizes come first, the
 * desktop sizes (from the xl breakpoint) are prefixed with `xl:`.
 */
export const collageColumns: {
  className: string;
  images: CollageImage[];
}[] = [
  {
    className: "items-end justify-center pt-12 xl:pt-[64px]",
    images: [
      { src: "/images/people-1.png", size: "h-[96px] w-[72px] xl:h-[154px] xl:w-[103px]" },
      { src: "/images/people-2.png", size: "h-[129px] w-[94px] xl:h-[207px] xl:w-[138px]" },
    ],
  },
  {
    className: "items-start xl:pt-[26px]",
    images: [
      { src: "/images/people-3.png", size: "h-[106px] w-[72px] xl:h-[170px] xl:w-[103px]" },
      { src: "/images/people-4.png", size: "h-[107px] w-[72px] xl:h-[173px] xl:w-[103px]" },
      { src: "/images/people-5.png", size: "h-[80px] w-[72px] xl:h-[128px] xl:w-[103px]" },
    ],
  },
  {
    className: "items-start",
    images: [
      { src: "/images/people-6.png", size: "h-[86px] w-[72px] xl:h-[137px] xl:w-[103px]" },
      { src: "/images/people-7.png", size: "h-[86px] w-[72px] xl:h-[138px] xl:w-[103px]" },
      { src: "/images/people-8.png", size: "h-[96px] w-[72px] xl:h-[154px] xl:w-[103px]" },
    ],
  },
  {
    className: "items-start justify-center",
    images: [
      { src: "/images/people-9.png", size: "h-[128px] w-[88px] xl:h-[205px] xl:w-[128px]" },
      { src: "/images/people-10.png", size: "h-[83px] w-[72px] xl:h-[132px] xl:w-[103px]" },
    ],
  },
];

export const contactItems = {
  email: "contact@luma.com",
  responseTime: "Up to 24 hours on business days",
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#courses" },
      { label: "Instructors", href: "#community" },
      { label: "For Teams", href: "#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#testimonial" },
      { label: "Careers", href: "#" },
      { label: "Journal", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];
