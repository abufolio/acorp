import { useEffect, useState } from "react";
import Container from "./ui/Container";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy (active section detection)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        border-b border-slate-800/50 backdrop-blur-lg
        ${
          scrolled
            ? "bg-slate-950/90 shadow-lg shadow-black/20"
            : "bg-slate-950/60"
        }
      `}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-wide">
            ACorp
          </a>

          {/* Links */}
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`
                      relative text-sm font-medium transition-all duration-300
                      ${
                        isActive
                          ? "text-sky-400"
                          : "text-slate-400 hover:text-white"
                      }
                    `}
                  >
                    {link.label}

                    {/* Active underline */}
                    <span
                      className={`
                        absolute -bottom-2 left-0 h-0.5 w-full
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-sky-400 scale-x-100"
                            : "scale-x-0 bg-sky-400"
                        }
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
