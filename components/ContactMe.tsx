import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
};

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = `mailto:bchang0999@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I have got just what you need.{" "}
                    <span className="decoration-[cyan]/50 underline">Lets Talk.</span>
                </h4>

                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[cyan] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+1 917-509-7515</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[cyan] h-7 w-7 animate-pulse" />
                        <a className="text-2xl" href={`mailto:bchang0999@gmail.com`}>
                            bchang0999@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[cyan] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">Naugatuck, CT 06770</p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 w-fit mx-auto"
                >
                    <div className="flex space-x-2">
                        <input
                            className="contactInput"
                            placeholder="Name"
                            type="text"
                            {...register("name")}
                        />
                        <input
                            className="contactInput"
                            placeholder="Email"
                            type="text"
                            {...register("email")}
                        />
                    </div>
                    <input
                        className="contactInput"
                        placeholder="Subject"
                        type="text"
                        {...register("subject")}
                    />
                    <textarea
                        className="contactInput h-36"
                        placeholder="Message"
                        {...register("message")}
                    />

                    <button
                        type="submit"
                        className="
            bg-[cyan] py-5 px-10 rounded-md text-black font-bold text-lg "
                    >
                        Submit
                    </button>
                </form>
            </div>
        </motion.div>
    );
}

export default ContactMe;