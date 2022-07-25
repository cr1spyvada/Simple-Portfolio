import React from 'react';
import { metadata } from '../../data/content';
import { PageContainer } from '../PageContainer';

const Experience = () => {
  return (
    <PageContainer title="experience">
      <div className="h-full relative m-4">
        <div className="absolute h-full border bg-green-500 left-1/2" />
        <div className="h-full flex flex-col justify-between  gap-y-0 text-lg">
          {metadata.Experience.map((value, idx) => (
            <div className="w-full relative flex align-center justify-center gap-x-6">
              <div
                className={`${
                  idx % 2 == 0 ? 'text-right order-1' : 'order-3'
                } w-2/5 dark:bg-white dark:text-black p-4 rounded-lg`}>
                <div className="font-semibold text-2xl">{value.Org}</div>
                <div className="font-medium">{value.Role}</div>
              </div>
              <div
                className={`${idx == 0 ? 'bg-lime-500' : 'bg-white'} m${
                  idx === 0 ? 'b' : idx === metadata.Experience.length - 1 ? 't' : 'y'
                }-auto z-10 order-2 rounded-3xl border-2 border-white`}>
                <div
                  className={`${idx == 0 ? 'bg-lime-500 animate-ping' : 'bg-white'} m${
                    idx === 0 ? 'b' : idx === metadata.Experience.length - 1 ? 't' : 'y'
                  }-auto z-10 rounded-3xl border-2 border-white p-3`}
                />
              </div>
              <div
                className={`${
                  idx % 2 == 0 ? 'order-3' : 'order-1 text-right'
                } w-2/5 text-gray-400 my-auto p-2 align-middle`}>
                {value.Duration[0]} - {value.Duration[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Experience;
//  <div class="flex flex-col border justify-center py-6 lg:my-24 relative w-full mx-auto lg:max-w-4xl">
//   {/* <!-- Vertical middle line--> */}
//   <div class="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 md:block left-1/2"></div>
//   <div class="space-y-12 lg:space-y-8">
//     {/* <!-- Left section -->*/}
//     <div>
//       <div class="flex">
//         <div class="flex items-center justify-start w-full mx-auto">
//           <div class="w-full lg:w-1/2 lg:pr-8">
//             <div class="p-4 rounded shadow-lg shadow-cyan-300">
//               <p>Lorem, ipsum dolor sit amet consectetur dolor elit. </p>
//             </div>
//           </div>
//         </div>
//         <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
//           <span class="">1</span>
//         </div>
//       </div>
//     </div>

//     {/* <!-- Right section -->*/}
//     <div>
//       <div class="flex flex-col items-center">
//         <div class="flex items-center justify-end w-full mx-auto">
//           <div class="w-full lg:w-1/2 lg:pl-8">
//             <div class="p-4 rounded shadow-lg shadow-red-300">
//               <p>Lorem, ipsum dolor sit amet consectetur dolor elit. </p>
//             </div>
//           </div>
//         </div>
//         <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
//           <span class="">2</span>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
