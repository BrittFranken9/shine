import Link from 'next/link';
import styles from '@/styles/light_mode/home.module.css';

export default function DarkModeHome() {
    return (
        <div className={styles.lightBackground}>
            <main>
                <h1>Welkom bij Light Mode Home</h1>
            </main>
            <footer className={styles.footer}>
                <Link href="/light_mode/tools" passHref>
                    <button className={styles.button}>Tools</button>
                </Link>
                <Link href="/light_mode/opdrachten" passHref>
                    <button className={styles.button}>Opdrachten</button>
                </Link>
            </footer>
        </div>
    );
}