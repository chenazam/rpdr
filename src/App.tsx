import './App.css';
import { contestants } from './data/contestants';

export default function App() {
  return (
    <main className="app">
      <h1>RPDR Simulator</h1>
      <p>Starter cast</p>

      <ul className="contestant-list">
        {contestants.map(contestant => (
          <li key={contestant.id} className="contestant-card">
            <h2>{contestant.name}</h2>
            <p>Archetype: {contestant.archetype ?? 'None'}</p>
            <p>Volatility: {contestant.volatility}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
