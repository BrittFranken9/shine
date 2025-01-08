import Link from 'next/link';
import styles from '@/styles/dark_mode/home.module.css';

export default function DarkModeHome() {
    return (
        <div className={styles.darkBackground}>
            <main>
                <p className={styles.title}>Welkom bij dark Mode Home</p>
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