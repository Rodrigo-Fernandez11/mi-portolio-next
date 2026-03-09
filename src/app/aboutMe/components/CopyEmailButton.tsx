'use client';

import { useState } from 'react';
import { FiMail, FiCheck } from 'react-icons/fi';

export const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = 'rodrip602@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
      aria-label="Copiar email al portapapeles"
    >
      {copied ? (
        <>
          <FiCheck size={18} className="sm:w-5 sm:h-5" />
          ¡Email copiado!
        </>
      ) : (
        <>
          <FiMail size={18} className="sm:w-5 sm:h-5" />
          Copiar email
        </>
      )}
    </button>
  );
};
