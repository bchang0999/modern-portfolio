import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
    const [text] = useTypewriter({
        words: [
            `Welcome to Brandon Chang's portfolio`,
            "Just-Your-Average-Full-Stack-Dev.tsx",
            "Import { Knowledge } from ../Everything",
            "<WhatIsHashMap?/>",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src={"https://cdn.sanity.io/images/f2x6zm2c/production/20d42da3ad87018e9eb19f9bbd810f0bec1bdded-1280x720.jpg?w=2000&fit=max&auto=format&dpr=2"}
                alt=""
            />
            <div className="z-20 relative">
                <h2 className="tracking-[15px] text-sm uppercase text-gray-500 pb-2">
                    Software Developer
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <span style={{ color:'cyan' }}> 
                    <Cursor/>
                    </span>
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>

                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>

                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>

                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;