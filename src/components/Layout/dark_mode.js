import Header from '@/components/navigation/dark_mode/header';
import Footer from '@/components/navigation/dark_mode/footer';
import styles from '@/styles/Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        </div>
    );
    }