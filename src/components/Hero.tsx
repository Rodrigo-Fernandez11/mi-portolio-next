import Image from "next/image";
import perfil from "../../public/images/foto-perfil.jpg";

export function Hero() {
  return (
    <>
        <div className='bg-gray-800 text-gray-100 h-screen p-10'>
          <h2 className="text-4xl font-bold my-10">Hola mi nombre es rodrigo peña</h2>
          <p>soy un desarrolador Full Stack</p>
          <p>blochaind developer</p>
          <Image
          src={perfil}
          alt="foto perfil rodrigo peña"
          width={300}
          height={300}
          className="rounded-full float-right mr-20"
        />
        </div>
    </>
  );
}
