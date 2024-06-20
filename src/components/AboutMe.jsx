import React from "react"
import { UserCircleIcon } from "@heroicons/react/solid";
import "./style.css"

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <UserCircleIcon className="w-10 text-gray-300 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Profile
                    </h1>
                </div>
                <div className="aboutMeContent">
                    <div className="aboutMeHeader text-gray-300">🔍 About Me:</div>
                    <p className="text-gray-300">👨‍💻 Front-End Developer with 3 years of hands-on experience.</p>
                    <p className="text-gray-300">🌐 Expertise in React.js, HTML, CSS, JavaScript, Tyepscreipt and responsive design.</p>
                    <p className="text-gray-300">💡 Passionate about creating seamless user experiences and pixel-perfect designs.</p>
                </div>

                <div className="aboutMeContent">
                    <div className="aboutMeHeader text-gray-300">🔎 What I'm Looking For:</div>
                    <p className="text-gray-300">🔍 Exciting opportunities in Front-End Development.</p>
                    <p className="text-gray-300">🚀 Roles that encourage creativity, innovation, and continuous learning.</p>
                    <p className="text-gray-300">🌐 A company with a dynamic culture and a commitment to excellence.</p>
                </div>
            </div >
        </section >
    );
}

export default AboutMe