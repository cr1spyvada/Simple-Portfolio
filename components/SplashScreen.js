import React from 'react';

const SplashScreen = () => {
  return (
    <div className="bg-w1 h-screen w-screen flex flex-col justify-center items-center">
      {/* <div className="h-20 w-20 border-8 bg-gradient-to-t from-blue-500 to-green-400 rounded-lg border-white animate-[spin_2s_linear_infinite]"></div> */}
      <div className="bg-w6 rounded-full h-8 w-8 mb-1 transition animate-bounceY delay-[1000ms]" />
      <div className="bg-w2 rounded-full h-8 w-8 transition animate-bounce" />
      <div className="bg-w4 rounded-full h-8 w-8" />
    </div>
  );
};

export default SplashScreen;
