// projects
import propl from '../assets/proplanss.png'
import dailyp from '../assets/dailyplss.png'
import portf from '../assets/portfolioss.png'
import pricepred from '../assets/pricepredss.png'
import rag from '../assets/ragpross.png'
import scrap from '../assets/scrapbookss.png'
import jdfit from '../assets/jdfitss.png'
export const projects = [
    {
        title: 'Personal Portfolio Website',
        description: 'A personal portfolio website built with React and Tailwind CSS',
        image: portf,
        github:'https://github.com/SAmaksh5097/Personal-Portfolio-Website',
        link:'https://samaksh-arzare.vercel.app/',
        skills: ['React', 'Tailwind CSS', 'Framer Motion']
    },
    {
        title: 'JDFit',
        description: 'Full stack AI-powered LaTeX resume tailoring engine to eliminate manual overhead of updating resumes for different JD.',
        image: jdfit,
        github: 'https://github.com/SAmaksh5097/JDFit',
        link:'https://jd-fit.vercel.app/',
        skills: ['PERN Stack', 'Token oriented object notation', 'OpenAI API']
    },
    {
        title: 'ProPlanner',
        description: 'Full stack project roadmap generator built with React, Node.js, and Google Gemini API',
        image: propl,
        link: 'https://pro-planner-app.vercel.app/',
        github:'https://github.com/SAmaksh5097/ProPlanner-App',
        skills: ['React', 'Node.js', 'Express.js', 'Google Gemini API']


    },
    {
        title: 'PersonalRAG',
        description: 'A personal RAG engine to transform raw text input into an interactive knowledge base.',
        image: rag,
        github:'https://github.com/SAmaksh5097/RAG-Project',
        link: 'https://rag-project-liart.vercel.app/',
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB','RAG']
    },
    {
        title: 'ScrapBook',
        description: 'A PERN-stack digital yearbook that transforms collaborative memories into a dynamic, date-wise editorial timeline.',
        image: scrap,
        github: 'https://github.com/SAmaksh5097/ScrapBook',
        link: 'https://scrap-book-liart.vercel.app/',
        skills: ['React', 'Node.js','Express.js','PostgreSQL']
    },
    {
        title: 'Vehicle Price Prediction & Analytics Platform',
        description:'Platform to predict vehicle prices & get market value insights using ML model, built with Python, Flask.',
        image:pricepred,
        github:'https://github.com/SAmaksh5097/price-prediction-project',
        link: 'https://project-7i3x.onrender.com/',
        skills: ['Python', 'Flask', 'Machine Learning']
    },
    {
        title: 'Daily Planner',
        description: 'A simple daily planner app built with React and Tailwind CSS',
        image: dailyp,
        link: 'https://daily-planner-app-black.vercel.app',
        github:'https://github.com/SAmaksh5097/Daily-Planner-App',
        skills: ['React', 'Tailwind CSS']
    },
]


export const details = [
    {
        key: "Mail",
        value: "samaksharzare.cs2004@gmail.com"
    },
    {
        key: "Address",
        value: "Delhi, India"   
    }
]

export const skills = [
    {
      name: 'HTML',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',  
    },
    {
      name: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',  
    },
    {
      name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',  
    },
    {
      name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',  
    },
    {
      name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',  
    },
    {
        name: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
        name: 'Express.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',  
    },
    {
      name: 'Postman',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',  
    },

]

export const about = "I'm a pre-final year CS undergrad driven by a curiosity for technology 💻 & a desire to solve complex real-world problems 🌍. I have a strong foundation in Data Structures & Algo using JAVA.  I am passionate about building clean, performant, and user-friendly applications."

import linkedin from '../assets/icon-linkedin.svg'
import github from '../assets/icon-github.svg'
import codolio from '../assets/icon-codolio.svg'
export const links = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/samaksh-arzare-925779294',
            icon: linkedin,
        },
        {
            name: 'GitHub',
            url: 'https://github.com/SAmaksh5097',
            icon: github,
        },
        {
            name:'Codolio',
            url:'https://codolio.com/profile/sam_a11',
            icon: codolio,
        },
        {
            name:'Resume',
            url:'https://drive.google.com/file/d/1xr6OnmRv0ObctSzi7PxP8EBs0ps1J7S4/view?usp=drive_link',
            icon: 'https://img.icons8.com/ios-filled/50/000000/resume.png',

        }

    ]
