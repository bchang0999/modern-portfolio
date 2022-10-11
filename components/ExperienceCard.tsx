import React from "react";
import { motion } from "framer-motion";

type Props = {

};

function ExperienceCard({ }: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="https://cdn.sanity.io/images/f2x6zm2c/production/ca5478fe4aa36519a4f1a55aac2d93c104992a07-400x400.webp?w=2000&fit=max&auto=format&dpr=2"
                className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            />

            <div className="px-0 md:px-10 ">
                <h4 className="text-4xl font-light">"Full Stack Developer"</h4>
                <p className="font-bold text-2xl mt-1">"Coding Dojo"</p>
                <div className="flex space-x-2 my-2">
                        <img
                            className="h-10 w-10 rounded-full"
                            src="https://cdn.sanity.io/images/f2x6zm2c/production/9a01290fb3ca3e9599f5437c18cb1791d9bffa1e-587x330.webp?w=2000&fit=max&auto=format&dpr=2"
                        />
            
                </div>

                <p className="uppercase py-5 text-gray-300">
                2022-04-18 - 2022-07-29
                </p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    
                        <li> Learned concepts of OOP (Object-oriented programming). - CRUD ( Create, Read, Update, Destroy) is a simple checklist to full functionality for any web design or app. Lets Achieve CRUD!</li>
                        <li> Received experience usage in Front End Development with HTML and CSS. Implemented use of CSS based libraries such as Bootstrap & TailWind</li>
                    
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;