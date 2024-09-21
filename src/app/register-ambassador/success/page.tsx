"use client";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ReferralCode = () => {
  const params = useSearchParams();
  return (
    <span className="font-semibold text-[#e7f434]">
      {params.get("referralCode")}
    </span>
  );
};

const Page = () => {
  return (
    <div className="relative min-h-screen w-full mt-0 pt-20 md:pt-32 pb-5">
      <div className="max-w-[95%] bg-gray-900/70 backdrop-blur-lg p-8 md:p-12 md:max-w-7xl mx-auto">
        {" "}
        <Link href="/" className="text-white underline">
          <MoveLeft />
          Back to landing
        </Link>
        <div className="flex flex-col md:flex-row mt-12 items-center">
          <div className="mb-10">
            <h1 className="text-gray-200 text-2xl md:text-4xl">
              Successfully registered as a Campus Ambassador
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200 mt-10">
              Your Referral Code:{" "}
              <Suspense fallback={<span>Loading...</span>}>
                <ReferralCode />
              </Suspense>
            </h2>
            <p className="text-gray-400 mt-5">
              Ask your friends to use this referral code when they register!
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl text-gray-200 mb-5">
              Join the Whatsapp group
            </h2>
            <p className="mt-3 text-gray-400">
              Join this{" "}
              <a
                href="https://chat.whatsapp.com/IggWk3ceKOGFo6RJgsR3Ug"
                className="underline"
              >
                Whatsapp group(link)
              </a>{" "}
              for Ambassadors to keep up with the updates
            </p>
            <a
              href="https://chat.whatsapp.com/IggWk3ceKOGFo6RJgsR3Ug"
              target="_blank"
            >
              <Image
                src="/image/campus_ambassador_qr.png"
                alt="QR code for capmus aambassador whatsapp group"
                width={250}
                height={250}
                className="mt-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
