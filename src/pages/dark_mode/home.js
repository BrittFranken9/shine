import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/dark_mode/home.module.css';

export default function DarkModeHome() {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        // Ophalen van opgeslagen kleuren uit localStorage
        const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
        const extractedColors = savedEntries.map((entry) => entry.color);
        setColors(extractedColors);
    }, []);

    return (
        <div className={styles.darkBackground}>
            <main>
                <p className={styles.title}>Welkom bij dark Mode Home</p>
                {/* Sectie voor kleurenweergave */}
                <div className={styles.colorsContainer}>
                    <h2>Opgeslagen kleuren</h2>
                    <div className={styles.colorsGrid}>
                        {colors.length > 0 ? (
                            colors.map((color, index) => (
                                <div
                                    key={index}
                                    className={styles.colorBlock}
                                    style={{ backgroundColor: color }}
                                />
                            ))
                        ) : (
                            <p>Geen kleuren opgeslagen.</p>
                        )}
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <Link href="/dark_mode/tools" passHref>
                    <button className={styles.button}>Tools</button>
                </Link>
                <Link href="/dark_mode/opdrachten" passHref>
                    <button className={styles.button}>Opdrachten</button>
                </Link>
            </footer>
        </div>
    );
}
