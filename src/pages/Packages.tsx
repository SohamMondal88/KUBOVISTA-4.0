import { FormEvent, useState } from 'react';

const tiers = [
  { label: 'Essential', value: 130, perks: '4-star stays, shared transfers, guided city tour' },
  { label: 'Explorer Plus', value: 210, perks: 'Premium activities, private transfers, priority support' },
  { label: 'Signature Elite', value: 390, perks: '5-star+, concierge, private guide, VIP perks' }
];

export function PackagesPage() {
  const [estimate, setEstimate] = useState<number | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const tier = Number(form.get('tier'));
    const travelers = Number(form.get('travelers'));
    const nights = Number(form.get('nights'));
    const insurance = form.get('insurance') ? 120 : 0;
    setEstimate(tier * travelers * nights + insurance);
  };

  return (
    <main className="section">
      <div className="container">
        <h1>Premium Package Plans</h1>
        <div className="grid grid-3">
          {tiers.map((tier) => (
            <article key={tier.label} className="glass-card">
              <h3>{tier.label}</h3>
              <p className="price">${tier.value}/person/night</p>
              <p>{tier.perks}</p>
            </article>
          ))}
        </div>

        <section className="section estimator">
          <h2>Cost Estimator</h2>
          <form className="estimate-form" onSubmit={onSubmit}>
            <select name="tier" defaultValue={210}>
              {tiers.map((tier) => (
                <option key={tier.label} value={tier.value}>
                  {tier.label} (${tier.value})
                </option>
              ))}
            </select>
            <input type="number" name="travelers" min={1} defaultValue={2} />
            <input type="number" name="nights" min={1} defaultValue={5} />
            <label>
              <input type="checkbox" name="insurance" /> Add insurance ($120)
            </label>
            <button className="btn btn-primary" type="submit">
              Calculate
            </button>
          </form>
          {estimate !== null && <p className="price">Estimated Total: ${estimate.toLocaleString()}</p>}
        </section>
      </div>
    </main>
  );
}
