import Image from "next/image";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";

export default function Partnership() {
  const partners = [
    {
      image: "/Logo",
      name: "Partner",
      link: "partners.com",
    },
    {
      image: "/Logo",
      name: "Partner",
      link: "partners.com",
    },
    {
      image: "/Logo",
      name: "Partner",
      link: "partners.com",
    },
    {
      image: "/Logo",
      name: "Partner",
      link: "partners.com",
    },
  ];
  return (
    <>
      <section>
        <header>
          <Nav />
        </header>
        <div>Our Patners towards a greener community</div>
        <div className="grid grid-cols-4">
          {partners.map((part, ners) => {
            return (
              <div key={ners}>
                <a href={part.link}>
                  <div>
                    <Image
                      src={part.image}
                      width={100}
                      height={100}
                      alt="Partner"
                    />
                    <h1>{part.name}</h1>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex justify-between items-center">
        <div>
          <a href="">
            <button>Become a Partner</button>
          </a>
        </div>
        <div>
          <h1>Steps to Partnership</h1>
          <p>
            1. Blabla Bla <br />
            2. B;aanan <br />
            3. Belle <br />
          </p>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
