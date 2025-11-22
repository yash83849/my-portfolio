import React from "react";

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black px-6 py-12 text-gray-800">
      <div className="max-w-4xl mx-auto">

        <div className="text-4xl font-bold text-white text-center mb-10">
          My Work
        </div>

        <div className="space-y-8">

          {/* Software Developer Intern */}
          <div className="bg-gray-200 p-6 rounded-2xl shadow-lg border-l-4 border-indigo-600 hover:shadow-xl transition-all">
            <div className="text-2xl font-semibold">Software Developer Intern</div>
            <div className="text-indigo-600 font-medium">Digipodium</div>
            <div className="text-sm text-gray-600 mb-3">2024 – 2025 (8 Months)</div>
            <div className="text-gray-700 leading-relaxed">
              Completed 8 months of full-stack development training. Worked on frontend with HTML, CSS, JavaScript, Tailwind CSS, and React.js. Also gained experience in backend development using Node.js and Express.js.
            </div>
          </div>

          {/* College Club Management System */}
          <div className="bg-gray-200 p-6 rounded-2xl shadow-lg border-l-4 border-indigo-600 hover:shadow-xl transition-all">
            <div className="text-2xl font-semibold">College Club Management System</div>
            <div className="text-indigo-600 font-medium">Full Stack Project</div>
            <div className="text-sm text-gray-600 mb-3">2024</div>
            <div className="text-gray-700 leading-relaxed">
              Developed a complete club management platform with features like club registration, role-based access (admin/member), secure login using JWT, event scheduling, and announcements. Built using React.js, Node.js, Express.js, and MongoDB.
            </div>
          </div>

          {/* Local Business Directory Website */}
          <div className="bg-gray-200 p-6 rounded-2xl shadow-lg border-l-4 border-indigo-600 hover:shadow-xl transition-all">
            <div className="text-2xl font-semibold">Local Business Directory Website</div>
            <div className="text-indigo-600 font-medium">Full Stack Project</div>
            <div className="text-sm text-gray-600 mb-3">2023 – 2024</div>
            <div className="text-gray-700 leading-relaxed">
              Created a platform where users can search and explore local businesses with category-based filtering. Implemented advanced search, clean UI, and dynamic business listings using the MERN stack.
            </div>
          </div>

          {/* Team Lead – MCA Final Year Project */}
          <div className="bg-gray-200 p-6 rounded-2xl shadow-lg border-l-4 border-indigo-600 hover:shadow-xl transition-all">
            <div className="text-2xl font-semibold">Team Lead – MCA Final Year Project</div>
            <div className="text-indigo-600 font-medium">Leadership Experience</div>
            <div className="text-sm text-gray-600 mb-3">2024</div>
            <div className="text-gray-700 leading-relaxed">
              Led a team during the MCA final year project, ensuring structured development, version control using Git/GitHub, and timely project delivery.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
