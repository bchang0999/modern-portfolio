import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";


type Props = {};

const Header = () => {
    return (
        <header className="sticky top-0 flex items-start xl:items-center justify-between p-5 z-20 max-w-7xl mx-auto">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center"
            >
                {/* {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor="gray"
                        bgColor="transparent"
                    />
                ))} */}

                <SocialIcon
                    className="cursor-pointer"
                    network="linkedin"
                    fgColor="gray"
                    bgColor="transparent"
                    url={"https://www.linkedin.com/in/brandon-chang-521bb120b/"}
                />

                <SocialIcon
                    className="cursor-pointer"
                    network="instagram"
                    fgColor="gray"
                    bgColor="transparent"
                    url={"https://www.instagram.com/bchang0999/"}
                />

            </motion.div>

            <Link href="#contact">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 1 }}
                    className="flex flex-row items-center text-gray-300 cursor-pointer"
                >
                    <SocialIcon
                        className="cursor-pointer"
                        network="email"
                        fgColor="gray"
                        bgColor="transparent"
                    />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                        Get In Touch
                    </p>
                </motion.div>
            </Link>
        </header>
    );
};

export default Header;