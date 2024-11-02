import hacktoberfest from "../images/hacktoberfest.jpeg";
import canva from "../images/canva.jpeg";
import claude from "../images/claude.png";
import codeforces from "../images/codeforces.jpeg";
import devpost from "../images/devpost.png";
import freecodecamp from "../images/freecodecamp.jpeg";
import gssoc from "../images/gssoc.png";
import hackerearth from "../images/hackerearth.png";
import github from "../images/github.png";
import ollama from "../images/ollama.jpeg";
import perplexity from "../images/perplexity.jpeg";
import swoc from "../images/swoc.png";
import mlh from "../images/MLH.png";
import odin from "../images/odin.png";
import googlearcade from "../images/arcade.jpeg";
import twitter from "../images/twitter.jpeg";
import unstop from "../images/unstop.jpeg";
import notion from "../images/notion.jpeg";
import studentpack from "../images/studentpack.jpeg";
import codecademy from "../images/codecademy.png";
import khanacademy from "../images/khanacademy.png";
import udacity from "../images/udacity.png";
import alison from "../images/alison.jpg";
import coursera from "../images/coursera.png";
import openlearning from "../images/openlearning.jpg";
import mit from "../images/mit.svg";
import edx from "../images/edx.svg";
import cybrary from "../images/cybrary.png";
import futurelearn from "../images/futurelearn.jpg";
import harvard from "../images/harvard.png";
import sayloracademy from "../images/sayloracademy.png";
import openstax from "../images/openstax.png";
import pluralsight from "../images/pluralsight.jpeg";
import nptel from "../images/nptel.png";
import mooc from "../images/mooc.png";
import codewars from "../images/codewars.jpg";
import w3school from "../images/w3school.jpg";
import sololearn from "../images/sololearn.png";
import ibm from "../images/ibm.png";

const resources_data = [
    {
        key: 1,
        imgSrc: gssoc,
        heading: "Google Summer of Code (GSoC)",
        href: "https://summerofcode.withgoogle.com/",
        description: "Google Summer of Code (GSoC) is an annual global program that connects university students with open-source organizations, providing stipends for successful project completions. Participants gain real-world coding experience while contributing to open-source projects, often led by nonprofits or grassroots initiatives. GSoC helps students to build portfolios, gain mentorship from experienced developers, and connect with the wider open-source community."
    },
    {
        key: 2,
        imgSrc: hacktoberfest,
        heading: "Hacktoberfest",
        href: "https://hacktoberfest.com/",
        description: "Hacktoberfest is a month-long celebration promoting open-source software contributions, supported by DigitalOcean. Every October, thousands of participants worldwide make contributions, earn limited-edition swag, and help improve various projects. The event encourages learning, collaboration, and building coding portfolios for future career opportunities, making it a popular choice among both new and experienced developers."
    },
    {
        key: 3,
        imgSrc: github,
        heading: "LC Bypass",
        href: "https://github.com/31b4/Leetcode-Premium-Bypass",
        description: "LC Bypass is a tool that allows users to access certain LeetCode Premium content features without the premium subscription. Popular in coding communities, this repository assists users looking for more resources to improve problem-solving skills, particularly in competitive programming. It’s a helpful resource for practicing coding challenges commonly asked in technical interviews."
    },
    {
        key: 4,
        imgSrc: ollama,
        heading: "Ollama",
        href: "https://ollama.com/",
        description: "Ollama is an innovative AI-powered platform that simplifies machine learning model building and deployment. Designed for data scientists and developers, Ollama provides a collaborative environment with tools for managing data, training models, and deploying them efficiently. It supports cloud deployment and integrates with popular libraries, making it accessible to both beginners and experienced AI practitioners."
    },
    {
        key: 5,
        imgSrc: claude,
        heading: "Claude AI",
        href: "https://claude.ai/",
        description: "Claude AI is an advanced AI-powered conversational chatbot designed to assist users with various queries, from general knowledge to specific problem-solving needs. With natural language processing, Claude provides accurate, context-aware responses, and is becoming a valuable tool for research, customer service, and personalized AI interactions. It’s a popular choice for businesses and individuals alike."
    },
    {
        key: 6,
        imgSrc: devpost,
        heading: "DevPost",
        href: "https://devpost.com/hackathons",
        description: "DevPost is a popular platform where developers showcase their projects and participate in hackathons. The platform lists hackathons hosted by tech companies, educational institutions, and organizations. With portfolios, project details, and network-building opportunities, DevPost is ideal for those looking to build their profiles, gain recognition, and compete in industry-sponsored events worldwide."
    },
    {
        key: 7,
        imgSrc: perplexity,
        heading: "Perplexity AI",
        href: "https://www.perplexity.ai/",
        description: "Perplexity AI offers conversational interfaces for answering complex user queries, providing structured and clear information through an AI-driven approach. Users can engage with the AI to receive real-time answers across diverse topics, making it ideal for research, customer support, and educational purposes. Its intuitive design makes complex information easily accessible."
    },
    {
        key: 8,
        imgSrc: github,
        heading: "Coderjojo",
        href: "https://github.com/coderjojo/creative-profile-readme",
        description: "Coderjojo’s Creative Profile README repository is a GitHub project for crafting visually appealing and informative README profiles. Developers can find templates and inspiration to create eye-catching GitHub profiles, adding a professional touch to their portfolios and enhancing their profiles with interactive elements and creative layouts."
    },
    {
        key: 9,
        imgSrc: hackerearth,
        heading: "HackerEarth",
        href: "https://www.hackerearth.com/",
        description: "HackerEarth is a leading platform for coding competitions, hiring challenges, and skill development. Through various programming contests, participants can sharpen their coding skills, while companies utilize HackerEarth’s assessment tools for hiring. It’s widely recognized in the tech community as a go-to for competitive programming and coding practice."
    },
    {
        key: 10,
        imgSrc: mlh,
        heading: "MLH (Major League Hacking)",
        href: "https://mlh.io/",
        description: "Major League Hacking (MLH) organizes hackathons for students to learn coding in hands-on environments. MLH hosts workshops, mentorship programs, and resources for skill-building. Known for supporting new and diverse talent, MLH offers an invaluable opportunity for students to connect, innovate, and gain real-world coding experience through events worldwide."
    },
    {
        key: 11,
        imgSrc: odin,
        heading: "The Odin Project",
        href: "https://www.theodinproject.com/",
        description: "The Odin Project offers a free, open-source curriculum to learn web development from scratch. Covering HTML, CSS, JavaScript, Ruby on Rails, and more, it is community-driven and ideal for beginners and those transitioning to a web development career. Projects and resources help learners build a strong portfolio and coding skills."
    },
    {
        key: 12,
        imgSrc: freecodecamp,
        heading: "FreeCodeCamp",
        href: "https://www.freecodecamp.org/",
        description: "FreeCodeCamp is a nonprofit organization providing free coding lessons and certifications, focusing on practical, hands-on learning. Its courses cover a wide range of programming languages, tools, and frameworks. FreeCodeCamp also fosters a global community where learners can connect, collaborate, and improve their skills at their own pace."
    },
    {
        key: 13,
        imgSrc: googlearcade,
        heading: "Google Arcade Program",
        href: "https://cloud.google.com/blog/topics/training-certifications/the-arcade-with-google-cloud-game-helps-boost-cloud-skills",
        description: "Google’s Arcade Program provides gamified learning for cloud skills. Through interactive scenarios, participants enhance their cloud knowledge in an engaging way. Ideal for developers and cloud enthusiasts, the Arcade Program makes complex cloud concepts more accessible and enjoyable, encouraging continuous learning and skill development."
    },
    {
        key: 14,
        imgSrc: swoc,
        heading: "Social Winter of Code (SWOC)",
        href: "https://www.socialwinterofcode.com/",
        description: "Social Winter of Code (SWOC) encourages contributions to open-source projects during winter, fostering a community-driven approach to coding. Through mentorship and community support, SWOC enables participants to make meaningful contributions, learn from each other, and gain experience in collaborative coding practices."
    },
    {
        key: 15,
        imgSrc: twitter,
        heading: "X Creator",
        href: "https://x.com/Prathkum?t=XOGJp6TeV14OwkJfr0C-ZA&s=08",
        description: "X Creator allows individuals to share creative and innovative projects, fostering a community where users can showcase their ideas, gain feedback, and collaborate. It’s a hub for inspiration and discovery, with diverse project categories that enable creators to connect and build a following within the tech community."
    },
    {
        key: 16,
        imgSrc: unstop,
        heading: "Unstop",
        href: "https://unstop.com/",
        description: "Unstop is a platform for students to find competitions, internships, scholarships, and more. Tailored for skill development, Unstop enables students to explore career-enhancing opportunities, network with industry professionals, and earn rewards. It has become a preferred choice for students looking to kickstart their careers."
    },
    {
        key: 17,
        imgSrc: notion,
        heading: "Notion",
        href: "https://www.notion.so/",
        description: "Notion is a comprehensive, all-in-one workspace for personal and professional use. With tools for note-taking, task management, and collaboration, it’s designed to streamline productivity. Notion’s flexibility makes it popular among teams, freelancers, and individuals seeking an organized approach to managing projects and tasks."
    },
    {
        key: 18,
        imgSrc: codeforces,
        heading: "Codeforces",
        href: "https://codeforces.com/",
        description: "Codeforces is a competitive programming platform offering regular contests for developers to improve problem-solving skills. Known for its active community, Codeforces is a go-to for coders aiming to refine their algorithms, enhance coding speed, and prepare for coding interviews in a challenging yet collaborative environment."
    },
    {
        key: 19,
        imgSrc: canva,
        heading: "Canva",
        href: "https://www.canva.com/",
        description: "Canva is an intuitive design tool that enables users to create stunning visuals, presentations, and social media graphics. With pre-designed templates and a simple drag-and-drop interface, it’s accessible for both beginners and professionals. Canva has become a preferred choice for creating marketing materials, visuals, and branding content."
    },
    {
        key: 20,
        imgSrc: studentpack,
        heading: "GitHub Student Developer Pack",
        href: "https://education.github.com/pack",
        description: "The GitHub Student Developer Pack provides students with free access to premium developer tools and resources. It’s a valuable asset for aspiring developers, offering tools like GitHub Pro, cloud services, and other professional-grade software to help students learn, build projects, and enter the tech industry."
    },
    {
        key: 21,
        imgSrc: codecademy,
        heading: "Codecademy",
        href: "https://www.codecademy.com/",
        description: "Codecademy provides interactive coding lessons in various programming languages, from beginner to advanced. With hands-on practice and real-world projects, it’s a go-to platform for anyone looking to learn coding for free, especially in web development, Python, and data science."
    },
    {
        key: 22,
        imgSrc: khanacademy,
        heading: "Khan Academy",
        href: "https://www.khanacademy.org/",
        description: "Khan Academy offers free courses in a range of subjects, including math, science, history, and computing. The platform is ideal for students, teachers, and lifelong learners alike, with resources designed to make education accessible to all."
    },
    {
        key: 23,
        imgSrc: udacity,
        heading: "Udacity Free Courses",
        href: "https://www.udacity.com/courses/all",
        description: "Udacity offers a selection of free courses covering topics like data science, AI, and programming. Although many courses are paid, these free offerings provide high-quality content designed by industry experts, making it a valuable resource for career-oriented learners."
    },
    {
        key: 24,
        imgSrc: alison,
        heading: "Alison",
        href: "https://alison.com/",
        description: "Alison is a platform offering free courses across various disciplines, from IT and language learning to project management and personal development. Certificates can be earned to validate skills, making it a popular choice for skill-building."
    },
    {
        key: 25,
        imgSrc: coursera,
        heading: "Coursera Free Courses",
        href: "https://www.coursera.org/",
        description: "Coursera partners with top universities to offer free access to select courses, covering fields like computer science, humanities, and business. Ideal for anyone looking to advance their knowledge with quality education at no cost."
    },
    {
        key: 26,
        imgSrc: openlearning,
        heading: "OpenLearning",
        href: "https://www.openlearning.com/",
        description: "OpenLearning is a global platform offering a wide variety of free courses, allowing users to learn skills in programming, design, business, and more. The courses promote a social learning experience, ideal for community-focused education."
    },
    {
        key: 27,
        imgSrc: mit,
        heading: "MIT OpenCourseWare",
        href: "https://ocw.mit.edu/",
        description: "MIT OpenCourseWare is a free educational resource offering the entire MIT curriculum, with lecture notes, assignments, and exams available. It’s a valuable tool for self-learners looking for high-quality, university-level content in engineering, science, and management."
    },
    {
        key: 28,
        imgSrc: edx,
        heading: "edX Free Courses",
        href: "https://www.edx.org/",
        description: "edX, a platform founded by Harvard and MIT, offers a selection of free courses in subjects ranging from humanities to AI and data science. Learners can access university-level education for free, enhancing career prospects and personal growth."
    },
    {
        key: 29,
        imgSrc: cybrary,
        heading: "Cybrary",
        href: "https://www.cybrary.it/",
        description: "Cybrary is a free online learning platform focused on cybersecurity, IT, and data science. Known for preparing students for certifications, it provides hands-on labs and videos to support career advancement in technical fields."
    },
    {
        key: 30,
        imgSrc: futurelearn,
        heading: "FutureLearn",
        href: "https://www.futurelearn.com/",
        description: "FutureLearn offers free access to short courses on topics such as healthcare, business, and digital skills. Learners can gain insights from universities and industry experts, making it a popular choice for lifelong learning."
    },
    {
        key: 31,
        imgSrc: harvard,
        heading: "Harvard Online Learning",
        href: "https://online-learning.harvard.edu/",
        description: "Harvard Online Learning offers free courses covering a range of subjects, including data science, health, and literature. The platform provides a glimpse into Harvard’s world-class curriculum, available to anyone with an internet connection."
    },
    {
        key: 32,
        imgSrc: sayloracademy,
        heading: "Saylor Academy",
        href: "https://www.saylor.org/",
        description: "Saylor Academy provides free, accredited courses in topics like computer science, business, and art history. The courses are self-paced and designed to help learners acquire career-ready skills and earn recognized certifications."
    },
    {
        key: 33,
        imgSrc: openstax,
        heading: "OpenStax",
        href: "https://openstax.org/",
        description: "OpenStax provides free, peer-reviewed, openly licensed textbooks for students in subjects such as math, science, and humanities. The platform is dedicated to reducing education costs and increasing access to quality learning resources."
    },
    {
        key: 34,
        imgSrc: pluralsight,
        heading: "Pluralsight Free Courses",
        href: "https://www.pluralsight.com/",
        description: "Pluralsight offers free access to selected tech and creative courses in subjects like web development, cybersecurity, and graphic design. Ideal for skill development, it’s widely respected in the tech industry for high-quality content."
    },
    {
        key: 35,
        imgSrc: nptel,
        heading: "NPTEL",
        href: "https://nptel.ac.in/",
        description: "The National Programme on Technology Enhanced Learning (NPTEL) offers free courses in engineering, science, and humanities, provided by India’s premier institutes. It’s a great choice for students and professionals seeking to expand their technical knowledge."
    },
    {
        key: 36,
        imgSrc: mooc,
        heading: "MOOC.org",
        href: "https://www.mooc.org/",
        description: "MOOC.org aggregates free courses from various institutions worldwide, offering education in technology, science, arts, and more. Ideal for learners looking for flexible, diverse options for building new skills and advancing their education."
    },
    {
        key: 37,
        imgSrc: codewars,
        heading: "Codewars",
        href: "https://www.codewars.com/",
        description: "Codewars is an interactive coding platform where users can practice coding through fun, game-like challenges. It offers a variety of languages and focuses on problem-solving skills, making it ideal for improving programming abilities."
    },
    {
        key: 38,
        imgSrc: w3school,
        heading: "W3Schools",
        href: "https://www.w3schools.com/",
        description: "W3Schools provides tutorials and references on web development languages such as HTML, CSS, JavaScript, and SQL. With practical exercises and quizzes, it’s a popular choice for beginners to learn the essentials of web development."
    },
    {
        key: 39,
        imgSrc: sololearn,
        heading: "SoloLearn",
        href: "https://www.sololearn.com/",
        description: "SoloLearn offers a free, mobile-friendly platform to learn coding in languages like Python, Java, and C++. With interactive lessons, it’s designed for beginners who want to learn coding on the go and gain basic programming skills."
    },
    {
        key: 40,
        imgSrc: ibm,
        heading: "IBM Skills Network",
        href: "https://skillsbuild.org/",
        description: "IBM Skills Network offers free microlearning courses on subjects like AI, cloud computing, and data science. Aimed at career development, it includes projects and practical exercises to help learners build job-ready skills."
    }
];

export default resources_data;
