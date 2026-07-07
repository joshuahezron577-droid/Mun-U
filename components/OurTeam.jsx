"use client";
import Link from "next/link";

export default function OurTeam() {
  // Data ya timu
  const teamMembers = [
    { name: "John Doe", year: "2022" },
    { name: "Jane Smith", year: "2023" },
    { name: "Michael Joe", year: "2021" },
    { name: "Sarah Williams", year: "2024" },
    { name: "David Brown", year: "2022" },
    { name: "Emily Davis", year: "2023" },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-3">
          Our Team
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Hawa ndio watu walio nyuma ya mafanikio ya MUN.
        </p>
      </div>

      {/* Grid ya watu 6 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="card bg-base-100 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-4 pt-4">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-xl">
                {member.name.charAt(0)}
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg md:text-xl font-bold">{member.name}</h2>
              <p className="text-gray-500">Joined: {member.year}</p>
              <div className="card-actions mt-2">
                <button className="btn btn-outline btn-xs btn-primary">Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}