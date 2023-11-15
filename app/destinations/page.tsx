import Image from "next/image";
import Nav from "../components/nav/nav";
export default function Destinations() {
  const destinations = [
    {
      destinationName: "Utali Beach",
      image: "/utali.jpg",
      destinationDescription: "A Breaf Description of Utali",
    },
    {
      destinationName: "Utali kBeach",
      image: "/utali.jpg",
      destinationDescription: "A Breaf Description of Utali",
    },
    {
      destinationName: "Utalif Beach",
      image: "/utali.jpg",
      destinationDescription: "A Breaf Description of Utali",
    },
    {
      destinationName: "Utalji Beach",
      image: "/utali.jpg",
      destinationDescription: "A Breaf Description of Utali",
    },
    {
      destinationName: "Utadli Beach",
      image: "/utali.jpg",
      destinationDescription: "A Breaf Description of Utali",
    },
    {
      destinationName: "Utdali Beach",
      image: "/utali.jpg",
      destinationDescription: "A Breaf Description of Utali",
    },
  ];

  return (
    <section>
      <header>
        <Nav />
      </header>
      <div id="interactivemap">Map</div>
      <div className="grid grid-cols-4">
        {destinations.map((utali, desti) => {
          return (
            <div key={desti}>
              <Image
                src={utali.image}
                alt="Destination"
                width={100}
                height={100}
              />
              <div>
                <h1>{utali.destinationName}</h1>
                <p>{utali.destinationDescription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
