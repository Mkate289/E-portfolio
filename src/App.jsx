import profilePic from "./assets/profile.jpg";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [message, setMessage] = useState("");

  const projects = [
    {
      title: "Calculator App",
      category: "Javascript/React",
      description:
        "A simple calculator that performs basic mathematical operations with an easy-to-use interrface.",
      number: "01",
    },
    {
      title: "To-Do List App",
      category: "JavaScript/React",
      description:
        "A task management app that helps users to organized their tasks and keep track of what they need to finish.",
      number: "02",
    },
    {
      title: "E-Portfolio Website",
      category: "React + Tailwind CSS",
      description:
        "A responsive personal portfolio showcasing my profile, skills, projects, resume and contact infomation.",
      number: "03",
    },
    {
      title: "WorkTrack",
      category: "Capstone Project",
      description:
        "An employee attendance and task monitoring system for a digital marketing department. My proposed system aims to help the HR so it wiil manage the employee attendance records and employee information. While the project leader will assign tasks and monitor them.",
      number: "04",
    },
  ];

  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, 3);

  const handleContactSubmit = (event) => {
    event.preventDefault();

    setMessage(
      "Thank you for your message! This demo form is working, but it does not send emails yet."
    );
  };

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#17243A]">
      {/* The navigation is here! */}
      <header className="sticky top-0 z-50 border-b border-[#17243A]/10 bg-[#F7F3EB]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            My<span className="text-[#A47D4D]">Portfolio.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#17243A]/75 transition hover:text-[#A47D4D]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full bg-[#17243A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#34445F]"
            >
              Let’s Talk
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-[#17243A]/20 px-3 py-2 text-sm font-semibold md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-1 border-t border-[#17243A]/10 px-5 py-3 md:hidden">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-medium transition hover:bg-[#17243A]/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* The home is here! */}
        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28"
        >
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#A47D4D]">
              Student Portfolio
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Hello, I’m
              <span className="mt-2 block text-[#A47D4D]">
                Mary Kate Domingo.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#17243A]/70">
              An aspiring IT student who enjoys learning about
              Web development, system design and creating useful
              digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#17243A] px-7 py-3.5 font-semibold text-white transition hover:bg-[#34445F]"
              >
                Explore My Work
              </a>

              <a
                href="#about"
                className="rounded-full border border-[#17243A]/20 px-7 py-3.5 font-semibold transition hover:bg-white"
              >
                About Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#17243A]/60">
              <p>Based in the Philippines</p>
              <p>BS Information Technology Student</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-[#DCCBB0]" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#17243A] p-8 text-[#F7F3EB] shadow-xl sm:p-10">
              <div className="flex min-h-72 flex-col justify-between">
                <img
                  src={profilePic}
                  alt="My Profile"
                  className="h-32 w-32 rounded-full border-4 border-[#E8DFC9] object-cover"
                />

                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#DCCBB0]">
                    A little about me
                  </p>

                  <h2 className="text-3xl font-bold">
                    Learning.
                    <br />
                    Building.
                    <br />
                    Growing.
                  </h2>

                  <p className="mt-4 leading-7 text-white/70">
                    Every project is an opportunity to improve my
                    skills and discover something new.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* This is about me! */}
        <section
          id="about"
          className="scroll-mt-24 bg-white px-5 py-20 md:px-10 md:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#A47D4D]">
                Get to know me
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                About Me
              </h2>

              <p className="mt-6 leading-8 text-[#17243A]/70">
                I am a Bachelor of Science in Information Technology
                Student third year in cvsu tanza. Therefore i am currently developing my skills in programming,
                Interface design and information systems.
              </p>

              <p className="mt-4 leading-8 text-[#17243A]/70">
                I enjoy exploring new codes because i get some new ideas about how to create websites or apps.
                Meanwhile i also enjoy solving problems it is making me more understand my codes and doing my projects that help me apply
                what I learn in class.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F7F3EB] p-7 sm:p-9">
              <h3 className="text-xl font-bold">
                Skills I’m Developing
              </h3>

              <div className="mt-6 space-y-5">
                {[
                  { name: "HTML & CSS", level: "Learning" },
                  { name: "JavaScript & React", level: "Learning" },
                  { name: "UI/UX Design", level: "Learning" },
                  { name: "Database Management", level: "Learning" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-3 border-b border-[#17243A]/10 pb-4"
                  >
                    <span className="font-medium">{skill.name}</span>

                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#A47D4D]">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* This is my projects! */}
        <section
          id="projects"
          className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#A47D4D]">
                Selected work
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Projects & Work Samples
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#17243A]/70">
                A collection of my sample projects and concepts
                that will represent my learning journey.
              </p>
            </div>

            <p className="text-sm text-[#17243A]/50">
              {visibleProjects.length} projects shown
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.number}
                className="group flex min-h-64 flex-col rounded-3xl border border-[#17243A]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#A47D4D]">
                    PROJECT {project.number}
                  </span>

                  <span className="text-2xl text-[#A47D4D] transition group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-[#17243A]/50">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-[#17243A]/70">
                  {project.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="rounded-full border border-[#17243A]/20 px-7 py-3 font-semibold transition hover:bg-white"
            >
              {showAllProjects ? "Show Less" : "View More Projects"}
            </button>
          </div>
        </section>

        {/* This is my resume! */}
        <section
          id="resume"
          className="scroll-mt-24 bg-[#17243A] px-5 py-20 text-[#F7F3EB] md:px-10 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#DCCBB0]">
              My background
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Resume / CV
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/65">
              My educational background, learning experience and
              current areas of interest.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-white/15 bg-white/5 p-7">
                <p className="text-sm font-semibold text-[#DCCBB0]">
                  2024 — Present
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Bachelor of Science in Information Technology
                </h3>

                <p className="mt-2 leading-7 text-white/65">
                   Cavite State University - Tanza Campus
                </p>

                <p className="mt-4 leading-7 text-white/65">
                  I am currently studying programming, web development, databases,
                  systems analysis and user interface design.
                </p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/5 p-7">
                <p className="text-sm font-semibold text-[#DCCBB0]">
                  Academic Experience
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Student Projects
                </h3>

                <p className="mt-2 leading-7 text-white/65">
                  Web Development and UI/UX Design
                </p>

                <p className="mt-4 leading-7 text-white/65">
                  I am currently practicing a website development, basic programming,
                  Interface design and collaborative problem-solving.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[#F7F3EB] p-7 text-[#17243A] sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-xl font-bold">
                  Interested in my background?
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#17243A]/65">
                  Contact me to learn more about my skills and projects.
                </p>
              </div>
              <a
                href="/resume.txt" download
                className="inline-block rounded-full bg[#F5EBDD] px-6 py-3 font-semibold text-[#0F172A] transition hover:bg-white"
              >
                Download My CV
              </a>

              <a
                href="#contact"
                className="mt-5 inline-flex rounded-full bg-[#17243A] px-6 py-3 font-semibold text-white transition hover:bg-[#34445F] sm:mt-0"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* This is my contact information! */}
        <section
          id="contact"
          className="scroll-mt-24 mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-24"
        >
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#A47D4D]">
              Get in touch
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Contact Me
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-[#17243A]/70">
              Have a question, project idea, or opportunity to share?
              Feel free to leave a message using the form.
            </p>

            <div className="mt-8 space-y-4">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                marykate.domingo@cvsu.edu.ph
              </p>

              <p>
                <span className="font-semibold">Location:</span>{" "}
                Philippines
              </p>
            </div>
          </div>

          <form
            onSubmit={handleContactSubmit}
            className="rounded-3xl bg-white p-7 shadow-sm sm:p-9"
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-[#17243A]/15 bg-[#F7F3EB]/50 px-4 py-3 outline-none transition focus:border-[#A47D4D] focus:ring-2 focus:ring-[#A47D4D]/20"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold"
              >
                Your Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-[#17243A]/15 bg-[#F7F3EB]/50 px-4 py-3 outline-none transition focus:border-[#A47D4D] focus:ring-2 focus:ring-[#A47D4D]/20"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is your message about?"
                required
                className="w-full rounded-xl border border-[#17243A]/15 bg-[#F7F3EB]/50 px-4 py-3 outline-none transition focus:border-[#A47D4D] focus:ring-2 focus:ring-[#A47D4D]/20"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here…"
                required
                className="w-full resize-y rounded-xl border border-[#17243A]/15 bg-[#F7F3EB]/50 px-4 py-3 outline-none transition focus:border-[#A47D4D] focus:ring-2 focus:ring-[#A47D4D]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#17243A] px-6 py-3.5 font-semibold text-white transition hover:bg-[#34445F]"
            >
              Send Message
            </button>

            {message && (
              <p
                role="status"
                className="mt-4 rounded-xl bg-[#E7F4E8] p-4 text-sm leading-6 text-[#24552B]"
              >
                {message}
              </p>
            )}
          </form>
        </section>
      </main>

      {/* This is the footer! */}
      <footer className="border-t border-[#17243A]/10 px-5 py-7 text-center text-sm text-[#17243A]/60">
        <p>
          © {new Date().getFullYear()} Mary kate Domingo. My Portfolio.
        </p>

        <a
          href="#home"
          className="mt-3 inline-block font-semibold text-[#A47D4D] hover:underline"
        >
          Back to Top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;