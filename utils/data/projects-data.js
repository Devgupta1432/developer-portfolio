import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-Learning Website',
        description: "In this group project, I worked majorly on the frontend part. This project is based on modern web technologies.",
        tools: ['HTML', 'CSS', 'Javascript'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Pet Adoption Platform',
        description: 'Developed a pet adoption platform using the MERN stack and Tailwind CSS, connecting loving families with pets in need of a home.',
        tools: ['HTML', 'Tailwind CSS', "MongoDB", "React", "JavaScript", "NodeJS"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Flat Rental Website',
        description: 'This flat rental website, developed using the MERN stack, allows landlords to upload properties and users to browse available listings.',
        tools: ['React-vite', 'Tailwind CSS', 'Stripe', 'Express', 'MongoDB','NodeJS','ExpressJS','JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
   
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },