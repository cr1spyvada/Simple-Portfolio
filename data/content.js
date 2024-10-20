export const metadata = {
  Head: {
    title: 'Vaisakh NP'
  },
  Contents: ['Home', 'About', 'Career', 'Projects', 'Contact'],
  Home: {
    Name: 'Vaisakh',
    Bio: ['Software Developer', 'Problem Solver']
  },
  About: {
    Bio: [
      'I am a Software Developer specializing in Frontend Web Development',
      'Building efficient and scalable applications, while constantly seeking opportunities to grow.',
      'A Computer Science graduate with over 1+ year of full-time experience'
    ],
    Skills: {
      Frontend: 'NextJS, React Native, ThreeJS, TypeScript, Redux',
      Backend: 'Node.JS, ExpressJS, Jest, TypeScript, Prisma',
      Tools: 'gRPC, Algolia, CMS, Expo CLI',
      Databases: 'MongoDB, PostgreSQL, Redis'
    }
  },
  Experience: [
    { Org: 'Rivi', Role: ['SDE-1', 'Frontend Developer Intern'], Duration: ["Jan' 23", 'Present'] },
    { Org: 'Technoculture', Role: ['React Native Intern'], Duration: ["Nov' 22", "Feb' 23"] },
    { Org: 'Trisetra', Role: ['Frontend Developer Intern'], Duration: ["Jul' 22", "Aug' 22"] },
    { Org: 'EvolvFit', Role: ['Software Developer Intern'], Duration: ["Apr' 22", "Jun' 22"] },
    {
      Org: 'Aero Telcom Pvt Ltd',
      Role: ['Application Developer Intern'],
      Duration: ["Oct' 21", "Jan' 22"]
    }
    // {
    //   // Org: 'Indian Institute of Information Technology Kottayam',
    //   Org: 'IIIT Kottayam',
    //   Role: 'Graduation',
    //   Duration: ["August' 19", "April' 23"]
    // }
    // {
    //   Org: 'Delhi Public School, R.K Puram',
    //   Role: 'High School',
    //   Duration: ["May' 07", "April' 19"]
    // }
  ],
  Projects: [
    {
      source: './portfolio.png',
      title: 'Portfolio Template',
      desc: 'Portfolio Template made using Tailwind,Framer Motion',
      code: 'https://github.com/cr1spyvada/Simple-Portfolio',
      live: 'https://vaisakhnp.vercel.app/'
    },
    {
      source: './blog.png',
      title: 'Blog Site',
      desc: 'Blog Posting Site linked with CMS',
      code: 'https://github.com/cr1spyvada/QuicBlog',
      live: 'https://quic-blog.vercel.app'
    },
    {
      source: './unihub.png',
      title: 'Uni-Hub',
      desc: 'A real time voice chat application.',
      code: 'https://github.com/cr1spyvada/Uni-Hub'
      // live: 'https://cr1spyvada.github.io/simpleweather-app/'
    },
    {
      source: './VA.jpg',
      title: 'Virtual Assistant',
      desc: 'A Virtual Assistant that helps you with tasks through voice or text input',
      code: 'https://github.com/cr1spyvada/Virtual-Assistant'
      // live: 'https://cr1spyvada.github.io/simpleweather-app/'
    },
    {
      source: './img2.jpg',
      title: 'Weather App',
      desc: 'Simple Weather Info',
      code: 'https://github.com/cr1spyvada/simpleweather-app',
      live: 'https://cr1spyvada.github.io/simpleweather-app/'
    }
  ]
};
