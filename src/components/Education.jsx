import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { educations } from "../data";

const Education = () => {
    return (
        <section id="education">
            <div className="container px-5 py-10 mx-auto text-center">
                <AcademicCapIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Education
                </h1>
                <div className="flex flex-wrap m-4">
                    {educations.map((education) => (
                        <div className="p-4 md:w-1/3 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <div className="inline-flex items-start">
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">
                                            {education.degreeName}
                                        </span>
                                        <span className="text-gray-300 text-sm ">
                                            {education.institute}
                                        </span>
                                        <span className="text-gray-300 text-sm ">
                                            {education.year}
                                        </span>
                                        <span className="text-gray-300 text-sm">
                                            {education.stream}
                                        </span>
                                        <span className="title-font font-medium text-white">
                                            {education.percentage ? "Percentage" : "CGPA"} - {education.percentage ? education.percentage : education.gpa}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education