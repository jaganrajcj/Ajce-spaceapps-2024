"use client"

import React from "react";
import Header from "../register/Header";
import { top10, specialAwards } from "./winnersData";
import { Typography } from "@material-tailwind/react";
import TopWinners from "@/components/TopWinners";
import SpecialAwards from "@/components/SpecialAwards";

const Winners = () => {
    return (
    <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="container mx-auto px-4 py-12 pt-20 md:pt-32">
            <Typography variant="h2" color="white" className="text-center mb-12">
                NASA Space Apps Challenge 2024 Winners
            </Typography>
            <TopWinners top10={top10} />
            <SpecialAwards specialAwards={specialAwards} />
        </div>
    </div>
    );
};

export default Winners;
