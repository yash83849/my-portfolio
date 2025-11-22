import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-gray-900 to-black
 px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Hi, I'm <span className="text-red-400">Yash Gupta</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Full Stack Web Developer
          </h2>

          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            I build modern, responsive, and high-performance web applications using the MERN stack.
            I am passionate about creating clean UI, solving complex problems, and delivering smooth,
            meaningful digital experiences. I constantly explore new tools, improve my skills, and
            stay committed to writing efficient and scalable code. Always learning, always growing.
          </p>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white/20 backdrop-blur-md">
            
            <img
              src="/myimage.jpg"
              alt="Yash Gupta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
