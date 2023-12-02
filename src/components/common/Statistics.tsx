export default function Statics () {
  const stats = [
    {
      data: "17+",
      desc: "Proyectos en GitHub y contribuciones",
    },
    {
      data: "100+",
      desc: "Tazas de cafe",
    },
    {
      data: "4",
      desc: "Satisfecho con el servicio entregados como Freelance",
    },
    {
      data: "30+",
      desc: "Eventos de la comunidad",
    },
  ];

  return (
    <section>
      <div className="relative z-40 max-w-screen-xl mx-auto">
        <div className="mt-4">
          <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
            {stats.map((item, idx) => (
              <li key={idx} className="sm:max-w-[15rem]">
                <h4 className="text-4xl text-white font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 text-gray-400 font-medium">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
