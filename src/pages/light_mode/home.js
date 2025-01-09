import { useEffect, useState } from 'react';
import styles from '@/styles/light_mode/home.module.css';
import Link from 'next/link';

export default function LightModeHome() {
    const [colors, setColors] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Ophalen van opgeslagen kleuren uit localStorage
        const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
        const extractedColors = savedEntries
            .map((entry) => entry.color)
            .filter((color) => isValidColor(color)); // Filter op geldige kleuren
        setColors(extractedColors);

        if (extractedColors.length === 0) {
            setIsAnimating(true); // Start animatie als er geen kleuren zijn
        } else {
            setIsAnimating(false);
        }
    }, []);

    const isValidColor = (color) => {
        if (!color) return false;
        const s = new Option().style;
        s.color = color;
        return s.color !== '';
    };

    const gradient = colors.length
        ? `linear-gradient(to right, ${colors.join(', ')})`
        : '#cccccc';

    return (
        <div className={styles.lightBackground}>
            <main>
                <p className={styles.title}>Welkom bij Light Mode Home</p>

                {/* SVG met dynamische gradient */}
                <div
                    className={`${styles.svgContainer} ${
                        isAnimating ? styles.rotating : ''
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 300"
                        className={styles.shape}
                    >
                        {/* Vervang deze path met de path uit jouw SVG */}
                        <path
                            d="M12.2517 91.4846C10.6222 106.149 16.6097 114.328 21.8109 115.996C49.5239 124.886 66.6989 139.005 77.267 156.376C87.5333 173.252 90.8431 192.114 93.1048 208.743C93.4894 211.571 93.8437 214.314 94.1878 216.978C95.9758 230.82 97.4867 242.517 101.518 252.739C105.873 263.78 113.074 272.611 128.193 278.173C161.347 290.368 195.382 282.056 215.726 265.82C225.865 257.728 231.838 248.31 233.469 239.366C235.018 230.878 232.957 221.322 224.004 211.47C211.227 197.411 205.053 182.841 204.33 168.098C203.619 153.605 208.244 140.316 214.536 128.734C220.805 117.196 229.143 106.616 236.716 97.4747C238.531 95.2837 240.278 93.2023 241.945 91.2147C247.563 84.5197 252.288 78.889 255.739 73.7188C265.308 59.3868 270.777 45.779 269.911 35.6808C269.524 31.1602 267.872 27.2668 264.3 23.7997C260.519 20.131 253.927 16.3221 242.689 13.5885C232.157 11.0267 224.465 11.822 218.289 14.1356C211.909 16.5256 206.125 20.9166 200.068 27.1891C195.456 31.9654 191.223 37.2246 186.532 43.055C184.87 45.12 183.151 47.2566 181.336 49.4688C174.686 57.5769 167.077 66.265 157.749 73.4743C146.074 82.498 133.786 83.3716 122.306 80.4714C112.673 78.038 102.989 72.7495 94.5289 68.1299C93.8044 67.7342 93.0888 67.3434 92.383 66.9598C72.9867 56.417 56.7103 48.8404 37.4028 57.1972C21.7845 63.9572 13.7482 78.0164 12.2517 91.4846ZM18.1454 127.423C-8.3695 118.917 -7.69088 63.6391 32.6362 46.1845C58.6607 34.9204 80.4531 46.7937 99.965 57.4245C118.247 67.3853 134.527 76.2553 150.411 63.9795C160.673 56.0485 168.902 45.8202 176.901 35.8783C194.496 14.0085 210.976 -6.47545 245.525 1.92854C295.78 14.153 285.452 50.8267 265.72 80.3819C261.867 86.1527 256.557 92.4781 250.839 99.2888C227.273 127.359 196.784 163.676 232.884 203.4C277.744 252.762 198.507 316.824 124.05 289.435C89.752 276.818 86.1037 248.352 82.2311 218.135C77.6967 182.754 72.8546 144.973 18.1454 127.423Z"
                            fill="url(#gradient)"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                {colors.length > 0 ? (
                                    colors.map((color, index) => (
                                        <stop
                                            key={index}
                                            offset={`${(index / (colors.length - 1)) * 100}%`}
                                            stopColor={color}
                                        />
                                    ))
                                ) : (
                                    <stop offset="0%" stopColor="#cccccc" />
                                )}
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </main>
            <footer className={styles.footer}>
                <Link href="/dark_mode/tools" passHref>
                    <button className={styles.button}>Tools</button>
                </Link>
                <Link href="/dark_mode/opdrachten" passHref>
                    <button className={styles.button}>Opdrachten</button>
                </Link>
            </footer>
        </div>
    );
}
