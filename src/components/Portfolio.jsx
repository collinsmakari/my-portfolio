import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import ecommerce1 from "../assets/ecommerce1.jpg";
import portfolio from "../assets/portfolio.jpg";
import clock1 from "../assets/clock1.jpg";
import portfolio1 from "../assets/portfolio1.jpg";
import aboutVideo from "../assets/Drones.mp4";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef();
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Add at the top with your other useState
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    emailjs
      .sendForm(
        "service_a1pt55e",
        "template_o0zcljd",
        formRef.current, // ✅ use the ref
        "QJCRvQqhAWygNd-92"
      )
      .then((result) => {
        setSuccessMessage("Your message has been sent successfully!");
        console.log(result.text);
        e.target.reset();

        setTimeout(() => setSuccessMessage(""), 3000);
      })
      .catch((error) => {
        console.log(error.text);
        setErrorMessage("Failed to send message. Please try again.");

        setTimeout(() => setErrorMessage(""), 3000);
      });
  }

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  ];

  const projects = [
    {
      title: "E-Commerce App",
      desc: "A modern online shopping experience with cart popup and product grid.",
      git: "https://e-commerce-app-sbou.vercel.app/",
      img: ecommerce1,
    },
    {
      title: "Portfolio Website",
      desc: "A sleek personal portfolio made with React and Tailwind CSS.",
      git: "https://my-portfolio-lime-six-16.vercel.app/",
      img: portfolio,
    },
    {
      title: "Weather App",
      desc: "A real-time weather tracking application.",
      git: "#",
      img: clock1,
    },
  ];

  const year = new Date().getFullYear();

  return (
    <div className="font-sans bg-black text-white">
      {/* HEADER */}
      <header className="fixed w-full top-0 left-0 bg-gray-950 shadow-lg z-50">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span>COLLINS</span> MAKARI
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </nav>

          {/* Social Icons Desktop */}
          <div className="hidden md:flex gap-4 text-xl">
            <FaGithub
              onClick={() =>
                window.open("https://github.com/CollinsMakari", "_blank")
              }
              className="hover:text-cyan-400 cursor-pointer"
            />
            <FaLinkedin
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/g-e-collins-makari-450b4a232/",
                  "_blank"
                )
              }
              className="hover:text-cyan-400 cursor-pointer"
            />
            <FaTwitter
              onClick={() =>
                window.open("https://x.com/Makaricollins", "_blank")
              }
              className="hover:text-cyan-400 cursor-pointer"
            />
          </div>

          {/* Hamburger */}
          <button className="md:hidden text-3xl" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE MENU POPUP */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 p-6 flex flex-col gap-6 text-lg animate-fadeIn">
            <a
              onClick={toggleMenu}
              href="#home"
              className="hover:text-cyan-400"
            >
              Home
            </a>
            <a
              onClick={toggleMenu}
              href="#about"
              className="hover:text-cyan-400"
            >
              About
            </a>
            <a
              onClick={toggleMenu}
              href="#projects"
              className="hover:text-cyan-400"
            >
              Projects
            </a>
            <a
              onClick={toggleMenu}
              href="#skills"
              className="hover:text-cyan-400"
            >
              Skills
            </a>
            <a
              onClick={toggleMenu}
              href="#contact"
              className="hover:text-cyan-400"
            >
              Contact
            </a>

            {/* SOCIAL ICONS MOBILE */}
            <div className="flex gap-4 text-2xl pt-4 border-t border-gray-600">
              <FaGithub
                onClick={() =>
                  window.open("https://github.com/CollinsMakari", "_blank")
                }
                className="hover:text-cyan-400 cursor-pointer"
              />
              <FaLinkedin
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/g-e-collins-makari-450b4a232/",
                    "_blank"
                  )
                }
                className="hover:text-cyan-400 cursor-pointer"
              />
              <FaTwitter
                onClick={() =>
                  window.open("https://x.com/Makaricollins", "_blank")
                }
                className="hover:text-cyan-400 cursor-pointer"
              />
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="w-full min-h-[calc(100vh-70px)] pt-[70px] max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 p-4 bg-gray-950 mb-5 rounded-xl"
      >
        <div className="max-w-6xl w-full flex flex-col  items-center md:flex-row md:items-center gap-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Collins Makari</h1>
            <p className="text-gray-300 mb-6">
              Frontend Junior Developer crafting beautiful and responsive web
              experiences.
            </p>
            <a rel="stylesheet" href="#projects">
              <button className="px-6 py-3 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-400">
                View My Work
              </button>
            </a>
          </div>

          <img
            src={portfolio1}
            alt="Profile"
            className=" w-80 h-85  rounded-xl shadow-lg border border-gray-700 object-cover"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative scroll-mt-[80px] h-screen flex items-center justify-center text-center overflow-hidden mb-5 "
      >
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={aboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* CONTENT ON TOP */}
        <div className="relative z-10 max-w-5xl p-4 text-white">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am a passionate developer who enjoys building modern, fast, and
            clean web interfaces. I focus on React, JavaScript, Tailwind CSS,
            and UI/UX design.
          </p>
        </div>

        {/* OPTIONAL: Overlay for better readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="scroll-mt-[80px] py-10 max-w-6xl mx-auto p-4 bg-gray-950 mb-5 rounded-xl"
      >
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-cyan-500/20"
            >
              <img
                src={p.img}
                alt={p.title}
                className="rounded-lg mb-1 aspect-video object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <a
                href={p.git}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="scroll-mt-[80px] py-10 max-w-6xl mx-auto p-4 bg-gray-950 mb-5 rounded-xl"
      >
        <h2 className="text-4xl font-bold text-center mb-10">Skills & Tools</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {skills.map((s, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl text-center shadow-md hover:shadow-cyan-500/20"
            >
              <div className="mb-3 flex justify-center">{s.icon}</div>
              <h4 className="text-xl font-semibold">{s.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-[40px] min-h-screen max-w-6xl mx-auto p-4 flex items-center justify-center bg-gray-950 mb-5 rounded-xl"
      >
        <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {/* LEFT COLUMN: Title + Description + Email & Phone */}
          <div className="flex flex-col justify-center items-center lg:items-center text-center lg:text-center gap-6">
            <h2 className="text-4xl font-bold">Contact Me</h2>
            <p className="text-gray-300">
              Have a project or idea? Let's work together!
            </p>

            {/* EMAIL & PHONE INFO */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300 text-lg mt-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Email:</span>
                <a
                  href="mailto:youremail@example.com"
                  className="hover:text-cyan-400"
                >
                  collinsmakari6@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Phone:</span>
                <a href="tel:+1234567890" className="hover:text-cyan-400">
                  +254 707 947 561
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-gray-800 p-8 rounded-lg shadow-lg w-full"
          >
            {/* NAME FIELD */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2 font-semibold">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white 
      focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            {/* EMAIL FIELD */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2 font-semibold">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white 
      focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            {/* MESSAGE FIELD */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white 
      focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              ></textarea>
            </div>
            {/* SUCCESS MESSAGE */}
            {successMessage && (
              <p className="mb-4 text-green-400 bg-green-900/20 p-3 rounded-md text-center">
                {successMessage}
              </p>
            )}
            {/* ERROR MESSAGE */}
            {errorMessage && (
              <p className="mb-4 text-red-400 bg-red-900/20 p-3 rounded-md text-center">
                {errorMessage}
              </p>
            )}
            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-md 
    transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER INSIDE FULL HEIGHT BLOCK */}
      <footer className=" text-center text-gray-400 ">
        {/* Border only */}
        <div className="mx-auto max-w-6xl border-t border-gray-700 mb-6"></div>

        {/* Text unaffected */}
        <p>© {year} Collins Makari. All rights reserved.</p>
      </footer>
    </div>
  );
}
