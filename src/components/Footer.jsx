import Container from "./ui/Container";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950/50">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          {/* LEFT */}
          <p className="text-sm text-slate-400">
            © {year} {personalInfo.name}. All rights reserved.
          </p>

          {/* CENTER */}
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-slate-400 hover:text-white">
              About
            </a>
            <a href="#projects" className="text-slate-400 hover:text-white">
              Projects
            </a>
            <a href="#contact" className="text-slate-400 hover:text-white">
              Contact
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex gap-4 text-sm">
            <a
              href={personalInfo.github}
              target="_blank"
              className="text-slate-400 hover:text-sky-400"
            >
              GitHub
            </a>

            <a
              href={personalInfo.telegram}
              target="_blank"
              className="text-slate-400 hover:text-sky-400"
            >
              Telegram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
