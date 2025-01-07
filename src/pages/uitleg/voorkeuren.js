import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/uitleg/voorkeuren.module.css';

export default function CustomizationStep() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [savedData, setSavedData] = useState({ color: '', goal: '', theme: 'light' });
    const [showOtherReason, setShowOtherReason] = useState(false);

    const handleSave = (key, value) => {
        setSavedData((prevData) => ({ ...prevData, [key]: value }));
    };

    const handleNextClick = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleSkipClick = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBackClick = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const steps = [
        {
            title: 'WELKOM',
            subtitle: 'bij shine',
            description: 'Neem de tijd om de app naar jouw voorkeuren in te richten. Ontdek rustig alle mogelijkheden en stel alles in op jouw manier.',
            content: (
                <div className={styles.imageContainer}>
                    <img
                        src="/path/to/your/image.jpg" // Pas dit pad aan naar de locatie van je afbeelding
                        alt="Preview van de Shine-app"
                        className={styles.appImage}
                    />
                </div>
            ),
        },
        {
            title: 'DOELEN',
            subtitle: 'wat zijn jouw doelen?',
            description: 'Voordat we verder gaan, wil ik graag weten wat je doelen zijn en of je momenteel in behandeling bent bij een psycholoog.',
            content: (
                <div className={styles.goalOptions}>
                    {['Ik wil me wat beter in mijn vel voelen.', 
                      'De psycholoog heeft het me aanbevolen en wil het wel eens proberen.', 
                      'Ik wil betere contacten kunnen leggen.', 
                      'Ik heb een andere reden...'].map((goal, index) => (
                        <button
                            key={index}
                            className={`${styles.goalButton} ${savedData.goal === goal ? styles.selectedGoalButton : ''}`}
                            onClick={() => {
                                handleSave('goal', goal);
                                if (goal === 'Ik heb een andere reden...') setShowOtherReason(true);
                                else setShowOtherReason(false);
                            }}
                        >
                            {goal}
                        </button>
                    ))}
                    {showOtherReason && (
                        <div className={styles.inputGroup}>
                            <textarea
                                placeholder="Typ hier jouw reden..."
                                className={styles.textarea}
                                value={savedData.otherReason || ''}
                                onChange={(e) => handleSave('otherReason', e.target.value)}
                            />
                        </div>
                    )}
                </div>
            ),
        },
        {
            title: 'KLEUREN',
            subtitle: 'Welke kleur heeft jou emotie?',
            description: 'Druk op volgende om verder te gaan naar de app.',
            content: (
                <div className={styles.colorsContainer}>
                    {[
                        {
                            color: '#51BCFE',
                            title: 'Somber',
                            description: 'Deze emotiecategorie wordt gebruikt wanneer je in rust bent en je je negatief voelt.',
                        },
                        {
                            color: '#B97C96',
                            title: 'Ontspannen',
                            description: 'Deze emotiecategorie wordt gebruikt wanneer je in rust bent en je je positief voelt.',
                        },
                        {
                            color: '#FE5351',
                            title: 'Geïrriteerd',
                            description: 'Deze emotiecategorie wordt gebruikt wanneer je hoge energie hebt, maar met een negatieve lading.',
                        },
                        {
                            color: '#FEBA51',
                            title: 'Vrolijk',
                            description: 'Deze emotiecategorie wordt gebruikt wanneer je hoge energie en een positieve stemming hebt.',
                        },
                    ].map((item, index) => (
                        <div key={index} className={styles.colorItem}>
                            <h3
                                className={styles.colorTitle}
                                style={{ color: item.color }}
                            >
                                <span
                                    className={styles.colorDot}
                                    style={{ backgroundColor: item.color }}
                                ></span>
                                {item.title}
                            </h3>
                            <p className={styles.colorDescription}>{item.description}</p>
                        </div>
                    ))}
                </div>
            ),
        },
        {
            title: 'VOORKEUREN',
            subtitle: 'Hoe ziet jouw app eruit?',
            content: (
                <div className={styles.themeSwitcher}>
                    <div
                        className={`${styles.themeOption} ${savedData.theme === 'light' ? styles.activeTheme : ''}`}
                        onClick={() => handleSave('theme', 'light')}
                    >
                        <img
                            src="/dark_mode.png" // Vervang door het pad naar je light mode afbeelding
                            alt="Light Mode"
                            className={styles.themeImage}
                        />
                        <p className={styles.themeLabel}>Light Mode</p>
                        <div
                            className={`${styles.themeDot} ${savedData.theme === 'light' ? styles.activeDot : ''}`}
                        />
                    </div>
                    <div
                        className={`${styles.themeOption} ${savedData.theme === 'dark' ? styles.activeTheme : ''}`}
                        onClick={() => handleSave('theme', 'dark')}
                    >
                        <img
                            src="/light_mode.png" // Vervang door het pad naar je dark mode afbeelding
                            alt="Dark Mode"
                            className={styles.themeImage}
                        />
                        <p className={styles.themeLabel}>Dark Mode</p>
                        <div
                            className={`${styles.themeDot} ${savedData.theme === 'dark' ? styles.activeDot : ''}`}
                        />
                    </div>
                </div>
            ),
        },
        
    ];

    return (
        <div className={styles.container}>
            {/* Terug-knop linksboven */}
            {currentStep > 0 && (
                <button className={styles.backButton} onClick={handleBackClick}>
                    ← Terug
                </button>
            )}

            {/* Titel en ondertitel bovenaan */}
            <div className={styles.header}>
                <h1 className={styles.title}>{steps[currentStep].title}</h1>
                <h2 className={styles.subtitle}>{steps[currentStep].subtitle}</h2>
                <p className={styles.description}>{steps[currentStep].description}</p>
            </div>

            {/* Dynamische content in het midden */}
            <div className={styles.contentContainer}>
                {steps[currentStep].content}
            </div>

            {/* Voortgang en knoppen onderaan */}
            <div className={styles.footer}>
                <div className={styles.progressContainer}>
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.progressDot} ${index === currentStep ? styles.activeDot : ''}`}
                        />
                    ))}
                </div>
                <button className={styles.button} onClick={handleNextClick}>
                    Volgende
                </button>
                <button className={styles.skipButton} onClick={handleSkipClick}>
                    Sla deze stap over
                </button>
            </div>
        </div>
    );
}
