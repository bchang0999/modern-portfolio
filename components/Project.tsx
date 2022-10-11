import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
};

function Projects({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">

                <motion.div
                    
                    className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen"
                >
                    <Link href="https://nftdrop-challenge-wheat.vercel.app/">
                        <motion.img
                            initial={{
                                y: -300,
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="https://cdn.sanity.io/images/f2x6zm2c/production/5874a4333037e8c60452992015e29f968cf07762-2879x1521.png?w=2000&fit=max&auto=format&dpr=2"
                            className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
                        />
                    </Link>

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="decoration-[cyan]/50 underline">
                                Case Study 1 of 2:
                            </span>{" "}
                            My NFT Market
                        </h4>

                        <p className="text-lg text-center md:text-left">
                            React
                            ThirdWeb - To create Real NFT Drops
                            Next.js - Framework
                            TypeScript - To help typecheck and help prevent errors
                            Sanity - Backend to store and display components
                            MetaMask - Used for Crypto Wallet Authentication
                            Vercel - Deployment Method
                            Tailwind Css - Is used for styling this project
                        </p>
                    </div>
                </motion.div>

            </div>
            <div className="w-full absolute top-[30%] bg-[cyan]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
}

export default Projects;