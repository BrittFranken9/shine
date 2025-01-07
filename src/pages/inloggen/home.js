import { useState } from 'react';
import { useRouter } from 'next/router'; // Import de useRouter hook
import Image from 'next/image';
import styles from '@/styles/inloggen/Login.module.css';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Initialiseer de router

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        router.push('/inloggen/inloggen'); // Verwijs naar de gewenste pagina, bijv. "/dashboard"
    };

    const handleGoogleLogin = () => {
        console.log('Google login triggered');
    };

    const handleFacebookLogin = () => {
        console.log('Facebook login triggered');
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
            <div className={styles.loginBox}>           
                <form onSubmit={handleSubmit} className={styles.form}>
                    <button type="submit" className={styles.button}>Inloggen</button>
                </form>
                <div className={styles.dividerContainer}>
                    <div className={styles.line}></div>
                        <span className={styles.divider}>Of meld je aan met</span>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.socialButtons}>
                    <button onClick={handleGoogleLogin} className={`${styles.button} ${styles.googleButton}`}>
                        <Image src="/icons/Google.svg" alt="Google Logo" width={16} height={16} className={styles.socialIcon} />
                        Google
                    </button>
                    <button onClick={handleFacebookLogin} className={`${styles.button} ${styles.facebookButton}`}>
                        <Image src="/icons/Facebook.svg" alt="Facebook Logo" width={16} height={16} className={styles.socialIcon} />
                        Facebook
                    </button>
                </div>
                <div className={styles.dividertwo}>Nog geen account?
                    <a href="/inloggen/aanmelden" className={styles.link}>Meld je nu aan</a>
                </div>
            </div>
        </div>
    );
}
