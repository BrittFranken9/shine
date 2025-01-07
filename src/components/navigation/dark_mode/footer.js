import styles from '@/styles/navigation/dark_mode/footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      {/* Wit kader achter de footer */}
      <div className={styles.footerBackground}></div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Link href="/dark_mode/home" passHref>
            <div className={styles.footerItem}>
              <Image
                src="/icons/home.svg"
                alt="Home"
                className={`${styles.footerIcon} ${styles.homeIcon}`}
                width={40}
                height={40}
              />
              <span className={`${styles.footerLabel} ${styles.homeLabel}`}>Home</span>
            </div>
          </Link>
          <Link href="/dark_mode/connecties" passHref>
            <div className={styles.footerItem}>
              <Image
                src="/icons/connecties.svg"
                alt="Connecties"
                className={`${styles.footerIcon} ${styles.connectiesIcon}`}
                width={40}
                height={40}
              />
              <span className={`${styles.footerLabel} ${styles.connectiesLabel}`}>Connecties</span>
            </div>
          </Link>
          <Link href="/dark_mode/nieuw" passHref>
            <div className={`${styles.footerItem} ${styles.middle}`}>
              <Image
                src="/icons/nieuwB.svg"
                alt="Nieuw"
                className={`${styles.footerIcon} ${styles.nieuwIcon}`}
                width={60} // Middelste groter
                height={60}
              />
              <span className={`${styles.footerLabel} ${styles.nieuwLabel}`}>Nieuw</span>
            </div>
          </Link>
          <Link href="/dark_mode/statistieken" passHref>
            <div className={styles.footerItem}>
              <Image
                src="/icons/statistieken.svg"
                alt="Statistieken"
                className={`${styles.footerIcon} ${styles.statistiekenIcon}`}
                width={40}
                height={40}
              />
              <span className={`${styles.footerLabel} ${styles.statistiekenLabel}`}>Statistieken</span>
            </div>
          </Link>
          <Link href="/dark_mode/profiel" passHref>
            <div className={styles.footerItem}>
              <Image
                src="/icons/profiel.svg"
                alt="Profiel"
                className={`${styles.footerIcon} ${styles.profielIcon}`}
                width={40}
                height={40}
              />
              <span className={`${styles.footerLabel} ${styles.profielLabel}`}>Profiel</span>
            </div>
          </Link>
        </div>
      </footer>
    </>
  );
}
