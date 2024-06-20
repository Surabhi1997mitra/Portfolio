import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

const Experience = () => {
    return (
        <section id="experience">
            <div className="container px-5 py-10 mx-auto text-center font-sans">
                <AcademicCapIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Experience
                </h1>
                <div className="flex flex-wrap m-4 flex-col">
                    {experiences.map((experience) => (
                        <div className="flex desktop:flex-row flex-col rounded-md mb-4 hover:shadow-lg hover:shadow-cyan-500/50">
                            <div className="p-4 mobile:w:1 desktop:w-1/3 w-full flex items-center">
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="text-gray-300 text-sm uppercase">
                                        {experience.year}
                                    </span>
                                </span>
                            </div>
                            <div className="p-4 mobile:w:1 desktop:w-2/3 w-full flex justify-start">
                                <div className="flex-grow flex flex-col pl-4">
                                    <div className="text-xl font-medium text-white font-mono mb-2">
                                        {experience.designation}
                                    </div>
                                    <div className="text-gray-300 text-base">
                                        {experience.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience