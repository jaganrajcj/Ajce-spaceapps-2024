import React from "react";

type detailsType = {
  time: string;
  title: string;
  desc: string;
}[];

const Day = ({
  day,
  date,
  details,
}: {
  day: string;
  date: string;
  details: detailsType;
}) => {

  return (
    <div
      id="contact"
      className="relative flex w-full py-10 mb-5 md:mb-20 flex-col justify-center items-center bg-gray-900 md:max-w-7xl mx-auto rounded-2xl p-5 text-white"
    >
      <div
        className={`py-5 absolute inset-0 flex justify-center items-center text-gray-600 font-semibold text-8xl opacity-20`}
      >
        Day
        <span className={`ml-2 ${day == "01" ? "text-cyan-500" : "text-red-600"} `}>
          {" "}{day}
        </span>
      </div>
      <div className="relative z-10 px-4">
        <div className="text-center mb-4 font-semibold text-2xl">{date}</div>
        <ol className="items-center md:flex">
          {details &&
            details.map((data) => (
              <li key={data.time} className="relative mb-6 sm:mb-4">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 " />
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-white pt-3">
                    {data?.time ?? ""}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-300">
                    {data?.title ?? ""}
                  </time>
                  <p className="text-base font-normal text-gray-500">
                    {data?.desc ?? ""}
                  </p>
                </div>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Day;
