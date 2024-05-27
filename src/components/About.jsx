import React from "react"
import { saveAs } from 'file-saver'

const About = () => {

  const downloadImage = () => {
    saveAs('https://drive.google.com/file/d/1efM0AJaW6NCVcYs_9xdvhy0khiqF2_lA/view', 'Surabhi_Mitra.pdf') // Put your image URL here.
  }
  
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Surabhi.
            <br className="hidden lg:inline-block" />I love to build amazing apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            🌟 I'm on the lookout for a new adventure in the world of Front-End Development! 🖥️✨
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#resume"
              onClick={downloadImage}
              className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Surabhi_Profile_Photo.jpg"
            style={{ borderRadius: 200 }}
          />
        </div>
      </div>
    </section>
  );
}

export default About