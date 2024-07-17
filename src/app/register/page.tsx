import React from "react";

const Page = () => {
  return (
    <div className="relative min-h-screen w-full mt-0 pt-20 md:pt-32 pb-5">
      <div className="rounded-2xl max-w-[95%] bg-gray-900/70 backdrop-blur-lg p-8 md:p-12 md:max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold leading-7 text-gray-200">
          Register your team
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-400">
          Register your team here
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone"
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              School / College Name
            </label>
            <div className="mt-2">
              <input
                id="street-address"
                name="street-address"
                type="text"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="district"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              District
            </label>
            <div className="mt-2">
              <select
                id="district"
                name="district"
                autoComplete="district-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                {/* <option>Select District</option> */}
                <option>Thiruvananthapuram</option>
                <option>Kollam</option>
                <option>Pathanamthitta</option>
                <option>Alappuzha</option>
                <option>Kottayam</option>
                <option>Idukki</option>
                <option>Ernakulam</option>
                <option>Thrissur</option>
                <option>Palakkad</option>
                <option>Malappuram</option>
                <option>Kozhikode</option>
                <option>Wayanad</option>
                <option>Kannur</option>
                <option>Kasaragod</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3 sm:col-start-1">
            <label
              htmlFor="teamLead"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Team Lead&apos;s Name
            </label>
            <div className="mt-2">
              <input
                id="teamLead"
                name="teamLead"
                type="text"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="region"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Team Lead&apos;s Phone Number
            </label>
            <div className="mt-2">
              <input
                id="teamLeadPhn"
                name="teamLeadPhn"
                type="text"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="cursor-pointer mt-5 w-full text-black bg-gradient-to-r bg-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">
          Register
        </div>
      </div>
    </div>
  );
};

export default Page;
