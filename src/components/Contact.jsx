import Section from "./ui/Section";
import { personalInfo } from "../data/portfolioData";
import { motion } from "framer-motion";

const contacts = [
  {
    label: "GitHub",
    value: personalInfo.github,
    href: personalInfo.github,
  },
  {
    label: "Telegram",
    value: "@abdulaziz_ergawev",
    href: personalInfo.telegram,
  },
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {contacts.map((contact) => (
          <motion.a
            key={contact.label}
            variants={item}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/40
              p-6
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-sky-500/60
            "
          >
            {/* glow effect */}
            <div className="absolute -inset-1 opacity-0 blur-2xl transition group-hover:opacity-100 bg-sky-500/10" />

            {/* content */}
            <div className="relative">
              <p className="text-sm text-slate-400">{contact.label}</p>

              <h3 className="mt-2 text-lg font-semibold text-white break-all">
                {contact.value}
              </h3>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
