import Section from "./ui/Section";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="space-y-4">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          GitHub
        </a>

        <a
          href={personalInfo.telegram}
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          Telegram
        </a>

        <a href={`mailto:${personalInfo.email}`} className="block">
          {personalInfo.email}
        </a>
      </div>
    </Section>
  );
}
