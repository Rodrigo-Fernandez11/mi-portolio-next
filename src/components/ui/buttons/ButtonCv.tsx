import { FiDownload } from "react-icons/fi";

export function ButtonCv() {
  return (
    <a
      href="/Rodrigo-PF-FullStack.docx.pdf"
      download="Rodrigo-Pena-CV.pdf"
      className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
    >
      <FiDownload size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
      <span>Descargar CV</span>
    </a>
  );
}
