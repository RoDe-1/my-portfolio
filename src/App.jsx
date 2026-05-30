import React, { useMemo, useState } from "react";
import "./App.css";
import Card1 from "./assets/Card1.png";
import Card2 from "./assets/Card2.png";
import Card3 from "./assets/Card3.png";
import Card4 from "./assets/Card4.png";
import Card5 from "./assets/Card5.png";
import Card6 from "./assets/Card6.png";
import main_cover from "./assets/Main_Cover3.png";
import profileImage from "./assets/profile.jpg";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  ChevronRight,
  Cpu,
  ExternalLink,
  FolderGit2,
  GraduationCap,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Camera,
  Send,
  Sparkles,
  User,
  Wrench,
  X,
} from "lucide-react";

const profile = {
  name: "Mortada Mohammed",
  title: "Computer Engineering Student",
  subtitle:
    "Driven by curiosity, learning, and building practical ideas that connect science, technology, and real-world impact.",
  location: "Basra, Iraq",
  email: "mortadamohammedcoe@gmail.com",
  FolderGit2: "https://github.com/RoDe-1",
  summary:
    "I build practical systems at the intersection of embedded software, IoT, and user-facing interfaces. My work focuses on turning technical concepts into clear, reliable, and polished products.",
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mortada-al-yasiri-22ba0a391?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: Briefcase,
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/0qu.0",
      icon: Camera,
    },
    {
      label: "Telegram",
      url: "https://t.me/kjkjkk",
      icon: Send,
    },
  ],
};

const projects = [
  {
    id: 1,
    title: "ESP32 IoT Cloud Dashboard",
    category: "IoT / Embedded Systems",
    year: "2026",
    image: Card1,
    shortDescription:
      "End-to-end IoT system integrating embedded firmware, sensor data acquisition, real-time monitoring, remote device control, and a cloud-connected dashboard.",
    application:
      "Real-time IoT system for monitoring and controlling connected devices using sensor-integrated embedded system, enabling seamless device-to-cloud communication.",
    stack: [
      "ESP32",
      "ESP-IDF",
      "FreeRTOS",
      "MQTT",
      "Embedded System",
      "EMQX",
      "SNTP",
      "Sensors",
      "HTML / CSS / JS",
    ],
    highlights: [
      "Real-time sensor data acquisition and streaming",
      "Remote device monitoring and control via MQTT",
      "Secure cloud communication using EMQX broker",
      "Embedded firmware for sensor integration",
      "Interactive web dashboard for system visualization",
    ],
    details:
      "This project integrates ESP32 firmware, MQTT communication, and a web dashboard to monitor and control devices remotely. It includes task scheduling, secure messaging, and real-time system feedback.",
    FolderGit2: "https://github.com/RoDe-1/esp32-remote-control-system.git",
    demo: "https://rode-1.github.io/esp32-remote-control-system/",
  },
  {
    id: 2,
    title: "High Voltage & Power Systems Lab",
    category: "High Voltage Systems",
    year: "2025 + 2026",
    image: Card3,
    shortDescription:
      "Exploring high-voltage systems, electrostatic phenomena, and power transmission through practical electrical engineering experiments.",
    application:
      "Suitable for demonstrating high-voltage behavior, electrostatic effects, and real-world power transmission concepts in educational and experimental environments.",
    stack: [
      "High Voltage Circuits",
      "Van de Graaff Generator",
      "Electrostatics",
      "Tesla Coil",
      "Power Transmission",
    ],
    highlights: [
      "High Voltage Circuits",
      "Electrostatics",
      "Power Transmission",
      "Tesla Coil",
      "Van de Graaff Generator",
    ],
    details: [
      {
        title: "Project Overview",
        text: "This project focuses on three important electrical systems: the Van de Graaff generator, the Tesla coil, and a simple wireless power transmission system. It presents high-voltage and power concepts in a clear and practical way.",
      },
      {
        title: "Van de Graaff Generator",
        text: "The Van de Graaff generator demonstrates how static electricity can be generated and accumulated at very high voltages. It helps explain electric charge, electric fields, electrostatic force, and spark discharge.",
      },
      {
        title: "Tesla Coil",
        text: "The Tesla coil demonstrates how high-frequency alternating current can produce very high voltages. It is useful for showing electrical resonance, electromagnetic fields, and visible electrical arcs.",
      },
      {
        title: "Wireless Power Transmission",
        text: "This section demonstrates a simple wireless energy transfer system using two coils: a transmitter coil and a receiver coil. The transmitter coil produces an electromagnetic field, which induces voltage in the receiver coil. An LED connected to the receiver coil was used to show that energy was transferred without direct wire connection, and the receiver voltage was measured.",
      },
      {
        title: "Future Development",
        text: "Although the setup was simple, it explains the basic idea behind wireless power transfer and can be developed in the future into a wireless charging system.",
      },
    ],
    FolderGit2: "https://FolderGit2.com/yourusername/project-2",
    demo: "#",
  },
  {
    id: 3,
    title: "Autonomous Smart Car Robot (ASCR)",
    category: "Autonomous Navigation System",
    year: "2024",
    image: Card2,
    shortDescription:
      "End-to-end embedded system integrating Arduino control, ultrasonic-based obstacle detection, real-time distance measurement, and an LCD interface for seamless navigation feedback.",
    application:
      "Used for autonomous navigation and obstacle avoidance in small-scale robotic systems, demonstrating real-time sensing, control logic, and human-readable feedback.",
    stack: [
      "Arduino",
      "Embedded C",
      "Robotics",
      "LCD Interface",
      "Ultrasonic Sensing",
      "Control Logic",
    ],
    highlights: [
      "Obstacle detection using ultrasonic sensors",
      "Real-time distance measurement and feedback",
      "LCD-based visual guidance and navigation display",
      "Basic autonomous navigation logic",
      "Embedded control using Arduino",
    ],
    details:
      "The goal of this project is to create a stable and understandable operator interface for embedded devices. It prioritizes responsiveness, system readability, and a clean separation between control logic and presentation logic.",
    FolderGit2: "https://FolderGit2.com/yourusername/project-3",
    demo: "#",
  },
  {
    id: 4,
    title: "Transistor-Level Boolean Logic Circuit",
    category: "Control & Logic Systems",
    year: "2025",
    image: Card4,
    shortDescription:
      "Designed and implemented a Boolean logic circuit at the transistor level using NMOS switching with a JFET depletion-load configuration for improved efficiency and practical digital logic behavior.",
    application:
      "Used to demonstrate how Boolean expressions can be implemented directly using transistor-level switching circuits and load configurations.",
    stack: [
      "Boolean Algebra",
      "NMOS Logic",
      "JFET Depletion Load",
      "Transistor-Level Design",
      "Digital Electronics",
    ],
    highlights: [
      "Boolean equation implementation",
      "Transistor-level logic design",
      "Comparison of BJT, JFET, and MOSFET behavior",
      "NMOS switching with JFET depletion load",
      "Improved logic efficiency and output performance",
    ],
    details:
      "This project focuses on implementing a Boolean logic equation at the transistor level instead of using ready-made logic gate ICs. During the design process, different transistor technologies were studied and tested, including BJT, JFET, and MOSFET devices. The final implementation used an NMOS transistor as the switching device with a JFET configured as a depletion load, providing better efficiency, improved switching behavior, and a more practical digital logic output. This work helped demonstrate how Boolean algebra can be translated into real electronic hardware using transistor-level circuit design.",
    FolderGit2: "https://FolderGit2.com/yourusername/project-3",
    demo: "#",
  },
  {
    id: 5,
    title: "Seven-Segment Decoder Using CD4511 IC",
    category: "Control & Logic Systems",
    year: "2025",
    image: Card5,
    shortDescription:
      "Practical implementation of a seven-segment display decoder circuit using the CD4511 IC and a common-cathode display.",
    application:
      "Used to display decimal numbers on a seven-segment display by converting binary-coded input signals into readable digit outputs.",
    stack: [
      "CD4511 IC",
      "Seven-Segment Display",
      "Common Cathode",
      "BCD Decoder",
      "Digital Electronics",
    ],
    highlights: [
      "BCD-to-seven-segment decoding",
      "CD4511 IC interfacing",
      "Common-cathode display connection",
      "Digital output visualization",
      "Practical display circuit testing",
    ],
    details:
      "This project demonstrates the practical use of the CD4511 BCD-to-seven-segment decoder IC with a common-cathode display. The circuit receives binary-coded decimal inputs and converts them into the correct segment outputs to display decimal digits. It helps explain decoder operation, display interfacing, and the use of integrated circuits in digital electronics.",
    FolderGit2: "https://FolderGit2.com/yourusername/project-3",
    demo: "#",
  },
  {
    id: 6,
    title: "Wien Bridge Oscillator & Waveform Generator",
    category: "Analog Electronics",
    year: "2025",
    image: Card6,
    shortDescription:
      "Designed and calibrated a Wien Bridge Oscillator to generate a stable sine wave, then extended it with comparator and shaping stages to produce square and triangle wave outputs.",
    application:
      "Used for analog signal generation, oscillator calibration, waveform conversion, and practical study of feedback, frequency control, and signal shaping.",
    stack: [
      "Wien Bridge Oscillator",
      "Analog Electronics",
      "Comparator Circuit",
      "Signal Shaping",
      "Sine Wave",
      "Square Wave",
      "Triangle Wave",
      "Circuit Calibration",
    ],
    highlights: [
      "Wien Bridge Oscillator",
      "Sine Wave Generation",
      "Comparator Stage",
      "Square Wave Output",
      "Waveform Shaping",
      "Triangle Wave Output",
      "Feedback Control",
      "Analog Signal Processing",
    ],
    details:
      "This project focuses on designing and calibrating a Wien Bridge Oscillator circuit as the main sine wave generation stage. The circuit was powered using a ±9V supply, and after practical tuning, the output reached approximately 8.5V peak, leaving only a 0.5V voltage difference from the supply reference and achieving an approximate calibration accuracy of 94.44%. The sine wave output was then fed into a comparator stage to produce a square wave, followed by a third waveform-shaping stage to generate a triangle wave. This project demonstrates practical analog signal generation, feedback control, frequency behavior, and multi-stage waveform conversion.",
    FolderGit2: "https://FolderGit2.com/yourusername",
    demo: "#",
  },
];
const certifications = [
  {
    title: "IoT Application Development with ESP32 Using ESP-IDF",
    issuer: "Udemy",
    year: "2026",
  },
  {
    title: "Certificate of Participation",
    issuer: "Southern Technical University",
    year: "2025",
  },
  {
    title: "Certificate of Participation",
    issuer: "Southern Technical University",
    year: "2026",
  },
  {
    title: "Certificate of Participation",
    issuer: "Google Developer Student Clubs",
    year: "2024",
  },
  {
    title: "Arduino and Its Practical Application",
    issuer: "Easyt",
    year: "2024",
  },
];

const Focus_Areas = [
  "Embedded Systems",
  "IoT Engineering",
  "Web Interfaces for Technical Systems",
  "Cloud-Connected Devices",
  "Product-Oriented Engineering",
  "Electrical Enginnering Applications",
  "Networking",
  "Signals",
  "Electronics",
];

const vision = {
  title: "Where I See Myself in 5 Years",
  text: "In the next five years, I see myself building practical projects that connect engineering, physics, electronics, software, and visual learning. I want to keep developing my skills through real experiments, useful products, and creative ways of explaining complex ideas. My long-term goal is to build impactful projects, contribute to innovative teams, and one day create a company or educational platform that teaches physics and electronics in a modern, simple, and highly visual way.",
};

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      style={{
        marginBottom: "20px",
        textAlign: centered ? "center" : "left",
        display: "flex",
        flexDirection: "column",
        alignItems: centered ? "center" : "flex-start",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          border: "1px solid #e2e8f0",
          borderRadius: "999px",
          padding: "8px 14px",
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#64748b",
          background: "rgba(255,255,255,0.8)",
        }}
      >
        <Icon size={14} />
        <span>{eyebrow}</span>
      </div>

      <h2
        style={{
          fontSize: "32px",
          margin: "16px 0 8px",
          color: "#0f172a",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#475569",
          lineHeight: 1.8,
          maxWidth: "720px",
          margin: centered ? "0 auto" : "0",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.72)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            zIndex: 999,
            backdropFilter: "blur(8px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "1100px",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "#ffffff",
              borderRadius: "28px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ position: "relative" }}>
              <button
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  border: "none",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.95)",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "clamp(180px, 42vw, 360px)",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>
            <div
              className="project-modal-body"
              style={{
                padding: "clamp(22px, 5vw, 32px)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#e2e8f0",
                  color: "#0f172a",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  marginBottom: "14px",
                }}
              >
                {project.category}
              </div>

              <h3
                className="project-modal-title"
                style={{
                  fontSize: "clamp(32px, 7vw, 58px)",
                  lineHeight: 1,
                  color: "#0f172a",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  textAlign: "center",
                  margin: "26px auto 18px",
                  maxWidth: "720px",
                  overflowWrap: "break-word",
                }}
              >
                {project.title}
              </h3>
              {Array.isArray(project.details) ? (
                <div className="project-details">
                  {project.details.map((section, index) => (
                    <div className="detail-section" key={index}>
                      <h3>{section.title}</h3>
                      <p>{section.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: "#475569", lineHeight: 1.8 }}>
                  {project.details}
                </p>
              )}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "20px",
                  marginTop: "28px",
                }}
              >
                <div>
                  <h4 style={{ color: "#334155" }}>Application</h4>
                  <p style={{ color: "#475569", lineHeight: 1.8 }}>
                    {project.application}
                  </p>
                </div>
                <div>
                  <h4 style={{ color: "#334155" }}>Year</h4>
                  <p style={{ color: "#475569", lineHeight: 1.8 }}>
                    {project.year}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: "28px" }}>
                <h4 style={{ color: "#334155" }}>Technologies</h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "12px",
                    justifyContent: "center",
                  }}
                >
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      style={{
                        background: "#f1f5f9",
                        padding: "8px 14px",
                        borderRadius: "999px",
                        fontSize: "14px",
                        color: "#334155",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <h4 style={{ color: "#334155" }}>Highlights</h4>
                {project.highlights.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "8px" }}>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              {project.id === 1 && (
                <div
                  className="project-modal-actions"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginTop: "28px",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <a
                    href={project.FolderGit2}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      minWidth: "125px",
                      whiteSpace: "nowrap",
                      background: "#0f172a",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "11px 14px",
                      borderRadius: "16px",
                      fontSize: "15px",
                      fontWeight: 600,
                      transition: "all 0.1s ease",
                      boxShadow: "0 10px 24px rgba(15, 23, 42, 0.18)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.background = "#1e293b";
                      e.currentTarget.style.boxShadow =
                        "0 16px 34px rgba(15, 23, 42, 0.28)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background = "#0f172a";
                      e.currentTarget.style.boxShadow =
                        "0 10px 24px rgba(15, 23, 42, 0.18)";
                    }}
                  >
                    <FolderGit2 size={18} />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      minWidth: "125px",
                      whiteSpace: "nowrap",
                      border: "1px solid #cbd5e1",
                      color: "#0f172a",
                      background: "#fff",
                      textDecoration: "none",
                      padding: "11px 14px",
                      borderRadius: "16px",
                      fontSize: "15px",
                      fontWeight: 600,
                      transition: "all 0.1s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.background = "#eff6ff";
                      e.currentTarget.style.borderColor = "#93c5fd";
                      e.currentTarget.style.boxShadow =
                        "0 14px 30px rgba(59, 130, 246, 0.16)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.borderColor = "#cbd5e1";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <ExternalLink size={18} />
                    View Demo
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectCountLabel = useMemo(
    () => `${projects.length}+ Engineering Projects`,
    [],
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(59,130,246,0.10), transparent 34%), linear-gradient(180deg, #f8fafc 0%, #ffffff 38%, #f8fafc 100%)",
        color: "#0f172a",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(255,255,255,0.82)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(226,232,240,0.8)",
        }}
      >
        <div
          className="nav-container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "12px",
                color: "#64748b",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              PORTFOLIO
            </div>
            <div style={{ fontSize: "14px", color: "#334155" }}>
              {profile.name}
            </div>
          </div>

          <nav
            className="nav-links"
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {[
              { label: "Projects", href: "#projects" },
              { label: "Certifications", href: "#certifications" },
              { label: "Focus Areas", href: "#Focus_Areas" },
              { label: "Vision", href: "#vision" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: "#334155",
                  textDecoration: "none",
                  padding: "10px 16px",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#dbeafe";
                  e.currentTarget.style.color = "#0f172a";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 18px rgba(59, 130, 246, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#334155";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section
          className="hero-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 24px 40px",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid #bae6fd",
                  background: "#f0f9ff",
                  color: "#0369a1",
                  borderRadius: "999px",
                  padding: "10px 16px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                <Sparkles size={14} />
                Engineering mindset
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.7rem, 2vw, 5rem)",
                  lineHeight: 1.05,
                  margin: "24px 0 18px",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: "#0f172a",
                }}
              >
                Real engineering begins where theory meets reality.
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "32px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 18px 42px rgba(15,23,42,0.12)",
              }}
            >
              <div
                style={{
                  height: "180px",
                  backgroundImage: `url(${main_cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center right",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div style={{ padding: "0 24px 28px" }}>
                <div
                  style={{
                    width: "96px",
                    height: "96px",
                    marginTop: "-48px",
                    borderRadius: "28px",
                    border: "4px solid #f8fafc",
                    background: "#f8fafc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 14px 32px rgba(15, 23, 42, 0.18)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Mortada Mohammed"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "24px",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "30px",
                    margin: "18px 0 6px",
                    lineHeight: "25px",
                  }}
                >
                  {profile.name}
                </h3>
                <p style={{ color: "#475569", fontWeight: 600 }}>
                  {profile.title}
                </p>
                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    marginTop: "10px",
                  }}
                >
                  {profile.subtitle}
                </p>

                <div
                  style={{
                    marginTop: "24px",
                    display: "grid",
                    gap: "14px",
                    fontSize: "14px",
                    color: "#334155",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <MapPin size={16} color="#94a3b8" />
                    {profile.location}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Mail size={16} color="#94a3b8" />
                    {profile.email}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <FolderGit2 size={16} color="#94a3b8" />
                    <a
                      href={profile.FolderGit2}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#334155", textDecoration: "none" }}
                    >
                      {profile.FolderGit2.replace("https://", "")}
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginTop: "22px",
                      justifyContent: "center",
                    }}
                  >
                    {profile.socials?.map((social) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "10px 14px",
                            borderRadius: "999px",
                            border: "1px solid rgba(148, 163, 184, 0.35)",
                            background: "rgba(255, 255, 255, 0.65)",
                            color: "#334155",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: 600,
                            transition:
                              "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-3px)";
                            e.currentTarget.style.boxShadow =
                              "0 10px 22px rgba(15, 23, 42, 0.12)";
                            e.currentTarget.style.background =
                              "rgba(255, 255, 255, 0.95)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.background =
                              "rgba(255, 255, 255, 0.65)";
                          }}
                        >
                          <Icon size={17} />
                          {social.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <div
          className="stats-grid"
          style={{
            display: "grid",
            width: "100%",
            justifyContent: "center",
            gridTemplateColumns: "repeat(3, auto)",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {[
            {
              label: projectCountLabel,
              hint: "Hands-on electrical, hardware, and circuit design projects",
              icon: Briefcase,
            },
            {
              label: "Embedded + IoT",
              hint: "Smart systems, sensors, cloud monitoring, and device control",
              icon: Layers,
            },
            {
              label: "Control & Logic Systems",
              hint: "Digital logic, analog electronics, oscillators, and waveform generation",
              icon: Cpu,
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "24px",
                padding: "22px",
                boxShadow: "0 8px 24px rgba(15,23,42,0.05)",
              }}
            >
              <item.icon size={20} color="#64748b" />
              <div
                style={{
                  marginTop: "12px",
                  fontSize: "20px",
                  fontWeight: 800,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  marginTop: "6px",
                  fontSize: "14px",
                  color: "#64748b",
                }}
              >
                {item.hint}
              </div>
            </div>
          ))}
        </div>
        <section
          id="projects"
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}
        >
          <SectionHeading
            icon={Briefcase}
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A selection of my hands-on engineering projects, covering IoT, embedded systems, power systems, robotics, and control applications, with details about the tools, implementation, and outcomes."
            centered={true}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              paddingTop: "40px",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                className="project-card"
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{
                  opacity: 1,
                  y: index === 1 ? -10 : 0,
                  scale: index === 1 ? 1.05 : 0.92,
                }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                style={{
                  zIndex: index === 1 ? 2 : 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "30px",
                    overflow: "hidden",
                    boxShadow: "0 12px 28px rgba(15,23,42,0.06)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "240px",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        background: "rgba(255,255,255,0.92)",
                        color: "#0f172a",
                        padding: "8px 12px",
                        borderRadius: "999px",
                        fontSize: "13px",
                      }}
                    >
                      {project.category}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "24px",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        fontWeight: 700,
                        color: "#64748b",
                      }}
                    >
                      {project.year}
                    </div>
                    <h3 style={{ fontSize: "24px", margin: "10px 0 12px" }}>
                      {project.title}
                    </h3>
                    <p style={{ color: "#475569", lineHeight: 1.8 }}>
                      {project.shortDescription}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginTop: "18px",
                        marginBottom: "20px",
                      }}
                    >
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          style={{
                            background: "#f1f5f9",
                            color: "#334155",
                            padding: "8px 12px",
                            borderRadius: "999px",
                            fontSize: "13px",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      style={{
                        width: "100%",
                        marginTop: "auto",
                        borderRadius: "18px",
                        border: "1px solid #cbd5e1",
                        background: "#fff",
                        color: "#0f172a",
                        padding: "14px 18px",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      View Project Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "40px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            id="certifications"
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "30px",
              padding: "28px",
            }}
          >
            <SectionHeading
              icon={Award}
              eyebrow="Recognition"
              title="Certifications"
              description="A dedicated section for certificates, course completions, university activities, and technical training milestones."
            />

            <div style={{ marginTop: "26px", display: "grid", gap: "14px" }}>
              {certifications.map((item, index) => (
                <div
                  key={`${item.title}-${item.year}-${index}`}
                  style={{
                    border: "1px solid #e2e8f0",
                    background: "#f8fafc",
                    borderRadius: "20px",
                    padding: "16px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "14px",
                    }}
                  >
                    <div>
                      <h4 style={{ margin: 0, color: "#0f172a" }}>
                        {item.title}
                      </h4>
                      <p
                        style={{
                          margin: "6px 0 0",
                          color: "#64748b",
                          fontSize: "14px",
                        }}
                      >
                        {item.issuer}
                      </p>
                    </div>
                    <span
                      style={{
                        background: "#fff",
                        borderRadius: "999px",
                        padding: "8px 12px",
                        fontSize: "13px",
                        height: "fit-content",
                        color: "#334155",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="Focus_Areas"
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "30px",
              padding: "28px",
            }}
          >
            <SectionHeading
              icon={Lightbulb}
              eyebrow="Curiosity"
              title="Areas of Interest"
              description="A concise view of technical domains, long-term interests, and engineering directions I want to keep exploring."
            />

            <div
              style={{
                marginTop: "24px",
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {Focus_Areas.map((item) => (
                <span
                  key={item}
                  style={{
                    border: "1px solid #e2e8f0",
                    background: "#fff",
                    borderRadius: "999px",
                    padding: "10px 16px",
                    fontSize: "14px",
                    color: "#334155",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="vision"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "40px 24px 80px",
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 12px 28px rgba(15,23,42,0.06)",
            }}
          >
            <div
              className="vision-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "0.9fr 1.1fr",
                gap: "30px",
                padding: "32px",
              }}
            >
              <div>
                <SectionHeading
                  icon={GraduationCap}
                  eyebrow="Long-Term Vision"
                  title={vision.title}
                  description="A personal vision section that reflects my long-term goals in technology, science, practical learning, and building meaningful projects."
                />
              </div>

              <div
                className="vision-card"
                style={{
                  background: "#0f172a",
                  borderRadius: "24px",
                  padding: "28px",
                  color: "#fff",
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.9,
                    color: "#cbd5e1",
                  }}
                >
                  {vision.text}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                    gap: "14px",
                    marginTop: "28px",
                  }}
                >
                  {[
                    { icon: Cpu, label: "Physics & Engineering" },
                    { icon: Wrench, label: "Practical Innovation" },
                    { icon: User, label: "Visual Education" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        borderRadius: "18px",
                        padding: "18px 10px",
                        minWidth: 0,
                        textAlign: "center",
                      }}
                    >
                      <item.icon size={20} color="#7dd3fc" />
                      <div
                        style={{
                          marginTop: "12px",
                          fontSize: "clamp(12px,1.5vw,14px)",
                          lineHeight: 1.4,
                          color: "#fff",
                          wordBreak: "normal",
                        }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
