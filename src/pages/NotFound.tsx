import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main className="section">
      <div className="container glass-card centered">
        <h1>404</h1>
        <p>The page you are looking for does not exist.</p>
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
