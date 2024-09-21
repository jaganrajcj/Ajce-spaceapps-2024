"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CampusAmbassadorSchema, CampusAmbassadorType } from "@/lib/types";
import { CheckCheck, CircleX, Loader2 } from "lucide-react";
import { registerCampusAmbassador } from "../actions";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

type CampusAmbassadorSchemaType = z.infer<typeof CampusAmbassadorSchema>;
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
    success: true,
  });
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CampusAmbassadorSchemaType>({
    resolver: zodResolver(CampusAmbassadorSchema),
  });

  const onSubmit = async (data: CampusAmbassadorType) => {
    setIsLoading(true);
    setMessage({
      display: false,
      message: "",
      success: true,
    });

    const res = await registerCampusAmbassador(data);
    console.log("res", res);

    setIsLoading(false);

    if (res.success) {
      reset();
      toast.success("Registration Successful!", {
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
        router.push(
          "/register-ambassador/success?referralCode=" + res.referralCode
        );
      }, 1000);
    } else {
      toast.error(res.message, {
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
          Register as a campus ambassador
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-400">
          Enter your details we will be in touch with you!
        </p>
        {message?.display && (
          <p
            className={`mt-1 text-sm font-semibold leading-6 flex items-center gap-1 ${
              message?.success ? "text-green-500" : "text-red-500"
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
              htmlFor="full-name"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="full-name"
                disabled={isLoading}
                type="text"
                autoComplete="given-name"
                {...register("fullName")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.fullName.message as string}
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
              htmlFor="institution"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              School / College Name
            </label>
            <div className="mt-2">
              <input
                disabled={isLoading}
                id="institution"
                type="text"
                autoComplete=""
                {...register("institution")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.institution && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.institution.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3 sm:col-start-1">
            <label
              htmlFor="branch"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Branch
            </label>
            <div className="mt-2">
              <input
                disabled={isLoading}
                id="branch"
                type="text"
                autoComplete=""
                {...register("branch")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.branch && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.branch.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="year"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Year
            </label>
            <div className="mt-2">
              <input
                disabled={isLoading}
                id="year"
                type="number"
                autoComplete=""
                {...register("year")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.year && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.year.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="clubs-teams"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Clubs, Teams, Activities you're in? Tell us more about your role?
            </label>
            <div className="mt-2">
              <input
                disabled={isLoading}
                id="clubs-teams"
                type="text"
                autoComplete=""
                {...register("clubsTeamsActivities")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.clubsTeamsActivities && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.clubsTeamsActivities.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="why-amabassador"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Why do you want to be an ambassador?
            </label>
            <div className="mt-2">
              <input
                disabled={isLoading}
                id="why-amabassador"
                type="text"
                autoComplete=""
                {...register("whyAmbassador")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.whyAmbassador && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.whyAmbassador.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="links"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Any links to your social media profiles or projects?
            </label>
            <div className="mt-2">
              <input
                disabled={isLoading}
                id="links"
                type="text"
                autoComplete=""
                {...register("links")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.links && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.links.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="additional"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Anything you want to tell/ask us?
            </label>
            <div className="mt-2">
              <input
                disabled={isLoading}
                id="additional"
                type="text"
                autoComplete=""
                {...register("additional")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 bg-gray-800/70 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              {errors.additional && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.additional.message as string}
                </p>
              )}
            </div>
          </div>

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
      </div>
      <ToastContainer />
    </div>
  );
};

export default Page;
