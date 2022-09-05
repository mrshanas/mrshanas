interface exp {
  companyName: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  title: string;
  exp: string[];
}

export const experiences: exp[] = [
  {
    companyName: "Singo Africa Ltd",
    companyLink: "https://singo.africa",
    startDate: "July 2022",
    endDate: "Present",
    title: "Intern | Software Developer",
    exp: [
      "Write modern, quality, maintainable code for opensource projects and internal projects",
      "Worked with different languages including Python, Javascript, CSS and frameworks like Django, AngularJs, NuxtJs, Django Rest Framework",
      "Collaborated with other developers and teams",
    ],
  },
  {
    companyLink: "https://upwork.com/freelancers/~019e3e31dad95ce8c4",
    companyName: "Upwork Inc",
    startDate: "Jan 2022",
    endDate: "Present",
    title: "Freelancer | Software Developer",
    exp: [
      "Developing Backend API's",
      "Developing Frontend Apps",
      "Fixing other's bugs and help in maintainance",
    ],
  },
];
