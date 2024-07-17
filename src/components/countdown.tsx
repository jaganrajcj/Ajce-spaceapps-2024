import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Countdown, { CountdownRenderProps } from "react-countdown";

// Random component
const Completionist: React.FC = () => (
  <div className="grid grid-cols-4 gap-4">
    <div className="rounded-xl backdrop-blur-lg w-20 h-20 md:w-full md:h-full md:p-5 bg-black/40 flex flex-col justify-center hover:scale-110 duration-300">
      <span className="text-5xl font-bold text-cyan-500 opacity-100 text-center">
        00
      </span>
      <span className="text-center text-gray-200">Days</span>
    </div>
    <div className="rounded-xl backdrop-blur-lg w-20 h-20 md:w-full md:h-full md:p-5 bg-black/40 flex flex-col justify-center hover:scale-110 duration-300">
      <span className="text-5xl font-bold text-red-600 opacity-100 text-center">
        00
      </span>
      <span className="text-center text-gray-200">Hours</span>
    </div>
    <div className="rounded-xl backdrop-blur-lg w-20 h-20 md:w-full md:h-full md:p-5 bg-black/40 flex flex-col justify-center hover:scale-110 duration-300">
      <span className="text-5xl font-bold text-purple-500 opacity-100 text-center">
        00
      </span>
      <span className="text-center text-gray-200">Minutes</span>
    </div>
    <div className="rounded-xl backdrop-blur-lg w-20 h-20 md:w-full md:h-full md:p-5 bg-black/40 flex flex-col justify-center hover:scale-110 duration-300">
      <span className="text-5xl font-bold text-orange-500 opacity-100 text-center">
        00
      </span>
      <span className="text-center text-gray-200">Seconds</span>
    </div>
  </div>
);

// Renderer callback with condition
const renderer: React.FC<CountdownRenderProps> = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-xl backdrop-blur-lg w-20 h-20 md:w-full md:h-full md:p-5 bg-black/40 flex flex-col justify-center hover:scale-110 duration-300">
          <span className="text-5xl font-bold text-cyan-500 opacity-100 text-center">
            {days}
          </span>
          <span className="text-center text-gray-200">Days</span>
        </div>
        <div className="rounded-xl backdrop-blur-lg w-20 h-20 md:w-full md:h-full md:p-5 bg-black/40 flex flex-col justify-center hover:scale-110 duration-300">
          <span className="text-5xl font-bold text-red-600 opacity-100 text-center">
            {hours}
          </span>
          <span className="text-center text-gray-200">Hours</span>
        </div>
        <div className="rounded-xl backdrop-blur-lg w-20 h-20 md:w-full md:h-full md:p-5 bg-black/40 flex flex-col justify-center hover:scale-110 duration-300">
          <span className="text-5xl font-bold text-purple-500 opacity-100 text-center">
            {minutes}
          </span>
          <span className="text-center text-gray-200">Minutes</span>
        </div>
        <div className="rounded-xl backdrop-blur-lg w-20 h-20 md:w-full md:h-full md:p-5 bg-black/40 flex flex-col justify-center hover:scale-110 duration-300">
          <span className="text-5xl font-bold text-orange-500 opacity-100 text-center">
            {seconds}
          </span>
          <span className="text-center text-gray-200">Seconds</span>
        </div>
      </div>
    );
  }
};

const CountDown: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Set the event start date to October 5, 2024
  const eventDate = new Date("2024-10-05T00:00:00");

  return (
    <div>
      {isClient ? (
        <Countdown date={eventDate} renderer={renderer} />
      ) : (
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-xl backdrop-blur-lg w-20 h-20 md:w-full md:h-full md:p-5 bg-black/40 flex flex-col justify-center hover:scale-110 duration-300">
            <span className="text-5xl font-bold text-cyan-500 opacity-100 text-center">
              00
            </span>
            <span className="text-center text-gray-200">Days</span>
          </div>
          <div className="rounded-xl backdrop-blur-lg w-20 h-20 md:w-full md:h-full md:p-5 bg-black/40 flex flex-col justify-center hover:scale-110 duration-300">
            <span className="text-5xl font-bold text-red-600 opacity-100 text-center">
              00
            </span>
            <span className="text-center text-gray-200">Hours</span>
          </div>
          <div className="rounded-xl backdrop-blur-lg w-20 h-20 md:w-full md:h-full md:p-5 bg-black/40 flex flex-col justify-center hover:scale-110 duration-300">
            <span className="text-5xl font-bold text-purple-500 opacity-100 text-center">
              00
            </span>
            <span className="text-center text-gray-200">Minutes</span>
          </div>
          <div className="rounded-xl backdrop-blur-lg w-20 h-20 md:w-full md:h-full md:p-5 bg-black/40 flex flex-col justify-center hover:scale-110 duration-300">
            <span className="text-5xl font-bold text-orange-500 opacity-100 text-center">
              00
            </span>
            <span className="text-center text-gray-200">Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountDown;
