import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/inloggen/inloggen.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Hardcoded gebruikersgegevens
        const hardcodedEmail = "demo@example.com";
        const hardcodedPassword = "password123";
    
        // Controleer de ingevoerde gegevens
        if (email === hardcodedEmail && password === hardcodedPassword) {
            alert('Succesvol ingelogd!');
            // Optioneel: Routeer naar een andere pagina
            router.push('/uitleg/zelfzorg'); // Vervang '/dashboard' door de gewenste route
        } else {
            alert('Onjuiste inloggegevens, probeer opnieuw.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image 
                    src="/Logo.svg" 
                    alt="Logo" 
                    width={200} 
                    height={200} 
                    className={styles.logo} 
                />
            </div>
            <div className={styles.inputContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <Image 
                            src="/icons/Mail.svg" 
                            alt="Email" 
                            width={20} 
                            height={20} 
                            className={styles.icon} 
                        />
                        <input
                            type="email" 
                            placeholder="E-mailadres" 
                            className={styles.input} 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <Image 
                            src="/icons/Wactwoord.svg" 
                            alt="Password" 
                            width={20} 
                            height={20} 
                            className={styles.icon} 
                        />
                        <input 
                            type="password" 
                            placeholder="Wachtwoord" 
                            className={styles.input} 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className={styles.button}>Inloggen</button>
                </form>
                <div className={styles.divider}>
                    In plaats daarvan
                    <a href="/inloggen/aanmelden" className={styles.link}>Aanmelden</a>
                </div>
            </div>
        </div>
    );
}
