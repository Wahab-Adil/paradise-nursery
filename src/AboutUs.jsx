export default function AboutUs() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="about-copy">
        <p className="eyebrow">A little more green, every day</p>
        <h2 id="about-heading">Plants make a place feel like home.</h2>
        <p>
          Paradise Nursery is an online plant shop for people who want to bring
          more greenery into everyday life. We offer healthy houseplants for
          homes of every size, from an easy-care first plant to a leafy new
          favourite.
        </p>
        <p>
          Our aim is to make choosing and caring for a plant feel simple, so you
          can spend less time wondering where to start and more time enjoying
          the calm and character a little green can bring.
        </p>
      </div>
      <div className="about-points" aria-label="Our approach">
        <div className="about-point">
          <span className="about-point-number">01</span>
          <div>
            <h3>Healthy plants</h3>
            <p>Thoughtfully selected plants, ready to settle into your home.</p>
          </div>
        </div>
        <div className="about-point">
          <span className="about-point-number">02</span>
          <div>
            <h3>Easy to choose</h3>
            <p>Clear details and friendly favourites for every kind of space.</p>
          </div>
        </div>
        <div className="about-point">
          <span className="about-point-number">03</span>
          <div>
            <h3>Room to grow</h3>
            <p>A simple way to build a home you love coming back to.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
