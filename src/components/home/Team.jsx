import React from "react";
import lorenzo from "../../assets/Home/lorenzo.jpg";
import ronald from "../../assets/Home/ronald.jpg";
import arnol from "../../assets/Home/arnol.jpg";
import alessandro from "../../assets/Home/alessandro.jpg";
import leo from "../../assets/Home/leo.jpg";

export const Team = () => {
  const teamMembers = [
    {
      name: "Leonel Ortega",
      role: "Developer",
      image: leo,
      id: "u202115733",
      tags: ["Backend", "Frontend", "IoT", "Software Development"],
    },
    {
      name: "Arnol Cáceres",
      role: "Developer",
      image: arnol,
      id: "u20201b338",
      tags: ["Backend", "Software Development", "IoT"],
    },
    {
      name: "Lorenzo Navarro",
      role: "Developer",
      image: lorenzo,
      id: "u201713141",
      tags: ["Backend", "Software Development", "IoT"],
    },
    {
      name: "Ronald Siancas",
      role: "Developer",
      image: ronald,
      id: "U202020594",
      tags: ["Frontend", "Software Development"],
    },
    {
      name: "Alessandro Vega",
      role: "Developer",
      image: alessandro,
      id: "U201910225",
      tags: ["Frontend", "Backend", "IoT"],
    },
  ];

  return (
    <div id="team" className="container mx-auto py-12 px-4 md:px-0">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Nuestro Equipo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow hover:shadow-xl rounded-xl overflow-hidden border-2"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-contain object-center p-3"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <h4 className="text-sm font-semibold mt-4">Contacto</h4>
              <p className="text-gray-600">
                Correo:{" "}
                <a
                  className="text-[#079F73] font-semibold"
                  href={`mailto:${member.id
                    .split(" ")[0]
                    .toLowerCase()}@upc.edu.pe`}
                >
                  {member.id.split(" ")[0].toLowerCase()}@upc.edu.pe
                </a>
              </p>
              <h4 className="text-sm font-semibold mt-4">Tags</h4>
              <div className="flex flex-wrap">
                {member.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
