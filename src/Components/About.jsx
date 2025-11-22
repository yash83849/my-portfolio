import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-gray-900 to-black min-h-screen flex items-center justify-center py-16 px-6 text-gray-800">
      <div className="max-w-5xl w-full bg-gray-200 shadow-xl rounded-2xl p-10">

       
        <h1 className="text-5xl  font-bold text-center mb-8 text-black">
          About 
        </h1>

        
        <div className="text-lg leading-relaxed space-y-4">
          <p>
            Hi! I'm <span className="font-semibold text-pink-600">Yash Gupta</span>, a passionate{" "}
            <span className="font-semibold">Full Stack Developer</span> who enjoys
            creating beautiful and functional web applications. I work with
            modern tools such as{" "}
            <span className="font-semibold text-pink-600">
              React, Node.js, Express, MongoDB,
            </span>{" "}
            and <span className="font-semibold text-pink-600">Tailwind CSS</span>.
          </p>

          <p>
            I completed my MCA and have built multiple MERN stack projects.
            I love solving problems, learning new technologies, and improving my skills every day.
          </p>

          <p>
            Outside of coding, I am interested in UI/UX design and exploring tools that improve user experience.
          </p>
        </div>

       
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-black">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-indigo-100 text-pink-600 rounded-full font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
