import { FormEvent, useState } from 'react';

export function ContactPage() {
  const [message, setMessage] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();

    if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage('Please provide a valid name and email.');
      return;
    }

    setMessage(`Thanks ${name}! Our travel architect will contact you soon.`);
    e.currentTarget.reset();
  };

  return (
    <main className="section">
      <div className="container">
        <h1>Contact Our Travel Architects</h1>
        <form className="glass-card contact-form" onSubmit={onSubmit}>
          <input name="name" placeholder="Full name" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="destination" placeholder="Preferred destination" required />
          <textarea name="notes" rows={4} placeholder="Travel preferences, dates, budget..."></textarea>
          <button className="btn btn-primary" type="submit">
            Send Request
          </button>
          <p>{message}</p>
        </form>
      </div>
    </main>
  );
}
