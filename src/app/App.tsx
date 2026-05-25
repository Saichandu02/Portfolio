import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Moon,
  Sun,
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  MapPin,
  Zap,
} from "lucide-react";
import { profile } from "../data/profile";
import { skillsData } from "../data/skills";
import { experienceData } from "../data/experience";
import { projectsData } from "../data/projects";
import { certificationsData } from "../data/certifications";
import { educationData } from "../data/education";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'DM Sans', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

function useFontStyle(type: "display" | "body" | "mono") {
  return {
    fontFamily:
      type === "display" ? FONT_DISPLAY : type === "mono" ? FONT_MONO : FONT_BODY,
  };
}

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div
      className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary"
      style={useFontStyle("body")}
    >
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Navbar({ isDark, setIsDark }: { isDark: boolean; setIsDark: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Certs", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-primary font-bold tracking-tight text-base"
          style={useFontStyle("mono")}
        >
          SCM<span className="text-foreground/30">_</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm hover:bg-secondary"
              style={useFontStyle("body")}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-8 h-8 flex items-center justify-center rounded-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="space-y-1">
              <span className={`block w-4 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block w-4 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-4 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="block w-full text-left py-2.5 text-sm text-muted-foreground hover:text-foreground border-b border-border last:border-0"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

function HeroSection() {
  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "11", label: "Certifications" },
    { value: "4", label: "Major Projects" },
    { value: "3", label: "Domains" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid texture background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top-left accent bar */}
      <div className="absolute top-0 left-0 w-px h-40 bg-gradient-to-b from-primary to-transparent" />
      <div className="absolute top-0 left-0 w-40 h-px bg-gradient-to-r from-primary to-transparent" />

      {/* Bottom-right accent bar */}
      <div className="absolute bottom-0 right-0 w-px h-40 bg-gradient-to-t from-primary to-transparent" />
      <div className="absolute bottom-0 right-0 w-40 h-px bg-gradient-to-l from-primary to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Status badge */}
          <div className="flex items-center gap-2 mb-10">
            <span
              className="inline-flex items-center gap-2 text-xs text-primary border border-primary/30 px-3 py-1.5 rounded-sm"
              style={useFontStyle("mono")}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {profile.availability}
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-4"
            style={useFontStyle("display")}
          >
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-primary">{profile.name.split(" ").slice(2).join(" ")}</span>
          </h1>

          {/* Title */}
          <p
            className="text-base text-muted-foreground mb-6 tracking-widest uppercase"
            style={useFontStyle("mono")}
          >
            {profile.title}
          </p>

          {/* Subtitle */}
          <p
            className="text-lg text-foreground/70 max-w-xl leading-relaxed mb-10"
            style={useFontStyle("body")}
          >
            {profile.heroSubtitle}
          </p>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-10">
            <MapPin className="w-3.5 h-3.5" />
            <span style={useFontStyle("mono")}>{profile.location}</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-16">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-all"
              style={useFontStyle("display")}
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-border text-foreground text-sm font-semibold rounded-sm hover:border-primary/50 hover:text-primary transition-all"
              style={useFontStyle("display")}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-border text-foreground text-sm font-semibold rounded-sm hover:border-primary/50 hover:text-primary transition-all"
              style={useFontStyle("display")}
            >
              View Projects
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 ml-1">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:border-primary hover:text-primary transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-card px-5 py-4">
                <div
                  className="text-2xl font-bold text-primary mb-0.5"
                  style={useFontStyle("display")}
                >
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground" style={useFontStyle("mono")}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <p
        className="text-xs text-primary tracking-widest uppercase mb-3"
        style={useFontStyle("mono")}
      >
        {label}
      </p>
      <h2
        className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight"
        style={useFontStyle("display")}
      >
        {title}
      </h2>
      <div className="mt-4 w-12 h-px bg-primary" />
    </div>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const highlights = [
    { label: "Domain", value: "Banking · Healthcare · Manufacturing" },
    { label: "Specialty", value: "GenAI · RAG · LLMs · MLOps" },
    { label: "Platform", value: "AWS · Azure · GCP" },
    { label: "Experience", value: "4+ years production ML" },
  ];

  return (
    <section id="about" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader label="01 — About" title="Who I Am" />
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
            <p
              className="text-lg text-foreground/75 leading-[1.8]"
              style={useFontStyle("body")}
            >
              {profile.about}
            </p>

            <div className="grid grid-cols-1 gap-px bg-border rounded-sm overflow-hidden">
              {highlights.map((h) => (
                <div key={h.label} className="bg-card px-5 py-4">
                  <p className="text-xs text-muted-foreground mb-1" style={useFontStyle("mono")}>
                    {h.label}
                  </p>
                  <p className="text-sm font-semibold text-foreground" style={useFontStyle("display")}>
                    {h.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader label="02 — Skills" title="Technical Stack" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
            {skillsData.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-card p-5 hover:bg-secondary/60 transition-colors group"
              >
                <p
                  className="text-xs text-primary mb-4 tracking-widest uppercase"
                  style={useFontStyle("mono")}
                >
                  {cat.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-sm border border-border group-hover:border-primary/20 transition-colors"
                      style={useFontStyle("mono")}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader label="03 — Experience" title="Career Timeline" />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

            <div className="space-y-10 pl-8">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  className="relative"
                >
                  {/* Dot on timeline */}
                  <div className="absolute -left-8 top-2.5 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />

                  <div className="bg-card border border-border rounded-sm p-6 hover:border-primary/30 transition-all group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3
                          className="text-lg font-bold text-foreground"
                          style={useFontStyle("display")}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-primary text-sm font-semibold mt-0.5" style={useFontStyle("display")}>
                          {exp.company}
                        </p>
                        {exp.location && (
                          <p className="text-xs text-muted-foreground mt-0.5" style={useFontStyle("mono")}>
                            {exp.location}
                          </p>
                        )}
                      </div>
                      <span
                        className="text-xs text-muted-foreground border border-border px-3 py-1 rounded-sm h-fit whitespace-nowrap"
                        style={useFontStyle("mono")}
                      >
                        {exp.dates}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, bidx) => (
                        <li
                          key={bidx}
                          className="flex gap-3 text-sm text-foreground/70 leading-relaxed"
                          style={useFontStyle("body")}
                        >
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader label="04 — Projects" title="Featured Work" />

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
            {projectsData.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-card p-6 flex flex-col hover:bg-secondary/40 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="text-xs text-primary tracking-widest uppercase"
                    style={useFontStyle("mono")}
                  >
                    Project {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3
                  className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                  style={useFontStyle("display")}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm text-foreground/65 leading-relaxed mb-5 flex-1"
                  style={useFontStyle("body")}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-sm"
                      style={useFontStyle("mono")}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const providerColors: Record<string, string> = {
    AWS: "text-[#ff9900]",
    Azure: "text-[#0078d4]",
    Google: "text-[#4285f4]",
    NVIDIA: "text-[#76b900]",
    Databricks: "text-[#ff3621]",
    Meta: "text-[#0866ff]",
    Snowflake: "text-[#29b5e8]",
    Stanford: "text-[#8c1515]",
    DeepLearning: "text-primary",
  };

  const getProviderColor = (issuer: string) => {
    for (const key of Object.keys(providerColors)) {
      if (issuer.toLowerCase().includes(key.toLowerCase())) return providerColors[key];
    }
    return "text-primary";
  };

  return (
    <section id="certifications" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader label="05 — Certifications" title={`${certificationsData.length} Credentials`} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: idx * 0.04, duration: 0.4 }}
                className="bg-card p-5 flex flex-col hover:bg-secondary/40 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <Award className={`w-5 h-5 ${getProviderColor(cert.issuer)} flex-shrink-0`} />
                  {cert.issued && (
                    <span className="text-xs text-muted-foreground" style={useFontStyle("mono")}>
                      {cert.issued}
                    </span>
                  )}
                </div>

                <h3
                  className="text-sm font-semibold text-foreground mb-1 leading-snug group-hover:text-primary transition-colors"
                  style={useFontStyle("display")}
                >
                  {cert.title}
                </h3>
                <p className={`text-xs font-medium mb-3 ${getProviderColor(cert.issuer)}`} style={useFontStyle("mono")}>
                  {cert.issuer}
                </p>

                <div className="flex flex-wrap gap-1 mb-4 flex-1">
                  {cert.skills.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 bg-secondary text-muted-foreground rounded-sm"
                      style={useFontStyle("mono")}
                    >
                      {s}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-xs px-2 py-0.5 bg-secondary text-muted-foreground rounded-sm" style={useFontStyle("mono")}>
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline mt-auto"
                    style={useFontStyle("mono")}
                  >
                    <ExternalLink className="w-3 h-3" />
                    Verify Credential
                  </a>
                ) : cert.credentialId ? (
                  <p className="text-xs text-muted-foreground mt-auto truncate" style={useFontStyle("mono")}>
                    ID: {cert.credentialId}
                  </p>
                ) : null}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader label="06 — Education" title="Academic Background" />

          <div className="bg-card border border-border rounded-sm p-8 hover:border-primary/30 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3
                      className="text-xl font-bold text-foreground"
                      style={useFontStyle("display")}
                    >
                      {educationData.degree}
                    </h3>
                    <p className="text-primary text-sm font-semibold mt-1" style={useFontStyle("display")}>
                      {educationData.institution}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span
                      className="text-xs text-muted-foreground border border-border px-3 py-1 rounded-sm"
                      style={useFontStyle("mono")}
                    >
                      {educationData.dates}
                    </span>
                    <span
                      className="text-xs text-primary border border-primary/30 bg-primary/5 px-3 py-1 rounded-sm font-semibold"
                      style={useFontStyle("mono")}
                    >
                      GPA {educationData.gpa}
                    </span>
                  </div>
                </div>

                {educationData.location && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground" style={useFontStyle("mono")}>
                    <MapPin className="w-3 h-3" />
                    {educationData.location}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader label="07 — Contact" title="Let's Build Together" />

          <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">
            <div>
              <p
                className="text-xl text-foreground/70 leading-relaxed mb-6"
                style={useFontStyle("body")}
              >
                {profile.cta}
              </p>
              <div className="flex items-center gap-2 mb-10">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground" style={useFontStyle("mono")}>
                  {profile.availability}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-all"
                  style={useFontStyle("display")}
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-semibold rounded-sm hover:border-primary/50 hover:text-primary transition-all"
                  style={useFontStyle("display")}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-semibold rounded-sm hover:border-primary/50 hover:text-primary transition-all"
                  style={useFontStyle("display")}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={profile.resumeUrl}
                  download={profile.resumeFileName}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-semibold rounded-sm hover:border-primary/50 hover:text-primary transition-all"
                  style={useFontStyle("display")}
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </div>

            {/* Contact info card */}
            <div className="bg-card border border-border rounded-sm overflow-hidden">
              <div className="px-5 py-3 border-b border-border bg-secondary/50">
                <span className="text-xs text-muted-foreground" style={useFontStyle("mono")}>
                  contact.json
                </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-2">
                <p>
                  <span className="text-muted-foreground">"email":</span>{" "}
                  <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
                    "{profile.email}"
                  </a>
                </p>
                <p>
                  <span className="text-muted-foreground">"location":</span>{" "}
                  <span className="text-foreground/80">"{profile.location}"</span>
                </p>
                <p>
                  <span className="text-muted-foreground">"status":</span>{" "}
                  <span className="text-[#00e5a0]">"open_to_opportunities"</span>
                </p>
                <p>
                  <span className="text-muted-foreground">"response_time":</span>{" "}
                  <span className="text-foreground/80">"&lt;24 hours"</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground" style={useFontStyle("mono")}>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
