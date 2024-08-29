"use client";

import { BackgroundBeams } from "@/components/background-beams";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { boolean, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegistrationType } from "@/lib/types";
import { Ban, CheckCheck, CircleX, Loader2 } from "lucide-react";
import { registerUser } from "../actions";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";


type RegisterSchemaType = z.infer<typeof RegisterSchema>;
type messageType = {
  display: boolean;
  message?: string;
  success: boolean;
};

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<messageType>({
    display: false,
    message: "",
    success: true, // true for success and false for error messages
  });
  const router = useRouter();

  const notify = () => toast.success('Registration Successful!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: RegistrationType) => {
    setIsLoading(true);
    setMessage({
      display: false,
      message: "",
      success: true,
    });

    const res = await registerUser(data);

    setIsLoading(false);

    if (res.success) {
      // setMessage({
      //   display: true,
      //   message: res.message,
      //   success: true,
      // });
      reset()
      toast.success('Registration Successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => {
        router.push('/')
      }, 5000);
    } else {
      // setMessage({
      //   display: false,
      //   message: res.message,
      //   success: false,
      // });
      toast.error('Registration Failed!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="relative min-h-screen w-full mt-0 pt-20 md:pt-32 pb-5">
      <div className="rounded-2xl max-w-[95%] bg-gray-900/70 backdrop-blur-lg p-8 md:p-12 md:max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold leading-7 text-gray-200">
          Register your team
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-400">
          Type in your team details and we will be in touch
        </p>
        {message?.display && (
          <p
            className={`mt-1 text-sm font-semibold leading-6 flex items-center gap-1 ${message?.success ? "text-green-500" : "text-red-500"
              } `}
          >
            {message?.success ? (
              <CheckCheck className="w-[17px] h-[17px]" />
            ) : (
              <CircleX className="w-[15px] h-[15px]" />
            )}
            {message.message}
          </p>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        >
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
                disabled={isLoading}
                type="text"
                autoComplete="given-name"
                {...register("firstName")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.firstName.message as string}
                </p>
              )}
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
                disabled={isLoading}
                id="last-name"
                type="text"
                autoComplete="family-name"
                {...register("lastName")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.lastName.message as string}
                </p>
              )}
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
                disabled={isLoading}
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                disabled={isLoading}
                id="phone"
                type="phone"
                autoComplete="phone"
                {...register("phone")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message as string}
                </p>
              )}
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
                disabled={isLoading}
                id="street-address"
                type="text"
                autoComplete="street-address"
                {...register("school")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.school && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.school.message as string}
                </p>
              )}
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
                disabled={isLoading}
                id="district"
                autoComplete="district-name"
                {...register("district")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="">Select District</option>
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                <option value="Kollam">Kollam</option>
                <option value="Pathanamthitta">Pathanamthitta</option>
                <option value="Alappuzha">Alappuzha</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Idukki">Idukki</option>
                <option value="Ernakulam">Ernakulam</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Palakkad">Palakkad</option>
                <option value="Malappuram">Malappuram</option>
                <option value="Kozhikode">Kozhikode</option>
                <option value="Wayanad">Wayanad</option>
                <option value="Kannur">Kannur</option>
                <option value="Kasaragod">Kasaragod</option>
                <option value="Non-Keralite">Non-Keralite</option>
              </select>
              {errors.district && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.district.message as string}
                </p>
              )}
            </div>
          </div>

          {/* <div className="sm:col-span-3 sm:col-start-1">
            <label
              htmlFor="teamLead"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Team Lead&apos;s Name
            </label>
            <div className="mt-2">
              <input
                disabled={isLoading}
                id="teamLead"
                type="text"
                autoComplete=""
                {...register("teamLead")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.teamLead && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.teamLead.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="teamLeadPhn"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Team Lead&apos;s Phone Number
            </label>
            <div className="mt-2">
              <input
                disabled={isLoading}
                id="teamLeadPhn"
                type="phone"
                autoComplete="phone"
                {...register("teamLeadPhn")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.teamLeadPhn && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.teamLeadPhn.message as string}
                </p>
              )}
            </div>
          </div> */}

          <div className="col-span-full">
            <button
              disabled={isLoading}
              type="submit"
              className="mt-5 w-full rounded-md bg-white py-2 px-4 text-gray-900 text-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
            >
              <span className="flex justify-center gap-2 items-center ">
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                Register
              </span>
            </button>
          </div>
        </form>
        {/* <button onClick={notify}>Notify!</button> */}
      </div>
      {/* <BackgroundBeams /> */}
      <ToastContainer />
    </div>
  );
};

export default Page;
