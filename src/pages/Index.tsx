import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight, Code2, Server, Database, Palette } from "lucide-react";
import img1 from "../../Public/pr1.jpg"
import img2 from "../../Public/pr2.jpg"



const projects = [
  {
    id: 1,
    title: "Acheivement Management Project",
    description: "This is a description for project one.",
    image: img1,
    link: "https://achievement-management.vercel.app/",
  },
  {
    id: 2,
    title: "Short Story Generator",
    description: "This is a description for project two.",
    image: img2,
    link: "https://projecttwo.com",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a description for project three.",
    image: "/pr3.jpg",
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="relative text-center">
          <span className="inline-block px-3 py-1 text-sm text-white text-foreground bg-accent rounded-full mb-4 animate-on-scroll opacity-0">
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
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
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
            <span className="text-white text-sm uppercase tracking-wider">About Me</span>
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
              
            </div>
          </div>
        </div>
      </section>

      {/* Technology and Tools Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-12">
              Tools & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="glass-card p-6 rounded-lg group hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Code2 className="w-6 h-6 text-blue-400" />
                  <h3 className="text-white font-bold">Frontend</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">React</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">TypeScript</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">Next.js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">Tailwind</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-lg group hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Server className="w-6 h-6 text-green-400" />
                  <h3 className="text-white font-bold">Backend</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">Node.js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">Express</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">Python</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" alt="Django" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">Django</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-lg group hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Database className="w-6 h-6 text-purple-400" />
                  <h3 className="text-white font-bold">Database</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">PostgreSQL</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">MongoDB</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" alt="Redis" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">Redis</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">MySQL</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-lg group hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Palette className="w-6 h-6 text-orange-400" />
                  <h3 className="text-white font-bold">Design</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" alt="Figma" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">Figma</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg" alt="Photoshop" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">Photoshop</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg" alt="Illustrator" className="w-12 h-12 mb-2" />
                    <span className="text-slate-300 text-sm">Illustrator</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="glass-card p-6 rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-white font-bold mt-4">{project.title}</h3>
            <p className="text-slate-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent mt-2 inline-block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <span className="text-accent text-sm uppercase tracking-wider">Contact</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-8">
              Let's Work Together
            </h2>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/adityagaur01/"
                target="_blank"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;