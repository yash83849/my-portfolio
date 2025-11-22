import React from "react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black
 px-6 py-12 flex items-center justify-center">
      <div className="max-w-5xl w-full">

        <div className="text-4xl text-blue-500 font-bold text-center mb-10">
          My Services
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">

          {/* Frontend Development Card */}
          <div className="bg-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 ">
            <div className="text-2xl font-semibold mb-2">Frontend Development</div>
            <div className="text-pink-700 leading-relaxed">
              I create responsive, clean, and modern user interfaces using HTML, CSS, JavaScript, Tailwind CSS, and React.js.  
              Focused on smooth user experience and high-quality UI design.
            </div>
          </div>

          {/* Web Development Card */}
          <div className="bg-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 ">
            <div className="text-2xl font-semibold mb-2">Web Development</div>
            <div className="text-pink-700 leading-relaxed">
              I build complete web applications using the MERN stack.  
              Includes API development, database integration, authentication, and full responsive UI.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
