import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/uitleg/uitleg.module.css';

export default function Uitleg() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            image: '/Zelfzorg.svg',
            title: 'Shine Zelfzorg anders bekeken',
            gradientWord: 'Zelfzorg',
            description: 'Luna en Noa zijn er om je kort wegwijs te maken in Shine. Ze geven je een snelle blik op wat je kunt verwachten en hoe de app werkt.',
        },
        {
            image: '/Emoties.svg',
            title: 'Jouw emoties, jouw woorden, jouw groei',
            gradientWord: 'emoties',
        },
        {
            image: '/connecties.svg',
            title: 'Verbind met je psycholoog, ontdek jezelf door je emoties',
            gradientWord: 'psycholoog',
            description: 'Ontdek jezelf door je emoties beter te begrijpen. Deel deze inzichten met je psycholoog, zodat deze jou beter kan ondersteunen.',
        },
        {
            image: '/Triggers.svg',
            title: 'ontdek de triggers achter je emoties',
            gradientWord: 'triggers',
            description: 'Krijg inzicht in de emoties die je ervaart en ontdek de oorzaken ervan. Dit helpt je beter te begrijpen hoe jij je voelt en waarom.',
        },
    ];

    const handleNextClick = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            router.push('/uitleg/voorwaarden');
        }
    };

    const handleSkipClick = () => {
        router.push('/uitleg/voorwaarden');
    };

    const renderTitle = (title, gradientWord) => {
        return title.split(' ').map((word, index) => {
            // Maak beide woorden lowercase voor een niet-hoofdlettergevoelige vergelijking
            const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
            const cleanGradientWord = gradientWord.toLowerCase();

            if (cleanWord === cleanGradientWord) {
                return (
                    <span key={index} className={styles.gradientText}>
                        {word}
                    </span>
                );
            }
            return ` ${word} `;
        });
    };

    return (
        <div className={styles.container}>
            <button className={styles.skipButton} onClick={handleSkipClick}>
                Overslaan
            </button>
    
            {/* Afbeelding in het midden */}
            <div className={styles.image}>
                <Image
                    src={steps[currentStep].image}
                    alt={`Stap ${currentStep + 1}`}
                    width={400}
                    height={350}
                />
            </div>
    
            {/* Onderste content */}
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>
                    {renderTitle(steps[currentStep].title, steps[currentStep].gradientWord)}
                </h1>
                <p className={styles.description}>
                    {steps[currentStep].description}
                </p>
    
                <div className={styles.progressContainer}>
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.progressDot} ${
                                index === currentStep ? styles.activeDot : ''
                            }`}
                        />
                    ))}
                </div>
    
                <button className={styles.button} onClick={handleNextClick}>
                    Volgende
                </button>
            </div>
        </div>
    );
}
