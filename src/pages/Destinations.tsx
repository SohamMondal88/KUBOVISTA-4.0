import { useMemo, useState } from 'react';
import { destinations } from '../data/siteData';

const regions = ['All', 'Europe', 'Asia', 'Middle East', 'Africa'] as const;

export function DestinationsPage() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState<(typeof regions)[number]>('All');

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const regionPass = region === 'All' || d.region === region;
      const textPass = `${d.name} ${d.blurb}`.toLowerCase().includes(query.toLowerCase());
      return regionPass && textPass;
    });
  }, [query, region]);

  return (
    <main className="section">
      <div className="container">
        <h1>Premium Destinations</h1>
        <p>Filter and discover destinations by region and interests.</p>

        <div className="toolbar">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search destination..." />
          <div className="chips">
            {regions.map((r) => (
              <button key={r} className={region === r ? 'chip active' : 'chip'} onClick={() => setRegion(r)}>
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-3">
          {filtered.map((d) => (
            <article key={d.name} className="glass-card card">
              <img src={d.image} alt={d.name} />
              <div>
                <span className="pill">{d.region}</span>
                <h3>{d.name}</h3>
                <p>{d.blurb}</p>
                <p>{d.days} days • ${d.price.toLocaleString()}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
