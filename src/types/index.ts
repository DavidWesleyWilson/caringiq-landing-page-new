export interface WaitlistForm {
  firstName: string;
  lastName: string;
  email: string;
  careRole: string;
  urgencyLevel: string;
}

export interface ContactForm {
  name: string;
  email: string;
  reason: string;
  message?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
} 