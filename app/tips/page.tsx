import Nav from "../components/nav/nav";
import Image from "next/image";

export default function Tips() {
  const tips = [
    {
      tipTitle: "tip",
      tipDescription: "Tip Description",
      tipImage: "/Image",
    },
    {
      tipTitle: "tip",
      tipDescription: "Tip Description",
      tipImage: "/Image",
    },
    {
      tipTitle: "tip",
      tipDescription: "Tip Description",
      tipImage: "/Image",
    },
    {
      tipTitle: "tip",
      tipDescription: "Tip Description",
      tipImage: "/Image",
    },
  ];

  return (
    <>
      <section>
        <header>
          <Nav />
        </header>
        <div>
          <div>
            Provide information on the environmental impact of travel and the
            importance of making sustainable choices.
          </div>
          <div>Statistics and infographics</div>
        </div>
      </section>
      <section>
        <header>
          <h1>Tips</h1>
        </header>
        <div>User Inputs a tip</div>
        <div>
          {tips.map((tip, tips) => {
            return (
              <div key={tips}>
                <div className="flex">
                  <Image
                    alt="Tips"
                    height={100}
                    width={100}
                    src={tip.tipImage}
                  />
                  <div>
                    <h1>{tip.tipTitle}</h1>
                    <p>{tip.tipDescription}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
