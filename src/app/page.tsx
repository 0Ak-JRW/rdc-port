"use client";
// components/Portfolio.js
import React, { useState, useEffect } from "react";
import { FaLine } from "react-icons/fa6";
import {
  Moon,
  Sun,
  Github,
  Facebook,
  Instagram,
  Mail,
  ExternalLink,
  Code,
  ArrowRight,
  Globe,
  Phone,
} from "lucide-react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<{
    title: string;
    previewImage: string;
  } | null>(null);
  const navItems = ["about", "projects", "skills", "contact"];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    {
      title: "WHAT UNIVERSAL STORE",
      description:
        "ทำงานในส่วนของ Frontend โดยใช้ Next.js และ Tailwind CSS และแก้งานตามความต้องการ เพื่อสร้างเว็บไซต์ที่มีประสิทธิภาพและตอบสนองความต้องการของผู้ใช้",
      tech: ["Next.js", "Tailwind CSS"],
      website: "https://universal.whatcityth.com/",
      live: "#",
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      images: "/images/whatuniversal.png",
      alt: "Project Image",
    },
    {
      title: "Singer Thailand Project",
      description:
        "พัฒนาเว็บในฐานะฟรีแลนซ์ โดยร่วมทีม Pixel-Team ในการพัฒนา UI สำหรับระบบติดตามงาน (Tracking System) และ Backoffice ของบริษัท Singer Thailand ทั้งในเวอร์ชัน Mobile และ Desktop",
      tech: ["Vue.js", "Tailwind CSS", "Nuxt"],
      website: "#",
      live: "#",
      gradient: "from-green-400 via-cyan-500 to-blue-600",
      images: "/images/",
      alt: "Project Image",
    },
    {
      title: "Streamer website ALEX DEKHUDBAD",
      description:
        "พัฒนาเว็บไซต์สำหรับสตรีมเมอร์ ALEX DEKHUDBAD โดยใช้ Next.js และ Tailwind CSS เพื่อสร้างประสบการณ์การใช้งานที่น่าสนใจและตอบสนองความต้องการของผู้ชม",
      tech: ["Next.js", "Tailwind CSS"],
      website: "https://alex.pixelnetwork.in.th/",
      live: "#",
      gradient: "from-green-400 via-cyan-500 to-blue-600",
      images: "/images/aleck.png",
      alt: "Project Image",
    },
    {
      title: "UI FiveM Daily Login",
      description:
        "ทำในส่วนของ Frontend โดยใช้ React และ Tailwind CSS เพื่อสร้าง UI สำหรับระบบ Daily Login ของ FiveM ตามความต้องการของลูกค้า",
      tech: ["React", "Tailwind CSS"],
      website: "",
      live: "#",
      gradient: "from-green-400 via-cyan-500 to-blue-600",
      images: "/images/Daily.png",
      alt: "Project Image",
    },
    {
      title: "UI FiveM Redeem Code",
      description:
        "ทำในส่วนของ Frontend โดยใช้ React และ Tailwind CSS เพื่อสร้าง UI สำหรับระบบ Redeem Code และฝั่งของการ Generate Code ของ FiveM",
      tech: ["React", "Tailwind CSS"],
      website: "",
      live: "#",
      gradient: "from-green-400 via-cyan-500 to-blue-600",
      images: ["/images/RedeemCode.png", "/images/GenCode.png"],
      alt: "Project Image",
    },
    {
      title: "UI FiveM Job System",
      description:
        "ทำในส่วนของ Frontend โดยใช้ React และ Tailwind CSS เพื่อสร้าง UI สำหรับระบบ Job ของ FiveM โดยมีหน้าที่ในการแสดง Items ที่อยู่ในพื้นที่ทำงานนั้นๆ",
      tech: ["React", "Tailwind CSS"],
      website: "",
      live: "#",
      gradient: "from-green-400 via-cyan-500 to-blue-600",
      images: ["/images/Alljob.png"],
      alt: "Project Image",
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Nuxt"],
      color: "from-blue-400 to-purple-600",
    },
    // {
    //   name: "Web3 & Blockchain",
    //   icon: Zap,
    //   items: ["Solidity", "Web3.js", "Ethers.js", "Hardhat"],
    //   color: "from-purple-400 to-pink-600",
    // },
    // {
    //   name: "Design & UX",
    //   icon: Palette,
    //   items: ["Figma", "UI/UX", "Responsive Design", "Animations"],
    //   color: "from-green-400 to-blue-600",
    // },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Jeerawat.Portfolio
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 relative min-h-screen">
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                <Globe className="w-12 h-12 text-cyan-500" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Frontend Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Hi, my name is Oak. I'm a Computer Science student at Bangkok
            University. I also work as a freelance web developer from time to
            time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              onClick={() => {
                const section = document.getElementById("projects");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            {/* <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              Download Resume
            </button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-500 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-400">Years</div>
            </div>
            {/* <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Smart Contracts
              </div>
            </div> */}
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl rotate-6 animate-pulse"></div>
                  <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center">
                    <img
                      src="/images/Portprofile.jpg"
                      alt="Portprofile"
                      className="rounded-2xl w-[280px] h-auto"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Jeerawat Ruenduangchan
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Hi, my name is Oak. I'm a Computer Science student at Bangkok
                  University. I also work as a freelance web developer from time
                  to time, and currently I'm working at a small shop with some
                  of my friends.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Bangkok University (BU)​ Bachelor of Science in Computer
                  Science School of Information Technology and Innovation
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/0Ak-JRW"
                    className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Github className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-cyan-500 transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/0ak.0o/"
                    className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Instagram className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-cyan-500 transition-colors" />
                  </a>
                  <a
                    href="https://www.facebook.com/JRW.O.A.K/"
                    className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Facebook className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-cyan-500 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-800 md:w-[750px] md:h-[480px] rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-200 dark:border-gray-700">
                  <div
                    className={`w-full h-48 mb-6 flex items-center justify-center relative overflow-hidden gap-2`}
                  >
                    {(Array.isArray(project.images)
                      ? project.images
                      : [project.images]
                    )
                      .slice(0, 2)
                      .map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={project.alt}
                          className="h-full object-contain rounded-xl max-w-[48%] cursor-pointer"
                          onClick={() =>
                            setModalProject({ ...project, previewImage: img })
                          }
                        />
                      ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p
                    className={`text-gray-600 dark:text-gray-400 mb-6 leading-relaxed
                      line-clamp-2 group-hover:line-clamp-none transition-all duration-300`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.website && project.website !== "#" && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors group"
                      >
                        <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>View Website</span>
                      </a>
                    )}
                    {/* <a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors group"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setModalProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800/50 rounded-2xl p-4 max-w-[50vw] w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-1 right-1 text-white hover:text-cyan-500 text-2xl"
              onClick={() => setModalProject(null)}
            >
              &times;
            </button>
            <img
              src={modalProject.previewImage}
              alt="Preview"
              className="w-full h-auto rounded-xl"
            />
            <p className="text-white mt-2 text-center">{modalProject.title}</p>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="flex justify-center gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center group w-[20vw]">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {skill.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="flex flex-col items-center justify-center w-[20vw] mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="mb-8 space-y-4 w-full">
            <div className="text-gray-600 dark:text-gray-400 mx-auto flex justify-start items-center space-x-4">
              <Phone className="w-8 h-8 text-purple-600" />
              <div className="flex flex-col items-start">
                <p className="font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Phone
                </p>
                <p>0800651937</p>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mx-auto flex justify-start items-center space-x-4">
              <FaLine className="w-8 h-8 text-purple-600" />
              <div className="flex flex-col items-start">
                <p className="font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Line ID
                </p>
                <p>chayanan1123</p>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mx-auto flex justify-start items-center space-x-4">
              <Instagram className="w-8 h-8 text-purple-600" />
              <div className="flex flex-col items-start">
                <p className="font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Instagram
                </p>
                <p>0ak.0o</p>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mx-auto flex justify-start items-center space-x-4">
              <Mail className="w-8 h-8 text-purple-600" />
              <div className="flex flex-col items-start">
                <p className="font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Email
                </p>
                <p>jeerawat.ruen@bumail.net</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:jeerawat.ruen@bumail.net"
              className="group w-[20vw] px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Get In Touch</span>
            </a>
            {/* <a
              href="#"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Call
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0">
              Jeerawat.Portfolio
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 Jeerawat Portfolio.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
