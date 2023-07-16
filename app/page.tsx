import Image from "next/image";
import Link from "next/link";

const HomePage: React.FC = () => {
  type Collection = {
    image: string;
    title: string;
    description: string;
    url: string;
  };

  const colections: Collection[] = [
    {
      title: "Green Coffee Beans",
      image: "/images/indian-spices-exporter-blog.jpg",
      description:
        "Lorem, ipsum. Atque porro quibusdam praesentium et eligendi itaque ea quidem dolorem hic! Aspernatur, architecto modi hic neque eligendi voluptatem impedit debitis ea omnis?",

      url: "#",
    },
    {
      title: "Green Coffee Beans",
      image: "/images/indian-spices-exporter-blog.jpg",
      description:
        "Lorem, ipsum. Atque porro quibusdam praesentium et eligendi itaque ea quidem dolorem hic! Aspernatur, architecto modi hic neque eligendi voluptatem impedit debitis ea omnis?",

      url: "#",
    },
    {
      title: "Green Coffee Beans",
      image: "/images/indian-spices-exporter-blog.jpg",
      description:
        "Lorem, ipsum. Atque porro quibusdam praesentium et eligendi itaque ea quidem dolorem hic! Aspernatur, architecto modi hic neque eligendi voluptatem impedit debitis ea omnis?",

      url: "#",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 py-2 relative z-10">
        <nav className="flex gap-4 items-center justify-between">
          <div className="w-48 h-16 relative">
            <Image
              src="/images/logo.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-4">
            <ul className="flex gap-4 items-center">
              <li>
                <Link href="#" className="">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Contacts
                </Link>
              </li>
            </ul>
            <button className="px-4 py-2 bg-black text-white rounded-lg font-bold">
              INQUIRE
            </button>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section id="hero" className="h-full relative">
          <div className="relative h-screen brightness-50">
            <Image
              src="/images/fair-trade-organic-coffee-top.jpeg"
              alt="hero"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
            <h1 className="font-bold text-5xl text-center text-white">
              Your Resource Partner
            </h1>
            <h2 className="font-semibold text-2xl text-center text-white mx-auto max-w-lg">
              We provide quality products, sourced from the best best prodecers
              worldwide.
            </h2>
            <div className="flex items-center justify-center gap-4">
              <button className="px-4 py-2 bg-white text-black rounded-lg font-bold">
                Learn More
              </button>
              <button className="px-4 py-2 bg-white/20 text-white rounded-lg font-bold">
                Contact Us
              </button>
            </div>
          </div>
        </section>
        <section className="px-4 py-16">
          <div>
            <ul className="grid grid-cols-3 gap-6 max-w-4xl w-full mx-auto">
              {colections.map((collection, index) => (
                <li
                  key={index}
                  className="rounded-lg overflow-hidden space-y-2 shadow-lg bg-white">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-4">
                    <h3 className="font-bold">{collection.title}</h3>
                    <p>{collection.description}</p>

                    <button className="px-4 py-2 bg-black text-white rounded-lg font-bold">
                      Learn More
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="bg-green-700 p-16 space-y-4">
          <h1 className="font-bold text-5xl text-center text-white">
            Who We ARE
          </h1>
          <h2 className="font-medium text-center text-white mx-auto max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            voluptatibus ipsa iure saepe facilis officia laboriosam quaerat
            quisquam, ex neque magni sunt excepturi facere voluptatum distinctio
            vel exercitationem velit optio! Minus obcaecati aliquam rem eos
            deleniti esse quidem asperiores tempore, enim suscipit porro.
            Voluptatibus, numquam. Delectus reiciendis commodi dicta veritatis,
            consectetur repellat ipsum, pariatur id soluta in, aspernatur
            architecto tempore.
          </h2>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
