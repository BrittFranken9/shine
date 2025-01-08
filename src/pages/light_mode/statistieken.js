import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function EntriesPage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    setEntries(savedEntries);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Jouw opgeslagen invoer</h1>
      <Link href="/light_mode/nieuw">Terug naar invoer</Link>
      <ul>
        {entries.map((entry, index) => (
          <li key={index} style={{ backgroundColor: entry.color, padding: '10px', margin: '10px 0' }}>
            <strong>{new Date(entry.date).toLocaleString()}</strong>
            <p>Locatie: {entry.location}</p>
            <p>Gevoel: {entry.feeling}</p>
            <p>Kleur: {entry.color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
