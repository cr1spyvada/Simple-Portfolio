import React from "react";

export const About = () => {
  return (
    <div className="border my-10 flex justify-between items-center h-screen dark:text-white">
      <div className=" my-auto text-center w-1/3 text-6xl border">ABOUT</div>
      <div className="w-2/3 border ml-4 text-left h-full flex flex-col justify-around font-light text-lg">
        <div className="items-end flex flex-col">
          <div className="font-normal w-full text-left text-xl py-2 text-gray-900 dark:text-sky-200 font-semibolad">
            Me,Myself & I
          </div>
          <ul className="w-3/4">
            <li className="list-none my-3">
              Currently in my 4th Year pursuing BTech Computer Science from IIIT Kottayam.
            </li>
            <li className="list-none my-3">
              Dabble in Web Development, Web Designing, Graphic Designing.
            </li>
            <li className="list-none my-3">
              Building effecient and scalable applications, while constantly learning new skills.
            </li>
          </ul>
        </div>
        <div className="border">
          <div className="font-normal w-full text-left text-xl py-2 text-gray-900 dark:text-sky-200 font-semibold">
            Skills
          </div>
          <ul>
            <li className="list-none flex justify-between">
              <a className="font-normal w-1/4">Languages:</a>
              <a className="w-3/4">JavaScript, Python, C, C++ , HTML, CSS, SQL, Bash, Java</a>
            </li>
            <li className="list-none flex justify-between">
              <a className="font-normal w-1/4">Frameworks:</a>
              <a className="w-3/4">React, React-Native, NodeJS,ExpressJS, Selenium,Numpy,Pandas</a>
            </li>
            <li className="list-none flex justify-between">
              <a className="font-normal w-1/4">Tools:</a>
              <a className="w-3/4">
                GIT, Google Cloud, Firebase, MySQL, Expo-CLI, Vercel, Jupyter, MongoDB
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
