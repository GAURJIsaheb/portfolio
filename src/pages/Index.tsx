import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight, Code2, Server, Database, Palette, Languages } from "lucide-react";
import img1 from "../../Public/pr1.jpg";
import img2 from "../../Public/pr2.jpg";
import img3 from "../../Public/pr3.jpg";
import resumeImg from "../assets/resume.png"
import cv from "../assets/mainCV.pdf"
import leetcodesvg from "../assets/leetcode.svg"
const projects = [
  {
    id: 1,
    title: "Achievement Nexus",
    description: "A cutting-edge platform to manage and celebrate achievements with flair.",
    image: img1,
    link: "https://achievement-management.vercel.app/",
  },
  {
    id: 2,
    title: "StoryForge AI",
    description: "An AI-driven storytelling engine that crafts immersive narratives.",
    image: img2,
    link: "https://aiproject-woad.vercel.app/",
  },
  {
    id: 3,
    title: "Money Mate",
    description: "A futuristic web ecosystem for seamless tracking of difference transactions.",
    image: img3,
    link: "https://smart-finance-rose.vercel.app/",
  },
];

const Index = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn");
          }
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6_0%,#000_80%)] opacity-70 animate-glow"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe')] bg-cover bg-center opacity-15"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-bounce">
            Code That Captivates
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-6 max-w-md mx-auto animate-on-scroll opacity-0">
            I’m a Full Stack Developer building bold, breathtaking digital experiences.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 hover:scale-110 transition-all duration-300 animate-on-scroll opacity-0 delay-100"
          >
            Connect with ME !
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-400 mb-12">
              The Visionary Behind the Code
            </h2>
            <div className="bg-gray-900/80 p-8 rounded-2xl shadow-xl border border-blue-500/30">
              <p className="text-lg text-gray-200 leading-relaxed">
              A passionate and dedicated Computer Science student specializing in full-stack development, with a strong foundation in building scalable, user-friendly web applications from concept through deployment. I excel at crafting responsive, intuitive interfaces and optimizing server architectures for performance and reliability. Alongside my full-stack expertise, I have a solid understanding of DevOps practices, including Docker, Kubernetes, NGINX, and basic AWS services, enabling smooth deployment and efficient application management. Additionally, I am proficient in C++ for Data Structures and Algorithms, showcasing strong problem-solving abilities. I’m excited to contribute to innovative projects while continuously expanding my tech knowledge in a dynamic field.
              </p>
              <p className="text-lg text-gray-200 mt-4 leading-relaxed">
                My toolkit? Modern frameworks, cutting-edge tech, and a relentless drive to push boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-6 bg-gray-900/50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-400 mb-16 animate-on-scroll opacity-0">
      My Arsenal of Awesome
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        {
          icon: <Code2 className="w-8 h-8 text-blue-400" />,
          title: "Frontend",
          skills: [
            { name: "React", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
            { name: "TypeScript", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
            { name: "Next.js", url: "https://img.icons8.com/?size=64&id=AU6Wc7r56Fxz&format=png" },
            { name: "Tailwind", url: "https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png" },
          ],
        },
        {
          icon: <Server className="w-8 h-8 text-purple-400" />,
          title: "Backend",
          skills: [
            { name: "Node.js", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
            { name: "Express", url: "https://img.icons8.com/?size=64&id=2ZOaTclOqD4q&format=png" },
          ],
        },
        {
          icon: <Database className="w-8 h-8 text-pink-400" />,
          title: "Database",
          skills: [
            { name: "PostgreSQL", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
            { name: "MongoDB", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
            { name: "Redis", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" },
            { name: "MySQL", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
          ],
        },
        {
          icon: <Palette className="w-8 h-8 text-blue-300" />,
          title: "Design",
          skills: [
            { name: "Figma", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" },
            { name: "Photoshop", url: "https://img.icons8.com/?size=48&id=NeNPFdj7MzXi&format=png" },
            { name: "Canva", url: "https://img.icons8.com/?size=48&id=iWw83PVcBpLw&format=png" },
          ],
        },
        {
          icon: <Languages className="w-8 h-8 text-purple-400" />,
          title: "Programming Languages",
          skills: [
            { name: "C++", url: "https://img.icons8.com/?size=48&id=40669&format=png" },
            { name: "C", url: "https://img.icons8.com/?size=48&id=shQTXiDQiQVR&format=png" },
            { name: "Java", url: "https://img.icons8.com/?size=48&id=Pd2x9GWu9ovX&format=png" },
            { name: "Python", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },

          ],
        },
      ].map((category) => (
        <div
          key={category.title}
          className="p-6 bg-gray-800/70 rounded-xl border border-blue-500/20 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 animate-on-scroll opacity-0"
        >
          <div className="flex items-center gap-4 mb-6">
            {category.icon}
            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center group">
                <img
                  src={skill.url}
                  alt={skill.name}
                  className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    if (e.target instanceof HTMLImageElement) {
                      e.target.style.display = "none";
                    }
                  }}
                />
                <span className="text-gray-300 text-sm group-hover:text-blue-400">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#3b82f6_0%,transparent_70%)] opacity-40"></div>
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-400 mb-16 animate-on-scroll opacity-0">
            Masterpieces in Motion
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-900/80 p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/60 transition-all duration-300 animate-on-scroll opacity-0"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-500"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Dive In
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900/70">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-12 animate-on-scroll opacity-0">
            Let’s Create Fireworks
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { icon: <Github className="w-8 h-8" />, link: "https://github.com", label: "GitHub" },
              { icon: <Linkedin className="w-8 h-8" />, link: "https://www.linkedin.com/in/adityagaur01/", label: "LinkedIn" },
              { icon: <Mail className="w-8 h-8" />, link: "mailto:contact@example.com", label: "Email" },
              {
                icon: <img src={leetcodesvg} alt="Leetcode" className="w-8 h-8" />,
                link: "https://leetcode.com/u/adityagaur086/",
                label: "Leetcode"
              }
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 animate-on-scroll opacity-0"
              >
                <div className="p-3 bg-blue-500/20 rounded-full group-hover:bg-blue-500/40 group-hover:scale-110 transition-all">
                  {contact.icon}
                </div>
                <span className="text-lg font-medium">{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
            {/* CV Section */}

      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-6">
          My CV
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Download or view my CV to learn more about my experience and skills.
        </p>
        <div className="flex justify-center gap-6">

        <a href={cv} className="flex justify-center items-center gap-2 cursor-pointer hover:underline" download><img src={resumeImg} className="h-8 w-8"/>Resume</a>


          <a
            href="/maincv.pdf"
            target="_blank"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300"
          >
            Open CV
          </a>
          <a
            href="/maincv.pdf"
            download="Aditya_Gaur_CV.pdf"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all duration-300"
          >
            Download CV
          </a>

        </div>
      </section>




    </div>
  );
};


export default Index;

