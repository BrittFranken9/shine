import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/navigation/header.module.css';

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <nav className={`${styles.navbar} ${!visible ? styles.hidden : ''}`}>
            <div className={styles.logo}>
                <Link href="/dark_mode/home">
                    <Image src="/Logo.svg" alt="Logo" width={40} height={40} />
                </Link>
            </div>
            <div className={styles.rightLink}>
                <Link href="/dark_mode/meldingen">
                    <Image src="/meldingen.svg" alt="Another Icon" width={30} height={20} />
                </Link>
                <Link href="/dark_mode/instellingen">
                    <Image src="/instellingen.svg" alt="Another Icon" width={30} height={20} />
                </Link>
            </div>
            
        </nav>
    );
}