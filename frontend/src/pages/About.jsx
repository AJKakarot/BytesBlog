import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);

  return (
    <div className="bg-yellow-100 min-h-screen py-12 px-4">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg space-y-9">
        <h1 className="text-3xl text-blue-800 font-bold mb-6">About Me</h1>

        <p className="text-blue-800">
          Hey there! I'm{" "}
          <strong className="font-semibold hover:scale-105 inline-block transition-transform duration-300">
            Ajeet Gupta
          </strong>
          , a passionate Computer Science Engineering student currently in my
          2nd year at Dr. Ambedkar Institute of Technology for Handicapped,
          Kanpur.
        </p>

        <h2 className="font-semibold text-blue-800 text-xl">
          My Background & Interests
        </h2>
        <p className="text-blue-800">
          I’m deeply interested in{" "}
          <strong>Artificial Intelligence</strong> and{" "}
          <strong>Machine Learning</strong>, and I love building full-stack
          projects that solve real-world problems. I'm always exploring new
          technologies, and I believe in continuous learning and hands-on
          practice.
        </p>

        <h2 className="font-semibold text-blue-800 text-xl">What I’ve Done</h2>
        <p className="text-blue-800">
          - 🏆 Won 4th place in a National Hackathon
          <br />
          - 🥇 Secured 1st position in a college project competition
          <br />
          - 👨‍💻 Created full-stack apps using <strong>MERN</strong>,{" "}
          <strong>FELL</strong>, and more
          <br />
          - 💻 Built a Blog App, Simon Game, Password Generator, and a Travel
          Project called <strong>Wanderlust</strong>
          <br />
          - 🎯 Tech coordinator in college with active participation in tech and
          sports events
        </p>

        <h2 className="font-semibold text-blue-800 text-xl">
          Tech Stack & Skills
        </h2>
        <p className="text-blue-800">
          <strong>Frontend:</strong> React.js, HTML, CSS, JavaScript,
          Bootstrap, Tailwind
          <br />
          <strong>Backend:</strong> Node.js, Express.js, Firebase, MongoDB
          <br />
          <strong>Tools:</strong> GitHub, Postman, VS Code, Canva (presentation
          support from teammates)
          <br />
        </p>

        <h2 className="font-semibold text-blue-800 text-xl">Beyond Code</h2>
        <p className="text-blue-800">
          When I’m not debugging or building full-stack projects, you’ll
          probably find me diving into open-source repos or brainstorming the
          next big idea with my teammates. I’m passionate about clean code,
          smart UI/UX, and solving real-world problems with tech.
          <br />
          <br />
          I draw daily inspiration from the developer community—and from my
          brother <strong>Divyansh Sharma</strong>, who’s been my constant
          motivator, critic, and coding buddy since day one. Whether it’s a
          hackathon, a late-night bug fix, or a spontaneous idea sprint—we’re
          always pushing each other to level up.
          <br />
          <br />
          I'm always up for new collaborations, side projects, or just geeking
          out over code. Let’s connect and build something impactful together!
        </p>
      </div>
    </div>
  );
}

export default About;
