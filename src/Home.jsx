import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the D3 Barplot Practice App!</p>
      <nav>
        <ul>
          <li>
            <Link to="/barplot">Go to Barplot</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
