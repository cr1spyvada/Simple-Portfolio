import React from 'react';

import { metadata } from '../../data/content';
import { PageContainer } from '../PageContainer';

import { faArrowRight, faCode, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Projects = ({ textEnter, textLeave }) => {
  return (
    <PageContainer textEnter={textEnter} textLeave={textLeave} title="Projects">
      <div className="w-full h-full md:w-5/7 grid p-4 gap-4 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:row-span-1 group relative lg:col-span-2 rounded-lg overflow-hidden">
          <ProjectCard textEnter={textEnter} textLeave={textLeave} idx={0} />
        </div>
        <div className="lg:row-span-1 group relative lg:col-span-1 rounded-lg overflow-hidden">
          <ProjectCard textEnter={textEnter} textLeave={textLeave} idx={1} />
        </div>
        <div className="lg:row-span-1 group relative lg:col-span-1 rounded-lg overflow-hidden">
          <ProjectCard textEnter={textEnter} textLeave={textLeave} idx={2} />
        </div>
        {/* <div className="lg:row-span-1 group relative lg:col-span-1 rounded-lg overflow-hidden">
          <ProjectCard textEnter={textEnter} textLeave={textLeave} idx={3} />
        </div> */}
        <div className="lg:row-span-1 group relative lg:col-span-2 rounded-lg overflow-hidden">
          <ProjectCard textEnter={textEnter} textLeave={textLeave} idx={3} />
        </div>
      </div>
    </PageContainer>
  );
};

const CardButton = ({ href, text, textEnter, textLeave }) => {
  return (
    <a
      onMouseOver={() => textEnter(2)}
      onMouseLeave={textLeave}
      className="rounded-full border-[1px] border-slate-500 px-2 flex gap-2 items-center text-"
      href={href}>
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowRight} className="text-[0.6rem]" />
    </a>
  );
};

const ProjectCard = ({ idx, textEnter, textLeave }) => {
  const { source, code, live, title, desc } = metadata.Projects[idx];
  const cursorProps = { textEnter, textLeave };

  return (
    <div className="rounded-lg bg-w3 dark:bg-w1 h-64 flex flex-col justify-between max-w-md mx-auto">
      <div className="p-2 flex flex-col gap-2 ">
        <div className="font-semibold text-lg text-slate-800">{title}</div>
        <div className="font-light text-sm text-slate-600">{desc}</div>
        <div className="flex gap-1 font-light text-sm text-slate-600">
          {live && <CardButton {...cursorProps} href={live} text="Visit" />}
          <CardButton {...cursorProps} href={code} text="Code" />
        </div>
      </div>
      <div className="mt-auto w-full max-h-1/2">
        <img src={source} alt={title} className="object-center" />
      </div>
    </div>
  );
};
