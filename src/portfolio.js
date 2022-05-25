const header = {
  // all the properties are optional - can be left empty or deleted
  title: 'Professional Portfolio. (In progress...)',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Diego Plaza',
  role: 'Software Engineer and Data Analyst Candidate',
  description: "Find out what I'm currently working on.",
  resume: 'https://bit.ly/3uYiW6E',
  social: {
    linkedin: 'https://bit.ly/3xfKyY2',
    github: 'https://bit.ly/38sD4X0',
  },
}

const projects = [
  {
    name: 'Project 1: Automation & Control Prototype',
    description:
      "A device that automates and controls an insect's rearing enclosure",
    stack: ['Raspberry Pi', 'Raspbian', 'Python', 'MongoDB'],
    sourceCode: 'https://bit.ly/3FlXP32',
    // livePreview: '',
  },
  {
    name: 'Project 2: Simple Phone Catalog using React',
    description: 'A simple MERN application for a mockup phone store.',
    stack: ['JavaScript', 'React', 'Express', 'MongoDB'],
    sourceCode: 'https://bit.ly/37kBTc2',
    // livePreview: '',
  },
  {
    name: 'Project 3: Web Scraping Project',
    description:
      'Dynamic Web Scraping Project using Selenium for competition analysis',
    stack: [
      'Python',
      'Selenium',
      'BeautifulSoup',
      'Pandas',
      'Seaborn',
      'Streamlit',
    ],
    sourceCode: 'https://bit.ly/3vMTh2G',
    // livePreview: '',
  },
]

const skills = [
  'Python',
  'JavaScript',
  'TypeScript',
  'React & ReactNative',
  'HTML',
  'CSS',
  'Material UI',
  'Redux',
  'Git',
  'CI/CD',
  'SQL & NoSQL',
  'Firebase',
  'Amplify',
]

const contact = {
  email: 'dplaza@gmx.com',
}

export { header, about, projects, skills, contact }
