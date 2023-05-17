import KPRIcon from "@/components/icons/KPRIcon";
import SharpjsIcon from "@/components/icons/SharpjsIcon";
import Image from "next/image";
import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import {
  SiChakraui,
  SiCss3,
  SiElectron,
  SiEthereum,
  SiFastify,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPlotly,
  SiPython,
  SiReact,
  SiRust,
  SiSolidity,
  SiTypescript,
} from "react-icons/si";

import { AiTwotoneSetting } from "react-icons/ai";

import TokioIcon from "@/components/icons/TokioIcon";

import { RiRemoteControlLine } from "react-icons/ri";
import { BiHardHat } from "react-icons/bi";
import WebsocketIcon from "@/components/icons/WebsocketIcon";
import { TbBrandMantine } from "react-icons/tb";
import { PythonIcon } from "@/components/icons";
import { FaHardHat } from "react-icons/fa";

type ExperienceCardProps = {
  id: string;
  imageData: {
    src: string;
    alt: string;
  };
  jobData: {
    companyName: string;
    title: string;
    time: string;
    icon?: React.ReactNode;
    link?: string;
  };
  projectsData: {
    name: string;
    description: string;
    technologies: {
      name: string;
      type: "language" | "technology";
    }[];
    link?: string;
  }[];
  technologiesData: {
    technologies: {
      name: string;
      icon: React.ReactNode;
    }[];
    languages: {
      name: string;
      icon: React.ReactNode;
    }[];
  };
};

const techIconSize = 25;

const data: ExperienceCardProps[] = [
  // experience at Cyberbrokers
  {
    id: "cyberbrokers",
    imageData: {
      src: "/cyberbrokers_banner.avif",
      alt: "Cyberbrokers",
    },
    jobData: {
      companyName: "Cyberbrokers",
      title: "Software Engineer and Consultant",
      link: "https://www.cyberbrokers.com/",
      time: "2022-2023",
      icon: (
        <Image
          src="/cyberbrokers_icon.png"
          alt="cyberbrokers-icon"
          width={50}
          height={50}
        />
      ),
    },
    projectsData: [
      {
        name: "Custom Discord Command RPC Bot Server",
        description: `Designed and Developed a custom Discord bot for the purpose of sending Remote Procedure Calls (RPC) to a custom server. This project is composed of 2 parts, a Node.js "frontend" using Discord.js that handles user command events and a Rust "backend" which has a stable First In First Out Queue which can be multi-threaded. The two parts communicate using GRPC protocol buffers. The server then has to executes the command and sends the result back to the bot, which then sends the result to the user. Entirely custom designed and built from scratch and the servers needed to be asynchronus to handle multiple requests at once, optimized and robust so not never fail while the entire codebase had to be clean, readable and maintainable long term.`,
        technologies: [
          {
            name: "Rust",
            type: "language",
          },
          {
            name: "TS",
            type: "language",
          },
          {
            name: "JS",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "GRPC",
            type: "technology",
          },
          {
            name: "discord.js",
            type: "technology",
          },
          {
            name: "Tokio",
            type: "technology",
          },
          {
            name: "websockets",
            type: "technology",
          },
        ],
      },
      {
        name: "Custom Discord Invoke AI Stable Diffusion Bot",
        description:
          "Refactored and cleaned up outdated JS codebase for Discord bot for an Invoke AI Stable Diffusion server. The codebase was using outdated packages and had a lot of commands and functionalities but everything was contained in a single JS file with messy code and global variables for which things like the queue system was handled with. The codebase was refactored to use modern TS with static type checking, using a modular design pattern with each command in its own file and using a command handler to handle all commands. The codebase was also refactored to use modern Discord.js v13 and the bot was also updated to use the latest version of Node.js.",
        technologies: [
          {
            name: "TS",
            type: "language",
          },
          {
            name: "JS",
            type: "language",
          },
          {
            name: "Python",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "discord.js",
            type: "technology",
          },
          {
            name: "Invoke-AI",
            type: "technology",
          },
        ],
      },
    ],
    technologiesData: {
      technologies: [
        {
          name: "Node.js",
          icon: <SiNodedotjs color="#68A063" size={techIconSize} />,
        },
        {
          name: "GRPC",
          icon: (
            <Image
              src="/grpc_icon.ico"
              width={techIconSize}
              height={techIconSize}
              alt="GRPC Icon"
            />
          ),
        },
        {
          name: "Discord.js",
          icon: (
            <Image
              src="/discordjs_icon.png"
              width={techIconSize}
              height={techIconSize}
              alt="Discord.js Icon"
            />
          ),
        },
        {
          name: "Tokio",
          icon: <TokioIcon size={techIconSize} />,
        },
        {
          name: "Invoke-AI",
          icon: (
            <Image
              src="/invokeai_icon.png"
              width={techIconSize}
              height={techIconSize}
              alt="Invoke-AI Icon"
            />
          ),
        },
      ],
      languages: [
        {
          name: "Rust",
          icon: <SiRust size={techIconSize} />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript color="#3178c6" size={techIconSize} />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript color="#F0DB4F" size={techIconSize} />,
        },
        {
          name: "Python",
          icon: <PythonIcon size={techIconSize} />,
        },
      ],
    },
  },
  {
    id: "kprverse",
    imageData: {
      src: "/kpr_banner.png",
      alt: "KPRVerse",
    },
    jobData: {
      companyName: "Kprverse (kprverse.com)",
      title: "Software Engineer and Consultant",
      link: "www.kprverse.com",
      time: "2021-2023",
      icon: <KPRIcon size={50} />,
    },
    projectsData: [
      {
        name: "Custom Art Generator",
        description:
          "Design and development of an entire custom art generator along with a suite of tools from scratch using Typescript and Sharp.js (blazingly fast image manipulation library). true randomness, With over 1000 assets, hundreds of of logical rules, and a over 10 000 quality pieces to generate out of unimaginably large number of possibilities, I had to design a system that would be able to handle all of the numerous different requirements and edge cases as well as optimize it to compute as fast as possible. Requirements were also constantly changing with new ones added often. The result is a blazingly fast and optimized (the bottleneck was the image manipulation library) and flexible system that was able to handle the load.",
        technologies: [
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "Sharp.js",
            type: "technology",
          },
          {
            name: "Image Manipulation",
            type: "technology",
          },
        ],
      },
      {
        name: "Smart Contract Engineering",
        description:
          "Design and development of the original smart contract library that would be used for the KPR project. The library passed an audit by a third party and was used as a base for the entire project. The library was also optimized to be as gas efficient as possible and to be able to handle all of the different use cases that were required.",
        technologies: [
          {
            name: "Solidity",
            type: "language",
          },
          {
            name: "Foundry",
            type: "technology",
          },
          {
            name: "hardhat",
            type: "technology",
          },
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Smart Contracts",
            type: "technology",
          },
        ],
      },
      {
        name: "Infrastructure, Deployment, and DevOps",
        description:
          "Design and development of the original smart contract library that would be used for the KPR project. The library passed an audit by a third party and was used as a base for the entire project. The library was also optimized to be as gas efficient as possible and to be able to handle all of the different use cases that were required.",
        technologies: [
          {
            name: "Next.js",
            type: "technology",
          },
          {
            name: "React.js",
            type: "technology",
          },
          {
            name: "Typescript",
            type: "language",
          },
        ],
      },
    ],
    technologiesData: {
      technologies: [
        {
          name: "Node.js",
          icon: <SiNodedotjs color="#68A063" size={techIconSize} />,
        },
        {
          name: "Sharp.js",
          icon: <SharpjsIcon size={techIconSize} />,
        },
        {
          name: "Jimp.js",
          icon: <BsFillPencilFill size={techIconSize} color="red" />,
        },
        {
          name: "Foundry",
          icon: (
            <Image
              src="/foundry_icon.png"
              height={techIconSize}
              width={techIconSize}
              alt="Foundry"
            />
          ),
        },
      ],
      languages: [
        {
          name: "Solidity",
          icon: <SiSolidity size={techIconSize} />,
        },
        {
          name: "Typescript",
          icon: <SiTypescript color="#3178c6" size={techIconSize} />,
        },
        {
          name: "Javascript",
          icon: <SiJavascript color="#F0DB4F" size={techIconSize} />,
        },
      ],
    },
  },
  {
    id: "freelance",
    imageData: {
      src: "/freelance_banner.jpg",
      alt: "Freelance",
    },
    jobData: {
      companyName: "Freelance",
      title:
        "Freelance Software Engineer and Consultant (Full Stack, Smart Contracts)",
      time: "2020-2023",
    },
    projectsData: [
      {
        name: "Various Freelance Projects",
        description:
          "Worked on various private Freelance software engineering projects and consulted on various projects.",
        technologies: [
          {
            name: "TS",
            type: "language",
          },
          {
            name: "JS",
            type: "language",
          },
          {
            name: "Rust",
            type: "language",
          },
          {
            name: "Solidity",
            type: "language",
          },
          {
            name: "Python",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "React.js",
            type: "technology",
          },
          {
            name: "Next.js",
            type: "technology",
          },
          {
            name: "Sharp.js",
            type: "technology",
          },
          {
            name: "Jimp.js",
            type: "technology",
          },
          {
            name: "Chakra UI",
            type: "technology",
          },
          {
            name: "Mantine UI",
            type: "technology",
          },
          {
            name: "Actix Web",
            type: "technology",
          },
          {
            name: "fastify.js",
            type: "technology",
          },
          {
            name: "Sharp.js",
            type: "technology",
          },
          {
            name: "Jimp.js",
            type: "technology",
          },
          {
            name: "ethers.js",
            type: "technology",
          },
          {
            name: "hardhat",
            type: "technology",
          },
          {
            name: "foundry",
            type: "technology",
          },
          {
            name: "MongoDB",
            type: "technology",
          },
          {
            name: "REST API",
            type: "technology",
          },
          {
            name: "websockets",
            type: "technology",
          },
          {
            name: "GraphQL",
            type: "technology",
          },
        ],
      },
    ],
    technologiesData: {
      technologies: [
        {
          name: "Node.js",
          icon: <SiNodedotjs color="#68A063" size={techIconSize} />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs size={techIconSize} />,
        },
        {
          name: "React.js",
          icon: <SiReact color="#61DAFB" size={techIconSize} />,
        },
        {
          name: "Sharp.js",
          icon: <SharpjsIcon size={techIconSize} />,
        },
        {
          name: "Jimp.js",
          icon: <BsFillPencilFill size={techIconSize} color="red" />,
        },
        {
          name: "Foundry",
          icon: (
            <Image
              src="/foundry_icon.png"
              height={techIconSize}
              width={techIconSize}
              alt="Foundry"
            />
          ),
        },
        {
          name: "Ethers.js",
          icon: (
            <Image
              src="/ethers_icon.png"
              height={techIconSize}
              width={techIconSize}
              alt="Ethers.js Icon"
            />
          ),
        },
        {
          name: "Hardhat",
          icon: <FaHardHat color="yellow" size={techIconSize} />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb color="#4DB33D" size={techIconSize} />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql color="#E10098" size={techIconSize} />,
        },
        {
          name: "Chakra UI",
          icon: <SiChakraui color="#319795" size={techIconSize} />,
        },
        {
          name: "Mantine UI",
          icon: <TbBrandMantine color="#339af0" size={techIconSize} />,
        },
        {
          name: "Material UI",
          icon: <SiMui color="#0081CB" size={techIconSize} />,
        },
        {
          name: "Actix Web",
          icon: <SiRust size={techIconSize} />,
        },
        {
          name: "Fastify",
          icon: <SiFastify size={techIconSize} />,
        },
        {
          name: "Websockets",
          icon: <WebsocketIcon size={techIconSize} color="#FF4300" />,
        },
        {
          name: "REST API",
          icon: <AiTwotoneSetting size={techIconSize} color="pink" />,
        },
      ],
      languages: [
        {
          name: "Solidity",
          icon: <SiSolidity size={techIconSize} />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript color="#3178c6" size={techIconSize} />,
        },
        {
          name: "Rust",
          icon: <SiRust size={techIconSize} />,
        },
        {
          name: "Python",
          icon: <PythonIcon size={techIconSize} />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript color="#F0DB4F" size={techIconSize} />,
        },
      ],
    },
  },
  // shift
  {
    id: "shift",
    imageData: {
      src: "/shift_banner.png",
      alt: "Shift",
    },
    jobData: {
      companyName: "Astrolabs (shift.lol)",
      title: "Founder and Lead Software Engineer",
      link: "https://www.shift.lol/",
      time: "2021-2022",
      icon: (
        <Image src="/shift_icon.jpg" alt="shift-icon" width={50} height={50} />
      ),
    },
    projectsData: [
      {
        name: "Shift Web Backend Application",
        description: "",
        technologies: [
          {
            name: "Rust",
            type: "language",
          },
          {
            name: "TS",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "JS",
            type: "language",
          },
          {
            name: "MongoDB",
            type: "technology",
          },
          {
            name: "Mongoose.js",
            type: "technology",
          },
          {
            name: "Actix-Web",
            type: "technology",
          },
          {
            name: "React.js",
            type: "technology",
          },
          {
            name: "Next.js",
            type: "technology",
          },
          {
            name: "Fastify.js",
            type: "technology",
          },
          {
            name: "REST API",
            type: "technology",
          },
          {
            name: "GraphQL",
            type: "technology",
          },
          {
            name: "Tokio",
            type: "technology",
          },
          {
            name: "Websockets",
            type: "technology",
          },
          {
            name: "LRU-cache",
            type: "technology",
          },
        ],
        link: "https://www.shift.lol/",
      },
      {
        name: "Shift Smart Contracts",
        description: "",
        technologies: [
          {
            name: "Solidity",
            type: "language",
          },
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Foundry",
            type: "technology",
          },
          {
            name: "hardhat",
            type: "technology",
          },
          {
            name: "Smart Contracts",
            type: "technology",
          },
        ],
        link: "https://www.shift.lol/",
      },
      {
        name: "Shift Web Frontend Application",
        description: "",
        technologies: [
          {
            name: "React.js",
            type: "technology",
          },
          {
            name: "Next.js",
            type: "technology",
          },
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "ethers.js",
            type: "technology",
          },
        ],
        link: "https://www.shift.lol/",
      },
      {
        name: "Smolsweep Web Frontend Application",
        description: "",
        technologies: [
          {
            name: "React.js",
            type: "technology",
          },
          {
            name: "Next.js",
            type: "technology",
          },
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Javascript",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "ethers.js",
            type: "technology",
          },
          {
            name: "Chakra UI",
            type: "technology",
          },
          {
            name: "Material UI",
            type: "technology",
          },
        ],
        link: "https://www.shift.lol/",
      },
      {
        name: "Smolsweep Smart Contracts",
        description: "",
        technologies: [
          {
            name: "Solidity",
            type: "language",
          },
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Foundry",
            type: "technology",
          },
          {
            name: "hardhat",
            type: "technology",
          },
          {
            name: "Smart Contracts",
            type: "technology",
          },
        ],
        link: "https://www.shift.lol/",
      },
    ],
    technologiesData: {
      technologies: [
        {
          name: "React.js",
          icon: <SiReact color="#61DAFB" size={techIconSize} />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs color="#000000" size={techIconSize} />,
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs color="#339933" size={techIconSize} />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb color="#47A248" size={techIconSize} />,
        },
        {
          name: "Chakra UI",
          icon: <SiChakraui color="#319795" size={techIconSize} />,
        },
        {
          name: "Material UI",
          icon: <SiMui color="#0081CB" size={techIconSize} />,
        },
        {
          name: "Foundry",
          icon: (
            <Image
              src="/foundry_icon.png"
              height={techIconSize}
              width={techIconSize}
              alt="Foundry"
            />
          ),
        },
        {
          name: "Hardhat",
          icon: <BiHardHat color="#F6851B" size={techIconSize} />,
        },
        {
          name: "Ethers.js",
          icon: (
            <Image
              src="/ethers_icon.png"
              height={techIconSize}
              width={techIconSize}
              alt="Ethers.js Icon"
            />
          ),
        },
      ],
      languages: [
        {
          name: "Rust",
          icon: <SiRust size={techIconSize} />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript color="#3178c6" size={techIconSize} />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript color="#f7df1e" size={techIconSize} />,
        },
        {
          name: "Solidity",
          icon: <SiSolidity size={techIconSize} />,
        },
      ],
    },
  },
  {
    id: "csus-industry-mentorship",
    imageData: {
      src: "/CSUSmentorship_banner.png",
      alt: "CSUS Mentorship Banner",
    },
    jobData: {
      companyName: "CSUS",
      title: "Mentor, Lecuturer and Workshop Host",
      link: "https://www.csus.edu/",
      time: "2020",
      icon: (
        <Image src="/CSUS_icon.png" alt="CSUS Icon" width={50} height={50} />
      ),
    },
    projectsData: [
      {
        name: "Mentorship",
        description:
          "Mentored 2 groups of 4 students in the Industry Mentorship Program. Helped students with their projects and provided guidance on how to approach problems. Had regular meetings with students to check up on their progress and provide feedback.",
        technologies: [
          {
            name: "TS",
            type: "language",
          },
          {
            name: "JS",
            type: "language",
          },
          {
            name: "React",
            type: "technology",
          },
          {
            name: "Next.js",
            type: "technology",
          },
          {
            name: "Node.js",
            type: "technology",
          },
        ],
        link: "https://www.csus.edu/",
      },
      {
        name: "Lectures and Workshops",
        description:
          "Organized and hosted 2 lectures on the following topics: Javascript, Typescript, React, Next.js, Node.js. Organized and hosted a workshop on the following topics: Blockchain Technologies, Smart Contracts, Solidity and Ethers.js.",
        technologies: [
          {
            name: "TS",
            type: "language",
          },
          {
            name: "JS",
            type: "language",
          },
          {
            name: "React",
            type: "technology",
          },
          {
            name: "Next.js",
            type: "technology",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "Blockchain",
            type: "technology",
          },
          {
            name: "Smart Contracts",
            type: "technology",
          },
          {
            name: "Solidity",
            type: "language",
          },
          {
            name: "Ethers.js",
            type: "technology",
          },
        ],
        link: "https://www.csus.edu/",
      },
    ],
    technologiesData: {
      technologies: [
        {
          name: "React.js",
          icon: <SiReact color="#61DAFB" size={techIconSize} />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs size={techIconSize} />,
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs color="#339933" size={techIconSize} />,
        },
        {
          name: "Blockchain",
          icon: <SiEthereum color="#121D33" size={techIconSize} />,
        },
        {
          name: "Solidity",
          icon: <SiSolidity size={techIconSize} />,
        },
        {
          name: "Ethers.js",
          icon: (
            <Image
              src="/ethers_icon.png"
              height={techIconSize}
              width={techIconSize}
              alt="Ethers.js Icon"
            />
          ),
        },
      ],
      languages: [
        {
          name: "TypeScript",
          icon: <SiTypescript color="#3178c6" size={techIconSize} />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript color="#f7df1e" size={techIconSize} />,
        },
        {
          name: "Solidity",
          icon: <SiSolidity size={techIconSize} />,
        },
      ],
    },
  },
  // Novartis Data Science Internship
  {
    id: "novartis-internship",
    imageData: {
      src: "/novartis_banner.png",
      alt: "Novartis Banner",
    },
    jobData: {
      companyName: "Novartis",
      title: "Data Science and Software Engineer Intern",
      link: "https://www.novartis.com/",
      time: "2020",
      icon: (
        <Image
          src="/novartis_icon.png"
          alt="Novartis Icon"
          width={50}
          height={50}
        />
      ),
    },
    projectsData: [
      {
        name: "GUI Application for Data Cleaning, Analysis and Compilation",
        description:
          "Engineered and Developed a GUI application using Electron.js and Typescript to clean that interfaces with a Python, Pandas and numpy backend to analyze, compile and export data from multiple sources. Used Plotly.js and Plotly to visualize data through the GUI. The design of the GUI application was created using the Brand Design of the company in mind. The application ended up being used by the company globally.",
        technologies: [
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Javascript",
            type: "language",
          },
          {
            name: "Python",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "Electron.js",
            type: "technology",
          },
          {
            name: "Pandas",
            type: "technology",
          },
          {
            name: "Numpy",
            type: "technology",
          },
          {
            name: "Plotly",
            type: "technology",
          },
        ],
      },
    ],
    technologiesData: {
      technologies: [
        {
          name: "Node.js",
          icon: <SiNodedotjs color="#68A063" size={techIconSize} />,
        },
        {
          name: "Electron.js",
          icon: <SiElectron color="#68A063" size={techIconSize} />,
        },
        {
          name: "Pandas",
          icon: <SiPandas color="#68A063" size={techIconSize} />,
        },
        {
          name: "Plotly",
          icon: <SiPlotly color="#68A063" size={techIconSize} />,
        },
      ],
      languages: [
        {
          name: "Typescript",
          icon: <SiTypescript color="#3178c6" size={techIconSize} />,
        },
        {
          name: "Javascript",
          icon: <SiJavascript color="#F0DB4F" size={techIconSize} />,
        },
        {
          name: "Python",
          icon: <SiPython color="#3178c6" size={techIconSize} />,
        },
        {
          name: "CSS",
          icon: <SiCss3 color="#3178c6" size={techIconSize} />,
        },
      ],
    },
  },
];

export { data, type ExperienceCardProps };
