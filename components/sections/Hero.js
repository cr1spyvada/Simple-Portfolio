import React from "react";
import { PageContainer } from '../PageContainer';

export const Hero = () => {
  return (
    <PageContainer>
      <div className="h-full w-full text-right my-50 flex justify-center items-center">
        <div className="w-3/5 font-light">
          <div className="text-4xl mb-2">Hi there,</div>
          <div className="text-3xl font-thin my-6">
            I'm <a className="font-bold">Vaisakh</a>, a Software Developer, Problem Solver, Student
            & above all curious about how things work.
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
