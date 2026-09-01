import Ashley from "../../../assets/images/team/2025-2026/exec/Ashley.png";
import Rosebud from "../../../assets/images/team/2025-2026/science/Rosebud.png";
import Surabhi from "../../../assets/images/team/2025-2026/exec/Surabhi.png";
import Megan from "../../../assets/images/team/2025-2026/exec/Megan.png";
import Jessica from "../../../assets/images/team/2025-2026/exec/Jessica.png";
import Marie from "../../../assets/images/team/2025-2026/exec/Marie.png";
import Aaliyah from "../../../assets/images/team/2025-2026/exec/Aaliyah.png";

import NoPic from "../../../assets/images/background/explore-backgorund.png";

export interface TeamMember {
  name: string;
  role: string;
  group: string;
  image: string;
  website?: string;
  linkedin?: string;
  details?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Surabhi Sonawane",
    role: "President",
    group: "Execs",
    image: Surabhi,
    website: "",
    linkedin: "https://www.linkedin.com/in/surabhisonawane/",
    details: "",
  },
  {
    name: "Megan Ritchie",
    role: "Technical Lead",
    group: "Execs",
    image: Megan,
    website: "",
    linkedin: "https://www.linkedin.com/in/megan-r-ritchie/",
    details: "",
  },
  {
    name: "Ashley Dugarte",
    role: "Mechanical Lead",
    group: "Execs",
    image: Ashley,
    website: "",
    linkedin: "https://www.linkedin.com/in/ashley-dugarte-izarra-78b1a62b8/",
    details: "",
  },
  {
    name: "Marie Metz",
    role: "Electrical Lead",
    group: "Execs",
    image: Marie,
    website: "",
    linkedin: "https://www.linkedin.com/in/marie-metz-72aab5421/",
    details: "",
  },
  {
    name: "Jessica Lai",
    role: "Science Lead",
    group: "Execs",
    image: Jessica,
    website: "",
    linkedin: "https://www.linkedin.com/in/jessica-lai-79b022416",
    details: "",
  },
  {
    name: "Aaliyah Wusu",
    role: "Software Lead",
    group: "Execs",
    image: Aaliyah,
    website: "https://www.github.com/ag1rlisagun",
    linkedin: "https://www.linkedin.com/in/aaliyahwusu",
    details: "",
  },
  {
    name: "Sophie Marple",
    role: "Admin & Finance Lead",
    group: "Execs",
    image: NoPic,
    website: "",
    linkedin: "https://www.linkedin.com/in/sophie-marple/",
    details: "",
  },
  {
    name: "Jasmine Reece",
    role: "Mechanical Member",
    group: "Mechanical",
    image: NoPic,
    website: "",
    linkedin: "https://www.linkedin.com/in/jasmine-reece/",
    details: "",
  },
  {
    name: "Feelen Z.", 
    role: "Finance Member",
    group: "Finance",
    image: NoPic,
    website: "",
    linkedin: "https://www.linkedin.com/in/feelen-z-760819381/",
    details: "",
  },
  {
    name: "Rosebud John",
    role: "Science Member",
    group: "Science",
    image: Rosebud,
    website: "",
    linkedin: "https://www.linkedin.com/in/rosebud-j-46101a275/",
    details: "",
  },
  {
    name: "Kyla Fald",
    role: "Mechanical Member",
    group: "Mechanical",
    image: NoPic,
    website: "",
    linkedin: "https://www.linkedin.com/in/kyla-fald-634a00217/",
    details: "",
  },
];