import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight, Code2, Server, Database, Palette } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Achievement Management Project",
    description: "A comprehensive system for tracking and managing achievements across organizations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "https://achievement-management.vercel.app/",
  },
  {
    id: 2,
    title: "Short Story Generator",
    description: "AI-powered application that creates unique stories based on user prompts.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop",
    link: "https://projecttwo.com",
  },
  {
    id: 3,
    title: "Project Three",
    description: "An innovative solution for modern web development challenges.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    link: "https://projectthree.com",
  },
];

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="relative text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto profile-image object-cover scale-in"
            />
          </div>
          <span className="inline-block px-3 py-1 text-sm text-white bg-blue-500/20 rounded-full mb-4 animate-on-scroll opacity-0">
            Full Stack Developer
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 slide-in">
            Creating Digital
            <br /> Experiences That Matter
          </h1>
          <p className="text-slate-300 max-w-lg mx-auto mb-8 fade-in">
            Passionate full stack developer crafting beautiful and functional web applications with modern technologies.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all transform hover:scale-105 duration-300"
            >
              Get in touch
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <span className="text-blue-400 text-sm uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-8">
              Turning Vision Into Reality
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 text-slate-300">
                <p>
                  With over 5 years of experience in full stack development, I specialize in building scalable web applications
                  that provide exceptional user experiences.
                </p>
                <p>
                  My expertise spans across modern frontend frameworks, backend technologies, and cloud platforms, allowing me
                  to deliver end-to-end solutions that drive business growth.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                  alt="Working"
                  className="rounded-lg object-cover w-full h-48 glass-card"
                />
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                  alt="Coding"
                  className="rounded-lg object-cover w-full h-48 glass-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology and Tools Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <span className="text-blue-400 text-sm uppercase tracking-wider">Skills</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-12">
              Technology & Tools
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 rounded-lg bg-slate-800/50 text-center hover:bg-slate-700/50 transition-colors">
                <Code2 className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Frontend</h3>
                <p className="text-slate-300 text-sm">React, Next.js, TypeScript, Tailwind CSS</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    className="w-10 h-10 mx-auto"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    className="w-10 h-10 mx-auto"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    alt="Next.js"
                    className="w-10 h-10 mx-auto"
                  />
                  <img
                    src="https://www.svgrepo.com/show/374118/tailwind.svg"
                    alt="Tailwind"
                    className="w-10 h-10 mx-auto"
                  />
                </div>
              </div>
              <div className="p-6 rounded-lg bg-slate-800/50 text-center hover:bg-slate-700/50 transition-colors">
                <Server className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Backend</h3>
                <p className="text-slate-300 text-sm">Node.js, Express, Python, Java</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                    className="w-10 h-10 mx-auto"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Express"
                    className="w-10 h-10 mx-auto invert"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="Python"
                    className="w-10 h-10 mx-auto"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    alt="Java"
                    className="w-10 h-10 mx-auto"
                  />
                </div>
              </div>
              <div className="p-6 rounded-lg bg-slate-800/50 text-center hover:bg-slate-700/50 transition-colors">
                <Database className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Database</h3>
                <p className="text-slate-300 text-sm">PostgreSQL, MongoDB, Redis</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    alt="PostgreSQL"
                    className="w-10 h-10 mx-auto"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                    className="w-10 h-10 mx-auto"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                    alt="Redis"
                    className="w-10 h-10 mx-auto"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    alt="MySQL"
                    className="w-10 h-10 mx-auto"
                  />
                </div>
              </div>
              <div className="p-6 rounded-lg bg-slate-800/50 text-center hover:bg-slate-700/50 transition-colors">
                <Palette className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Design</h3>
                <p className="text-slate-300 text-sm">Figma, Adobe XD, UI/UX</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    alt="Figma"
                    className="w-10 h-10 mx-auto"
                  />
                  <img
                    src="https://www.svgrepo.com/show/452151/adobe-xd.svg"
                    alt="Adobe XD"
                    className="w-10 h-10 mx-auto"
                  />
                  <img
                    src="https://www.svgrepo.com/show/303177/photoshop-cc-logo.svg"
                    alt="Photoshop"
                    className="w-10 h-10 mx-auto"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <span className="text-blue-400 text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-12">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="rounded-lg overflow-hidden bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                    <div className="relative h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                      <p className="text-slate-300 text-sm">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <span className="text-blue-400 text-sm uppercase tracking-wider">Contact</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-12">
              Let's Connect
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://github.com/GAURJIsaheb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/adityagaur01/"
                target="_blank"

                className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="mailto:adityagaur086@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;