import Link from "next/link";

function ButtonCv() {
  return (
    <Link href="/pdf/cv-rodrigo.pdf" target="_blank" rel="noopener noreferrer">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full mt-8 block text-center">
        Download CV
      </button>
    </Link>
  );
}
export default ButtonCv;
