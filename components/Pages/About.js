import React from "react";

export const About = () => {
  return (
    <div className="border my-10 flex justify-around items-centers h-screen dark:text-white">
      <div className=" my-auto text-center w-1/3 text-6xl">ABOUT</div>
      <div className="w-2/3 border  mx-4 text-left h-full flex flex-col justify-around font-light text-lg">
        <div>
          <div className="font-normal text-xl py-2 text-green-900 dark:text-green-100">
            Me,Myself & I
          </div>
          <ul>
            <li className="list-none">
              Currently in my 4th Year pursuing BTech Computer Science from IIIT
              Kottayam.
            </li>
            <li className="list-none">
              Dabble in Web Development, Web Designing, Graphic Designing.
            </li>
            <li className="list-none">
              Building effecient and scalable applications, while constantly
              learning new skills.
            </li>
          </ul>
        </div>
        <div>
          <div className="font-normal text-xl  py-6 pb-2 text-green-900 dark:text-green-100">
            Skills
          </div>
          <ul>
            <li className="list-none flex justify-between">
              <a className="font-normal">Languages:</a> JavaScript, Python, C,
              C++ , HTML, CSS, SQL, Bash, Java
            </li>
            <li className="list-none flex justify-between">
              <a className="font-normal">Frameworks:</a> React, React-Native,
              NodeJS,ExpressJS, Selenium,Numpy,Pandas
            </li>
            <li className="list-none flex justify-between">
              <a className="font-normal">Tools:</a> GIT, Google Cloud, Firebase,
              MySQL, Expo-CLI, Vercel, Jupyter, MongoDB
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
