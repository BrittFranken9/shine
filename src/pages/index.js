import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            router.push('/inloggen/home');
        }, 2000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className={styles.centerContent}>
            <div className={styles.afbeeldingContainer}>
                <Image 
                    src="/Logo.svg" 
                    alt="Achtergrond" 
                    width={300} 
                    height={740} 
                    className={styles.afbeelding} 
                    priority
                />
            </div>
        </div>
    );
}