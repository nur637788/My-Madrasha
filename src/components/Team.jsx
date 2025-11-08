import React from "react";
import Footer from "./Footer";

const Team = () => {
  const members = [
    {
      name: "Md Jalal Uddin",
      role: "Principal",
      img: "https://123808.ebmeb.gov.bd/uploads/etif/127892.jpg",
    },
    {
      name: "Md Humayun Kobir",
      role: "ASSISTANT TEACHER (SCIENCE)",
      img: "https://123808.ebmeb.gov.bd/uploads/etif/180054.jpg",
    },
    {
      name: "Md Tohidul Islam",
      role: "ASSISTANT TEACHER (COMPUTER)",
      img: "https://123808.ebmeb.gov.bd/uploads/etif/197867.jpg",
    },
    {
      name: "Abdun Nur",
      role: "Web Dev.",
      img: "/image/NurDev-image.jpg",
    },
  ];

  return (
    <div>
      <section className="bg-gray-900 py-20 px-6 md:px-20 text-gray-800 dark:text-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-4" data-aos="fade-up">
            Our Honorable Team
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12" data-aos="fade-up" data-aos-delay="100">
            Meet the dedicated teachers and staff of our Madrasah who guide students with knowledge and values.
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {members.map((person, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-green-400/40 p-5 transition-transform hover:-translate-y-2"
                data-aos="zoom-in"
                data-aos-delay={index * 100}>
                <div className="w-40 h-40 m-auto">
                  <img src={person.img} alt={person.name}
                    className="w-30 h-30  mx-auto rounded-full object-cover mb-4 border-4 border-green-500" />
                </div>

                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">{person.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
