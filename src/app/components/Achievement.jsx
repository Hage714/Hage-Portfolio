"use client";
import React from "react";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});

const achievementsList = [
    {
        metric: "Projects",
        value: "10",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100",
    },
    {
        metric: "Awards",
        value: "7",
    },
    {
        metric: "Years",
        value: "1",
    },
];

const Achievement = () => {
    return (
        <>
            <Navbar />
            <div className="py-8 px-4 sm:py-16 sm:px-8 lg:px-16 mt-5" id="achievement">
                <div className="border-slate-600 border rounded-md py-8 px-4 sm:px-2 flex flex-col space-y-8 items-center md:flex-row md:space-y-0 md:justify-between">
                    {achievementsList.map((achievement, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center mx-4 space-y-2"
                            >
                                <h2 className="text-black text-3xl sm:text-4xl font-bold flex flex-row">
                                    {achievement.prefix}
                                    <AnimatedNumbers
                                        includeComma
                                        animateToNumber={parseInt(achievement.value)}
                                        locale="en-US"
                                        className="text-black text-3xl sm:text-4xl font-bold"
                                        configs={(_, index) => {
                                            return {
                                                mass: 1,
                                                friction: 100,
                                                tensions: 140 + (index + 1),
                                            };
                                        }}
                                    />
                                    {achievement.postfix}
                                </h2>
                                <p className="text-black text-base sm:text-lg">
                                    {achievement.metric}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Achievement;
