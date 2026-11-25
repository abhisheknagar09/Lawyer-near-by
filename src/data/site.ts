/** Shared site content. Edit here rather than inside components. */

export const site = {
  name: 'Lawyer Near By',
  short: 'LNB',
  tagline: 'Trusted legal guidance, close to you.',
  phone: '+91 98250 10518',
  email: 'hello@lawyernearby.in',
  address: 'Indore, Madhya Pradesh, India',
  regulator: 'BAR COUNCIL REG: D/1284/2016',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Consultation', href: '#consultation' },
  { label: 'Cases', href: '#cases' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
] as const;

export const heroStats = [
  { icon: 'award', value: '12+', label: 'Years of experience' },
  { icon: 'shield', value: '95%', label: 'Favourable outcomes' },
  { icon: 'briefcase', value: '2,400+', label: 'Matters handled' },
  { icon: 'scale', value: '100%', label: 'Bar Council verified' },
] as const;

export const services = [
  {
    tag: 'Corporate',
    title: 'Corporate & Business Law',
    body: 'Legal support for startups, SMEs and established businesses — from incorporation and shareholder agreements to commercial contracts and compliance.',
    icon: 'briefcase',
  },
  {
    tag: 'Litigation',
    title: 'Civil Litigation',
    body: 'Strong representation in civil disputes, ensuring your rights and interests are protected at every stage of negotiation, mediation and trial.',
    icon: 'gavel',
  },
  {
    tag: 'Defence',
    title: 'Criminal Defence',
    body: 'Dedicated defence for individuals facing criminal charges, with urgent bail support and a focus on protecting your rights from the first hearing.',
    icon: 'shield',
  },
  {
    tag: 'Family',
    title: 'Family & Divorce',
    body: 'Compassionate, confidential counsel on divorce, child custody, maintenance and succession — handled with discretion and care.',
    icon: 'users',
  },
  {
    tag: 'Property',
    title: 'Property & Real Estate',
    body: 'Title verification, sale deeds, tenancy disputes and RERA matters, so every transaction you make rests on clean, defensible paperwork.',
    icon: 'home',
  },
] as const;

export const cases = [
  { title: 'Corporate Advisory', category: 'Corporate Law', date: 'Nov 2025' },
  { title: 'Shareholder Dispute Resolution', category: 'Civil Litigation', date: 'Sep 2025' },
  { title: 'Anticipatory Bail — Economic Offence', category: 'Criminal Defence', date: 'Jul 2025' },
  { title: 'Mutual Consent Divorce Settlement', category: 'Family Law', date: 'May 2025' },
  { title: 'RERA Possession Claim', category: 'Property Law', date: 'Mar 2025' },
] as const;

export const process = [
  {
    step: '01',
    title: 'Share your situation',
    body: 'Tell us what happened in plain language. No legal jargon needed — we work out what matters.',
  },
  {
    step: '02',
    title: 'Talk to an advocate',
    body: 'A short, focused consultation over audio or video, in the language you are most comfortable in.',
  },
  {
    step: '03',
    title: 'Get a clear opinion',
    body: 'You leave knowing where you stand, what your options are, and what each one realistically costs.',
  },
  {
    step: '04',
    title: 'Move forward',
    body: 'Engage us for drafting, filing or representation — or take the opinion and act on it yourself.',
  },
] as const;

export const testimonials = [
  {
    quote:
      'I had been putting off a property dispute for two years. Thirty minutes on a call gave me a clearer picture than three earlier meetings had.',
    name: 'Rohit Sharma',
    role: 'Business owner — Indore',
  },
  {
    quote:
      'They explained the custody process without once talking down to me. Everything they said would happen, happened in that order.',
    name: 'Meera Nair',
    role: 'Teacher — Kochi',
  },
  {
    quote:
      'Our contracts were a mess. The team rewrote them in a fortnight and flagged two clauses that would have cost us dearly.',
    name: 'Arjun Desai',
    role: 'Founder, logistics startup',
  },
] as const;

export const faqs = [
  {
    q: 'What happens in a 30 minute consultation?',
    a: 'You describe your matter, the advocate asks the questions that actually decide the outcome, and you get a straight answer on where you stand and what your realistic options are. If your matter needs more time, we will tell you that too.',
  },
  {
    q: 'Which languages can I speak in?',
    a: 'Consultations are available in English, Hindi, Marathi, Gujarati, Tamil and Bengali. You pick the language when you book, and we match you with an advocate who speaks it.',
  },
  {
    q: 'Is the conversation confidential?',
    a: 'Yes. Everything you share is covered by advocate–client privilege, and nothing is disclosed outside the matter without your written instruction.',
  },
  {
    q: 'Do I have to continue with you afterwards?',
    a: 'No. A consultation is a standalone opinion. Plenty of people take it, act on it themselves, and never need us again — that is a good outcome.',
  },
  {
    q: 'What should I keep ready before the call?',
    a: 'Any notice, agreement, FIR copy or correspondence connected to the matter, and a short timeline of what happened. The more specific you are, the more specific the advice can be.',
  },
] as const;
