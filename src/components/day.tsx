import React from "react";

const Day = ({ title, day }: { title: string; day: string }) => {
  return (
    <div
      id="contact"
      className="relative flex w-[95%] py-10 mb-5 md:mb-20 flex-col justify-center items-center bg-gray-900 max-w-7xl mx-auto rounded-2xl p-5 text-white"
    >
      <div className={`py-5 absolute inset-0 flex justify-center items-center text-gray-600 text-8xl opacity-20`}>
        Day <span className={`${day == '01'? 'text-cyan-500': 'text-red-600'} `}>{day}</span>
      </div>
      <div className="relative z-10">
        {title}
      </div>
    </div>
  );
};

export default Day;
