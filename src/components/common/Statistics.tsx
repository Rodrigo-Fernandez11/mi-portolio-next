interface Statistic {
  data: number;
  desc: string;
}

const Statistics: React.FC = () => {
  const stats: Statistic[] = [
    {
      data: 20,
      desc: "Proyectos en GitHub y contribuciones",
    },
    {
      data: 2,
      desc: "Hackatón",
    },
    {
      data: 4,
      desc: "Clientes satisfechos con el servicio entregado como Freelance",
    },
    {
      data: 20,
      desc: "Eventos de la comunidad IT y Blockchain",
    },
  ];

  return (
    <>
      <section className="max-w-screen-xl mx-auto mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ data, desc }, idx) => (
            <li key={idx} className="max-w-[15rem]">
              <h4 className="text-4xl font-semibold text-white">{data}</h4>
              <p className="mt-3 text-gray-400 font-medium">{desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Statistics;
