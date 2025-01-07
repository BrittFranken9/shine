import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/inloggen/inloggen.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Zorg ervoor dat deze waarden correct zijn
            });
    
            if (!response.ok) {
                const message = await response.text();
                alert(message); // Toon de foutmelding van de server
                return;
            }
    
            alert('Succesvol ingelogd!');
        } catch (error) {
            console.error('Login error:', error);
            alert('Er is een fout opgetreden.');
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
