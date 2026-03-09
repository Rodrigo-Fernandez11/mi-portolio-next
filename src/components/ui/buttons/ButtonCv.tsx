import { FiDownload } from "react-icons/fi";

export function ButtonCv() {
  return (
    <a
      href="https://docs.google.com/document/d/1tIF19r3aDEVitlewaPi0m43JQUfO3uJK/edit?usp=sharing&ouid=110751141316493419425&rtpof=true&sd=true"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
    >
      <FiDownload size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
      <span>Descargar CV</span>
    </a>
  );
}
