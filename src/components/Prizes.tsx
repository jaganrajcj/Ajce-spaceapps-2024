"use client"

import React from 'react';
import { Typography, Card, CardBody } from "@material-tailwind/react";
import PrizeCard from './PrizeCard';
import SpecialAwardCard from './SpecialAwardCard';


const Prizes = () => {
    const collegePrizes = [
        { place: '1st', amount: '₹35,000', extras: 'Memento & Certificate' },
        { place: '2nd', amount: '₹20,000', extras: 'Memento & Certificate' },
        { place: '3rd', amount: '₹15,000', extras: 'Memento & Certificate' },
    ];

    const schoolPrizes = [
        { place: '1st', amount: '₹20,000', extras: 'Memento & Certificate' },
        { place: '2nd', amount: '₹15,000', extras: 'Memento & Certificate' },
        { place: '3rd', amount: '₹10,000', extras: 'Memento & Certificate' },
    ];

    const specialAwards = [
        "Use of Science Award",
        "Best Use of Data Award",
        "Best Use of Technology Award",
        "Galactic Impact Award",
        "Best Mission Concept Award",
        "Most Inspirational Award",
        "Best Storytelling Award",
        "Global Connection Award",
        "Art & Technology Award",
        "Local Impact Award",
        "Best Design Award",
        "Best Engineering Solution Award",
        "Best Software Development Award",
        "Best Multi-Disciplinary Approach Award",
        "Best Create Your Own Challenge Award"
    ];

    return (
        <section className="container px-8 mx-auto mb-5 text-white">
            <Typography variant="h2" color="white" className="mb-8 text-center">
                Prizes and Awards
            </Typography>

            <div className="mb-16">
                <Typography variant="h5" color="orange" className="mb-6">
                    College Level Prizes
                </Typography>
                <Card className="bg-gray-900 text-white mb-6">
                    <CardBody className="text-center py-4">
                        <div className="flex flex-row gap-2 justify-center">
                            <Typography variant="h5" color="white" className="mb-2">
                                Prize pool of
                            </Typography>
                            <Typography variant="h5" color="yellow" className="mb-2">
                                ₹1,00,000
                            </Typography>
                        </div>
                        <Typography variant="h6" color="white" className="mb-2">
                            Alex Abraham, Kollamkulam Memorial Award
                        </Typography>
                        <Typography className="text-gray-300 text-sm">
                            Special recognition for outstanding college participants
                        </Typography>
                    </CardBody>
                </Card>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {collegePrizes.map((prize, index) => (
                        <PrizeCard key={index} {...prize} />
                    ))}
                </div>
            </div>


            <div className="mb-16">
                <Typography variant="h5" color="orange" className="mb-6">
                    School Level Prizes
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {schoolPrizes.map((prize, index) => (
                        <PrizeCard key={index} {...prize} />
                    ))}
                </div>
            </div>

            <Card className="bg-gray-900 text-white mb-10">
                <CardBody>
                    <Typography variant="h5" color="orange" className="mb-4">
                        Additional Awards
                    </Typography>
                    <Typography className='text-gray-300'>
                        The top 7 teams (other than the first three) will receive mementos and certificates.
                    </Typography>
                </CardBody>
            </Card>

            <div className="mb-16">
                <Typography variant="h4" color="white" className="text-center">
                    Special Awards
                </Typography>
                <Typography className="mb-6 text-center text-gray-400">
                    15 categories for schools and colleges
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {specialAwards.map((award, index) => (
                        <SpecialAwardCard key={index} title={award} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Prizes;