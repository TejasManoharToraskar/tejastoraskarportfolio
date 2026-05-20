import profileImage from "./portfolio_pic.png";

export default function Portfolio() {

  const projects = [
    {
      title: 'Chatbot Using RAG',

      description:
        'Developed an AI-powered chatbot using RAG architecture with knowledge-base integration, responsive frontend UI, and efficient information retrieval workflow.',

      tech: ['React', 'PHP', 'Bootstrap'],

      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',

      github:
        'https://github.com/TejasManoharToraskar/chatbot-with-RAG',
    },

    {
      title: 'Expense Tracker System',

      description:
        'Built a responsive expense tracking system with category management, transaction history, and dynamic financial monitoring using PHP and MySQL.',

      tech: ['PHP', 'MySQL', 'Bootstrap'],

      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',

      github:
        'https://github.com/TejasManoharToraskar/Expense-Manager',
    },
  ];

  const skills = [
  'HTML5',
  'CSS3',
  'Bootstrap 5',
  'JavaScript',
  'React JS',
  'PHP',
  'MySQL',
  'Responsive Design',
  'SEO',
  'UI/UX',
];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold tracking-wide">
            Tejas Toraskar
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center lg:items-start">

          {/* Left Content */}
          <div>

            <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-3">
              Creative Web Developr
            </p>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Web Developer Crafting

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Modern Digital Experiences
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                <div className="flex items-center gap-3 mb-10">

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

                <p className="text-green-400 font-medium">
                    Available for Internships & Job Opportunities
                </p>

                </div>
             Web Developer skilled in PHP, JavaScript, React, and modern frontend
             technologies with experience in building responsive, user-focused,
             and performance-driven web applications. Passionate about creating
             clean UI experiences, scalable solutions, and continuously learning
             modern technologies.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition duration-300 shadow-lg shadow-cyan-500/20"
              >
                View Projects
              </a>

              <a
                href="https://github.com/TejasManoharToraskar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
              >
                GitHub
              </a>

              <a
             href="/resume.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Download Resume
            </a>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center">

            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-2xl w-full max-w-[500px] h-[520px] border border-white/10 shadow-2xl shadow-cyan-500/20">

              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover object-center"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay"></div>

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[120px] bg-cyan-500/20 blur-3xl rounded-full"></div>

            </div>

            {/* Decorative Lines */}
            <div className="absolute inset-0 pointer-events-none">

              <div className="absolute top-10 left-10 w-[80%] h-[80%] border border-white/10 rotate-12"></div>

              <div className="absolute bottom-10 right-10 w-[70%] h-[70%] border border-cyan-400/20 -rotate-12"></div>

              <div className="absolute top-1/2 left-1/2 w-[90%] h-[60%] border border-white/5 rotate-45 -translate-x-1/2 -translate-y-1/2"></div>

            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              alt="Workspace"
              className="rounded-3xl border border-white/10"
            />

          </div>

          <div>

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Passionate About Web Development
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              I am a Web Developer with hands-on experience in PHP, JavaScript,
              React, and frontend development, focused on building responsive and
              modern web applications with clean user experiences and optimized
              performance.
            </p>

           <p className="text-gray-400 leading-relaxed">
             I am also familiar with SEO (Search Engine Optimization), responsive
             design strategies, and performance optimization techniques that help
             improve website visibility and user engagement.
            </p>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-white/[0.02]">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Skills
          </p>

          <h2 className="text-4xl font-bold mb-14">
            Technologies & Tools
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {skills.map((skill, index) => (

              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-cyan-400 transition duration-300"
              >

                <h3 className="text-lg font-semibold">
                  {skill}
                </h3>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Portfolio
            </p>

            <h2 className="text-5xl font-bold">
              Featured Projects
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (

              <div
                key={index}
                className="group bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-500"
              >

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">

                    {project.tech.map((item, i) => (

                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  <div className="flex gap-4">

                    <button className="px-5 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
                      Live Demo
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition"
                    >
                      GitHub
                    </a>

                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 bg-white/[0.02]">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Let’s Build Something Amazing
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Interested in collaborating, freelance projects, or creative web
            design work? Feel free to connect with me.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="https://github.com/TejasManoharToraskar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tejas-toraskar-4b16a826b/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:toraskartejas15@gmail.com?subject=Portfolio Inquiry&body=Hello Tejas,"
              className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              Email Me
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">

        © 2026 Tejas Toraskar • Built with React & Tailwind CSS

      </footer>

    </div>
  );
}