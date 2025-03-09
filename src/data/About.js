import developer from "../images/developer.png";
import manager from "../images/manager.png";
import designer from "../images/designer.png";
import marketing from "../images/marketing.png";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import service4 from "../images/service4.png";
import service5 from "../images/service5.png";
import service6 from "../images/service6.png";

const teamMembers = [
    {
        name: "Yuvraj Gupta",
        role: "Developer",
        description:
            "Developer with a passion for creating seamless user experiences.",
        img: developer,
    },
    {
        name: "Team Member",
        role: "Manager",
        description:
            "Manager dedicated to driving innovative tech projects forward.",
        img: manager,
    },
    {
        name: "Team Member",
        role: "Designer",
        description:
            "Creative designer focused on merging aesthetics with functionality.",
        img: designer,
    },
    {
        name: "Team Member",
        role: "Marketing",
        description:
            "A strategic marketer focused on creating impactful narratives.",
        img: marketing,
    },
];

const services = [
    {
        title: "Upcoming Events & Workshops",
        img: service1,
        description:
            "Discover nearby events and workshops to keep your skills sharp and stay informed.",
    },
    {
        title: "Coding Contests & Challenges",
        img: service2,
        description:
            "Find information on local coding contests and challenges to test your programming skills.",
    },
    {
        title: "Hackathons & Innovation Sprints",
        img: service3,
        description:
            "Get details on nearby hackathons and innovation sprints to join and collaborate with others.",
    },
    {
        title: "Concerts & Tech Talks",
        img: service4,
        description:
            "Explore local concerts and tech talks to enjoy live entertainment and gain industry insights.",
    },
    {
        title: "Notes & Resources",
        img: service5,
        description:
            "Access essential notes and references to support your participation hackathons.",
    },
    {
        title: "Community & Networking Opportunities",
        img: service6,
        description:
            "Stay connected tech communities and events to build your network.",
    },
];

export { teamMembers, services };