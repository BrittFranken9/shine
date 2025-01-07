import { useState, useEffect } from 'react';
import styles from '@/styles/navigation/footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
    const savedIcon = localStorage.getItem('activeIcon');
    if (savedIcon) {
      setActiveIcon(savedIcon);
    }
  }, []);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
    localStorage.setItem('activeIcon', iconName);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
      <Link href="/dark_mode/home" passHref className={`${styles.footerLink} ${activeIcon === 'home' && styles.active}`} onClick={() => handleIconClick('home')}>
  <Image src={activeIcon === 'home' ? "/home-active.svg" : "/home.svg"} alt="Home" className={styles.footerIcon} width={300} height={40}/>
</Link>
<Link href="/dark_mode/connecties" passHref className={`${styles.footerLink} ${activeIcon === 'zoeken' && styles.active}`} onClick={() => handleIconClick('connecties')}>
  <Image src={activeIcon === 'connecties' ? "/connecties-active.svg" : "/connecties.svg"} alt="Zoeken" className={styles.footerIcon} width={300} height={40}/>
</Link>
<Link href="/dark_mode/nieuw" passHref className={`${styles.footerLink} ${activeIcon === 'nieuw' && styles.active}`} onClick={() => handleIconClick('nieuw')}>
  <Image src={activeIcon === 'nieuw' ? "/nieuw-active.svg" : "/nieuw.svg"} alt="nieuw" className={styles.footerIcon} width={300} height={40}/>
</Link>
<Link href="/dark_mode/statistieken" passHref className={`${styles.footerLink} ${activeIcon === 'statistieken' && styles.active}`} onClick={() => handleIconClick('statistieken')}>
  <Image src={activeIcon === 'statistieken' ? "/statistieken-active.svg" : "/statistieken.svg"} alt="statistieken" className={styles.footerIconMap} width={300} height={40}/>
</Link>
<Link href="/dark_mode/profiel" passHref className={`${styles.footerLink} ${activeIcon === 'profiel' && styles.active}`} onClick={() => handleIconClick('profiel')}>
  <Image src={activeIcon === 'profiel' ? "/profiel-active.svg" : "/profiel.svg"} alt="profiel" className={styles.footerIconMap} width={300} height={40}/>
</Link>
      </div>
    </footer>
  );
}