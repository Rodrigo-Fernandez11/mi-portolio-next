import posts  from "@/Data/blogData"
import Image from "next/image";


export default function Blog (){
  

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Blog</h1>
        <p className="mt-3 ">
          Blogs that are loved by the community. Updated every hour.
        </p>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <a href={items.href}>
              <Image
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full h-48 rounded-t-md"
                width={400}
                height={400}
              />
              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                <div className="flex-none w-10 h-10 rounded-full">
                  <Image
                    src={items.authorLogo}
                    className="w-full h-full rounded-full"
                    alt={items.authorName}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="ml-3">
                  <span className="block">
                    {items.authorName}
                  </span>
                  <span className="block text-gray-400 text-sm">
                    {items.date}
                  </span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl ">{items.title}</h3>
                <p className=" text-sm mt-1">{items.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
