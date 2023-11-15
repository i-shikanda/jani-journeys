import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="hero" className="relative">
        <div className="absolute w-full h-full -z-10">
          <div className="relative h-full w-full">
            <Image
              objectFit="cover"
              objectPosition="center"
              alt="Background"
              layout="fill"
              src="/home.jpg"
              quality={100}
            />
          </div>
        </div>
        <header>
          <Nav />
        </header>
        <div className="flex justify-between space-x-4">
          <div id="calltoaction">
            <h1 className="font-bold text-2xl uppercase">
              Embark on <br /> Eco-Friendly Journeys with <br />{" "}
              <span className="text-green-600">Jani Journey</span> <br /> Your
              Environment Partners.
            </h1>
            <a href="">
              <button className="px-4 py-2 rounded-sm bg-green-00 button font-medium">
                Plan Your Green Journey
              </button>
            </a>
          </div>
          <div>Social Media Icons</div>
        </div>
      </section>
      <section id="feautereddestinations">
        <div className="grid grid-cols-4">
          <a href="">
            <div>
              <Image
                src="/destination"
                alt="Destination"
                width={100}
                height={100}
              />
              <div>
                <h1>Destination Name</h1>
                <p>Unique Eco-Friendly Feutures</p>
              </div>
            </div>
          </a>
          <a href="">
            <div>
              <Image
                src="/destination"
                alt="Destination"
                width={100}
                height={100}
              />
              <div>
                <h1>Destination Name</h1>
                <p>Unique Eco-Friendly Feutures</p>
              </div>
            </div>
          </a>
          <a href="">
            <div>
              <Image
                src="/destination"
                alt="Destination"
                width={100}
                height={100}
              />
              <div>
                <h1>Destination Name</h1>
                <p>Unique Eco-Friendly Feutures</p>
              </div>
            </div>
          </a>
          <a href="">
            <div>
              <Image
                src="/destination"
                alt="Destination"
                width={100}
                height={100}
              />
              <div>
                <h1>Destination Name</h1>
                <p>Unique Eco-Friendly Feutures</p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <div>Eco-Certified Accomodations</div>
          <div>Renewable Energy Usage</div>
          <div>Local Community Engagement</div>
        </div>
      </section>
      <section id="greentraveltips">
        <div id="engaging graphics">
          <div>
            <Image src="/image" width={100} height={100} alt="Eco Tip" />
            <div>
              <h1>Reusable Water Bottle</h1>
            </div>{" "}
          </div>
          <div>
            <Image src="/image" width={100} height={100} alt="Eco Tip" />
            <div>
              <h1>Reusable Water Bottle</h1>
            </div>
          </div>
          <div>
            <Image src="/image" width={100} height={100} alt="Eco Tip" />
            <div>
              <h1>Reusable Water Bottle</h1>
            </div>
          </div>
          <div>
            <Image src="/image" width={100} height={100} alt="Eco Tip" />
            <div>
              <h1>Reusable Water Bottle</h1>
            </div>{" "}
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
