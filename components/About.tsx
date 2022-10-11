import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            //   viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={"https://cdn.sanity.io/images/f2x6zm2c/production/ed4d3e22c6a7bb8f9b33a8a26656a60183b3c7b5-886x886.webp?w=2000&fit=max&auto=format&dpr=2"}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
            ></motion.img>

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="decoration-[cyan]/50 underline">little</span>{" "}
                    background
                </h4>
                <p className="text-lg">"Hey guys I'm a recent graduate from Coding Dojo as Fullstack developer. I have a proud background of serving the U.S Army and wanted to show other vets, it's possible to find new purpose in life after leaving the service. I really enjoy learning new technologies and working on unique projects! As of right now REACT is one of the most smoothest libraries I'm obsessed with! If you have any questions, ideas, requests you would like to Collab with feel free to contact me!"</p>
            </div>
        </motion.div>
    );
}

export default About;