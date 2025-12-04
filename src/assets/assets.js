import { desc, title } from 'framer-motion/client';
import { FaReact, FaServer } from 'react-icons/fa';
import { FaS } from 'react-icons/fa6';

export const assets = {
    logo: require('./images/logo.png'),
}


export const aboutInfo = [

];

export const skills = [
    {
        title: 'Frontend Development',
        icon: FaReact,
        description: 'Experience with React, Vue, and Angular to build responsive and dynamic user interfaces.',
        tags: ['React', 'Vue', 'Angular', 'HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Backend Development',
        icon: FaServer,
        description: 'Proficient in Node.js, Express, and database management with MongoDB and SQL.',
        tags: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs']
    },
    {
        title: 'Database Management',
        icon:FaDatabase,
        description: 'Skilled in designing and managing databases using MySQL, PostgreSQL, and MongoDB.',
        tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Design']
    }
]