import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <section id="hero">
        <h1>Environment Partners</h1>
        <div id="calltoaction">
          <p>Text Text Text</p>
          <a href="">
            <button>Plan Your Green Journey</button>
          </a>
        </div>
      </section>
      <section id="feautereddestinations">
        <div className="grid grid-cols-4">
          {/* Display a carousel or grid of destinations with high-quality images and concise descriptions. */}
        </div>
        <div>
          {/* Include icons or symbols indicating eco-friendly practices like wildlife conservation, renewable energy, or waste reduction. */}
        </div>
      </section>
      <section id="greentraveltips">
        <div id="engaging graphics"></div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
