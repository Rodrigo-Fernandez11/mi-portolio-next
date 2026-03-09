interface Statistic {
  value: string;
  label: string;
  note: string;
}

export const Statistics: React.FC = () => {
  const stats: Statistic[] = [
    {
      value: "15+",
      label: "Proyectos Full Stack finalizados",
      note: "Apps reales con backend, base de datos y deploy.",
    },
    {
      value: "40%",
      label: "Ingenieria Informatica",
      note: "Base tecnica solida en progreso academico.",
    },
    {
      value: "12",
      label: "Eventos y meetups IT",
      note: "Aprendizaje continuo y networking activo.",
    },
  ];

  return (
    <section className="w-full">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
        Mis estadisticas clave
      </h3>
      <p className="mb-5 text-base text-gray-400">Impacto medible y crecimiento profesional.</p>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map(({ value, label, note }, idx) => (
          <li
            key={label}
            className="min-w-0 p-4 transition-all duration-300 border border-gray-800 animate-fade-up rounded-xl bg-black/50 hover:-translate-y-1 hover:border-gray-600 hover:shadow-lg"
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            <p className="text-3xl font-semibold leading-none text-white">{value}</p>
            <h4 className="mt-2 text-sm font-semibold leading-snug text-gray-200">{label}</h4>
            <p className="mt-2 text-xs leading-relaxed text-gray-500">{note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
