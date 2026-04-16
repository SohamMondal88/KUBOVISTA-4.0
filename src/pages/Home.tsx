import { Link } from 'react-router-dom';
import { destinations, stats } from '../data/siteData';

export function HomePage() {
  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <span className="pill">Premium Travel Experience</span>
            <h1>Unique tours and aesthetic journeys for modern travelers.</h1>
            <p>
              Kubovista creates premium, fully-managed itineraries with handpicked stays, curated activities, and
              24/7 concierge support.
            </p>
            <div className="action-row">
              <Link className="btn btn-primary" to="/packages">
                Explore Packages
              </Link>
              <Link className="btn btn-outline" to="/contact">
                Plan My Trip
              </Link>
            </div>
          </div>
          <article className="glass-card lift">
            <img
              src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1400&q=80"
              alt="Scenic luxury travel"
            />
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-4">
          {stats.map((s) => (
            <article key={s.label} className="glass-card centered">
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <h2>Trending Destinations</h2>
          <Link to="/destinations">See all</Link>
        </div>
        <div className="container grid grid-3">
          {destinations.slice(0, 3).map((d) => (
            <article key={d.name} className="glass-card card">
              <img src={d.image} alt={d.name} />
              <div>
                <h3>{d.name}</h3>
                <p>{d.blurb}</p>
                <p className="price">From ${d.price.toLocaleString()}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
