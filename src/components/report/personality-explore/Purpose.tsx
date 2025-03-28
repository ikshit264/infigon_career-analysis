import React from "react";

const Purpose = () => {
  const applications = [
    {
      id: "self-assessment",
      title: "Self Assessment",
      description:
        "Focuses on concrete, tangible information and present realities.",
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      description:
        "Develop leadership skills with practical insights and strategies.",
    },
    {
      id: "career-alignment",
      title: "Career Alignment",
      description:
        "Discover career paths that align with your strengths and interests.",
    },
    {
      id: "career-planning",
      title: "Career Planning",
      description:
        "Strategically plan your career growth based on MBTI insights.",
    },
    {
      id: "team-building",
      title: "Team Building",
      description:
        "Improve collaboration and teamwork through personality insights.",
    },
    {
      id: "conflict-resolution",
      title: "Conflict Resolution",
      description:
        "Enhance conflict resolution skills using personality-based strategies.",
    },
    {
      id: "improved-communication",
      title: "Improved Communication",
      description:
        "Understand different communication styles for better interactions.",
    },
    {
      id: "strength-identification",
      title: "Strength Identification",
      description:
        "Recognize and utilize your strengths effectively in professional settings.",
    },
    {
      id: "personal-growth",
      title: "Personal Growth",
      description:
        "Use MBTI insights for continuous self-improvement and development.",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-6  p-2">
      <h3 className="text-xl font-semibold text-blue-700 text-center ">
        Purpose, Applications, and Benefits of MBTI in Career Development
      </h3>

      {/* Cards Container */}
      <div className="flex flex-wrap gap-4 justify-center">
        {applications.map((app) => (
          <div
            key={app.id}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[30%] p-4 bg-gray-300/30 shadow-md rounded-md border border-gray-200"
          >
            <h4 className="text-lg font-semibold text-gray-800">{app.title}</h4>
            <p className="text-sm text-gray-600 ml-2">{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purpose;
