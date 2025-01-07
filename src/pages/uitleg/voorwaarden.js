import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '@/styles/uitleg/voorwaarden.module.css';

export default function Voorwaarden() {
    const router = useRouter();
    const [isAtBottom, setIsAtBottom] = useState(false);

    const handleAccept = () => {
        if (isAtBottom) {
            router.push('/uitleg/voorkeuren'); // Vervang '/next-page' door de gewenste route
        }
    };

    const handleDecline = () => {
        router.push('/inloggen/home'); // Vervang '/decline-page' door de gewenste route
    };

    const handleScroll = () => {
        const content = document.querySelector(`.${styles.content}`);
        if (content) {
            const isBottom = content.scrollHeight - content.scrollTop === content.clientHeight;
            setIsAtBottom(isBottom);
        }
    };

    useEffect(() => {
        const content = document.querySelector(`.${styles.content}`);
        if (content) {
            content.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (content) {
                content.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className={styles.container}>
            {/* Weiger-knop bovenaan */}
            <button className={styles.declineButton} onClick={handleDecline}>
                Weiger
            </button>

            {/* Content */}
            <div className={styles.content}>
                <h1 className={styles.title}>Voorwaarden en Privacy</h1>
                <section className={styles.section}>
                    <h3>Algemeen</h3>
                    <p>
                        Jouw privacy is belangrijk voor ons. We verzamelen alleen de gegevens die
                        nodig zijn voor het gebruik van de app en voor jouw ondersteuning in de
                        therapie. We delen deze gegevens alleen met je psycholoog als jij daar
                        expliciet toestemming voor geeft.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Uw gegevens</h2>
                    <p>
                        We vragen je om je stemming bij te houden en andere gegevens in te vullen
                        die nodig zijn voor jouw voortgang. We gebruiken deze alleen om je beter te
                        begrijpen en je ervaring te verbeteren.
                        <br />
                        <br />
                        Je hebt altijd de controle over wat je deelt. Je kunt je gegevens inzien,
                        aanpassen of verwijderen wanneer je dat wilt. Als je besluit de app te
                        stoppen, worden je gegevens verwijderd, tenzij we ze wettelijk moeten
                        bewaren.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Veiligheid</h2>
                    <p>
                        We zorgen ervoor dat je gegevens veilig zijn en beschermen ze tegen verlies
                        of misbruik. Alleen jij en je psycholoog hebben toegang tot je gegevens, maar
                        alleen als jij dat wilt.
                        <br />
                        <br />
                        We verkopen je gegevens niet aan derden. We gebruiken ze uitsluitend om je
                        te ondersteunen in je therapie.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Wijzigingen in deze voorwaarden</h2>
                    <p>
                        Als we deze voorwaarden aanpassen, laten we het je weten. Door de app te
                        blijven gebruiken, ga je akkoord met de nieuwe voorwaarden.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Contact</h2>
                    <p>
                        Als je vragen hebt over je gegevens of deze voorwaarden, neem gerust contact
                        met ons op via de app of per e-mail.
                    </p>
                </section>
            </div>

            {/* Accepteer-knop onderaan */}
            <div className={styles.acceptContainer}>
                <button
                    className={styles.acceptButton}
                    onClick={handleAccept}
                    style={{
                        backgroundColor: isAtBottom ? '#fe5351' : '#F2F2F2',
                        cursor: isAtBottom ? 'pointer' : 'not-allowed',
                    }}
                    disabled={!isAtBottom}
                >
                    Accepteer
                </button>
            </div>
        </div>
    );
}
