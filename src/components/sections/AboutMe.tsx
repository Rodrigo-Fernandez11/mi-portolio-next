"use client"
const AboutMe: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <SkillsList />
          </div>
          <div className="md:w-2/3">
            <Introduction />
            <ExperienceList />
          </div>
        </div>
      </div>
    </section>
  );
};


const SkillsList: React.FC = () => {
  const skills = ["React", "Node.js", "Express.js", "MongoDB", "HTML", "CSS"];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold mb-2">Skills</h3>
      <ul className="list-disc list-inside">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-700">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Introduction: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ac
        urna posuere interdum. Proin in enim vel metus aliquet tincidunt. Suspendisse
        tristique dolor vel commodo dignissim. Nulla facilisi. Duis et commodo leo, at
        scelerisque dui. Fusce a magna ac risus aliquet gravida.
      </p>
    </div>
  );
};

const ExperienceList: React.FC = () => {
  const experiences = [
    {
      company: "ABC Company",
      position: "Full Stack Developer",
      period: "2019 - Present",
    },
    {
      company: "XYZ Company",
      position: "Frontend Developer",
      period: "2017 - 2019",
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Experience</h3>
      {experiences.map((experience) => (
        <div key={experience.company} className="mb-4">
          <h4 className="text-xl font-bold">{experience.company}</h4>
          <p className="text-gray-700">{experience.position}</p>
          <p className="text-gray-700">{experience.period}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
