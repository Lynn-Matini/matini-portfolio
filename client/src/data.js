import react from './assets/react.svg';
import express from './assets/express.svg';
import supabase from './assets/supabase.svg';
import js from './assets/javascript.svg';
import mysql from './assets/mysql.svg';
import python from './assets/python.svg';
import firebase from './assets/firebase.svg';
import cpanel from './assets/cpanel.svg';
import scrimba from './assets/scrimba.svg';
import kaggle from './assets/kaggle.svg';

const certifications = [
  {
    id: 1,
    logo: cpanel,
    issuer: 'cPanel',
    issueDate: '2025',
    title: 'cPanel Professional',
  },
  {
    id: 2,
    logo: scrimba,
    issuer: 'Scrimba',
    issueDate: '2025',
    title: 'AI Engineer Path',
  },
  { id: 3, logo: kaggle, issuer: 'Kaggle', issueDate: '2025', title: 'Python' },
  {
    id: 4,
    logo: react,
    issuer: 'Andela',
    issueDate: '2023',
    title: 'React',
  },
];

const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Information Technology',
    school: 'KCA University',
    graduation: 'Graduated in Nov 2024',
    description: 'Focused on software engineering and data analytics.',
  },
];

const experience = [
  {
    id: 1,
    title: 'IT Attaché',
    company: 'NSSF',
    duration: 'June - August 2024',
    description: [
      'Worked on various projects using React, Node.js, and Express.',
      'Collaborated with cross-functional teams to deliver high-quality software.',
    ],
  },
  {
    id: 2,
    title: 'Data Entry Clerk & Analyst',
    company: 'Pump Sales Kakamega',
    duration: 'July 2023 - May 2024',
    description: [
      'Managed data entry tasks and ensured data accuracy.',
      'Analyzed sales data to identify trends and improve business processes.',
    ],
  },
  {
    id: 3,
    title: 'Frontend Developer Attaché',
    company: 'Smart Applications Group',
    duration: 'May - July 2023',
    description: [
      'Managed data entry tasks and ensured data accuracy.',
      'Analyzed sales data to identify trends and improve business processes.',
    ],
  },
];

const languages = [
  { id: 1, language: 'English', proficiency: 'Native' },
  { id: 2, language: 'Swahili', proficiency: 'Native' },
  { id: 3, language: 'German', proficiency: 'A1' },
];

const projects = [
  {
    id: 1,
    title: 'Subscription Management System',
    description: 'A personal portfolio website built using React and CSS.',
    gitHubLink:
      'https://github.com/Avalanche-Team1-Africa/Subscription-Management-System',
    webLink: 'https://subscription-management-sys.vercel.app/',
  },
  {
    id: 2,
    title: 'Pollyglot',
    description: 'A personal portfolio website built using React and CSS.',
    gitHubLink: '#',
    webLink: '#',
  },
  {
    id: 3,
    title: 'Dodgy Stock Market Predictor',
    description: 'A personal portfolio website built using React and CSS.',
    gitHubLink: '#',
    webLink: '#',
  },
  {
    id: 4,
    title: "Matini's Portfolio",
    description: 'A personal portfolio website built using React and CSS.',
    gitHubLink: 'https://github.com/Lynn-Matini/matini-portfolio',
    webLink: '#',
  },
  {
    id: 5,
    title: 'Wema Insurance Management System',
    description: 'A personal portfolio website built using React and CSS.',
    gitHubLink: 'https://github.com/Lynn-Matini/WemaIMS-reactSQL',
    webLink: '#',
  },
];

const skills = [
  {
    id: 1,
    skill: 'React',
    src: react,
  },
  { id: 2, skill: 'JavaScript', src: js },
  {
    id: 3,
    skill: 'Express',
    src: express,
  },
  { id: 4, skill: 'MySQL', src: mysql },
  { id: 5, skill: 'cPanel', src: cpanel },
  { id: 6, skill: 'Python', src: python },
  { id: 7, skill: 'Firebase', src: firebase },
  { id: 8, skill: 'Supabase', src: supabase },
];

export { certifications, education, experience, languages, projects, skills };
