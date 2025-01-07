import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/inloggen/Aanmelden.module.css';

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter(); // Gebruik de useRouter-hook

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Wachtwoorden komen niet overeen.');
            return;
        }
        console.log({ name, email, password });
        // Navigeren naar de uitlegschermen
        router.push('/uitleg/zelfzorg'); // Vervang '/uitleg-scherm' door de juiste route
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
                            src="/icons/Account.svg" 
                            alt="Name" 
                            width={24} 
                            height={24} 
                            className={styles.icon} 
                        />
                        <input
                            type="text" 
                            placeholder="Naam" 
                            className={styles.input} 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <Image 
                            src="/icons/Mail.svg" 
                            alt="Email" 
                            width={24} 
                            height={24} 
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
                            src="/icons/wactwoord.svg" 
                            alt="Password" 
                            width={24} 
                            height={24} 
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
                    <div className={styles.inputGroup}>
                        <Image 
                            src="/icons/wactwoord.svg"
                            alt="Confirm Password" 
                            width={24} 
                            height={24} 
                            className={styles.icon} 
                        />
                        <input 
                            type="password" 
                            placeholder="Herhaal wachtwoord" 
                            className={styles.input} 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    
                </form>
                <button type="submit" className={styles.button}>Aanmelden</button>
                <div className={styles.divider}>
                    In plaats daarvan
                    <a href="/inloggen/inloggen" className={styles.link}>Inloggen</a>
                </div>
            </div>
        </div>
    );
}
