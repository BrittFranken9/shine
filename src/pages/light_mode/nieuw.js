import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/light_mode/nieuw.module.css';

export default function FeelingsPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        color: '',
        location: '',
        company: '',
        notes: '',
        date: new Date().toISOString(),
    });

    const [suggestedLocations, setSuggestedLocations] = useState({});
    const [suggestedPeople, setSuggestedPeople] = useState({});

    const router = useRouter();

    useEffect(() => {
        // Load suggestions from localStorage on initial load
        const existingEntries = JSON.parse(localStorage.getItem('entries')) || [];
        const locationSuggestions = {};
        const peopleSuggestions = {};

        existingEntries.forEach(entry => {
            if (entry.location) {
                locationSuggestions[entry.location] = (locationSuggestions[entry.location] || 0) + 1;
            }
            if (entry.company) {
                peopleSuggestions[entry.company] = (peopleSuggestions[entry.company] || 0) + 1;
            }
        });

        setSuggestedLocations(locationSuggestions);
        setSuggestedPeople(peopleSuggestions);
    }, []);

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleNext = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleSuggestionClick = (field, value) => {
        handleInputChange(field, value);
    };

    const handleSubmit = () => {
        const existingEntries = JSON.parse(localStorage.getItem('entries')) || [];
        const updatedEntries = [...existingEntries, formData];
        localStorage.setItem('entries', JSON.stringify(updatedEntries));

        if (formData.location) {
            updateSuggestions(
                formData.location,
                setSuggestedLocations,
                suggestedLocations
            );
        }

        if (formData.company) {
            updateSuggestions(
                formData.company,
                setSuggestedPeople,
                suggestedPeople
            );
        }

        router.push('/light_mode/statistieken');
    };

    const updateSuggestions = (item, setState, state) => {
        if (!item) return; // Ensure item is not empty
        const updated = { ...state };
        updated[item] = (updated[item] || 0) + 1;

        const sorted = Object.entries(updated)
            .sort((a, b) => b[1] - a[1]) // Sort by usage frequency
            .slice(0, 6); // Max 6 items

        setState(Object.fromEntries(sorted));
    };

    const steps = [
        {
            title: 'Hoe voel jij je vandaag?',
            content: (
                <div className={styles.colorsContainer}>
                    {[
                        { color: '#51BCFE', label: 'Somber', svg: '/vormenL/somber.svg' },
                        { color: '#B97C96', label: 'Ontspannen', svg: '/vormenL/ontspannen.svg' },
                        { color: '#FE5351', label: 'Geïrriteerd', svg: '/vormenL/geïrriteerd.svg' },
                        { color: '#FEBA51', label: 'Vrolijk', svg: '/vormenL/vrolijk.svg' },
                    ].map(({ color, label, svg }) => (
                        <button
                            key={color}
                            className={`${styles.colorButton} ${formData.color === color ? styles.active : ''}`}
                            onClick={() => handleInputChange('color', color)}
                        >
                            <div className={styles.colorContent}>
                                <img
                                    src={formData.color === color ? svg.replace('.svg', '.active.svg') : svg}
                                    alt={label}
                                    className={styles.svgImage}
                                />
                                <span className={styles.colorLabel}>{label}</span>
                            </div>
                        </button>
                    ))}
                </div>
            ),
        },
        {
            title: 'Waar ben je en met wie?',
            content: (
                <div className={styles.form}>
    <label className={styles.label}>
        Waar ben je?
        </label>
        <input
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            required
            className={styles.input}
        />
    
    <div className={styles.suggestionsContainer}>
        {Object.entries(suggestedLocations).slice(0, 6).map(([location], index) => (
            <button
                key={index}
                className={styles.suggestionButton}
                onClick={() => handleSuggestionClick('location', location)}
            >
                {location}
            </button>
        ))}
    </div>
    <label className={styles.label}>
        Met wie ben je?
    </label>
    <input
        type="text"
        value={formData.company}
        onChange={(e) => handleInputChange('company', e.target.value)}
        required
        className={styles.input}
    />
    <div className={styles.suggestionsContainer}>
        {Object.entries(suggestedPeople).slice(0, 6).map(([person], index) => (
            <button
                key={index}
                className={styles.suggestionButton}
                onClick={() => handleSuggestionClick('company', person)}
            >
                {person}
            </button>
        ))}
    </div>
</div>
            ),
        },
        {
            title: 'Wil je nog iets toevoegen?',
            content: (
                <textarea
                    placeholder="Voeg hier een notitie toe (optioneel)"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    className={`${styles.textarea} ${styles.notesTextarea}`}
                />
            ),
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{steps[currentStep].title}</h1>
            </div>
            <div className={styles.mainContent}>{steps[currentStep].content}</div>
            <div className={styles.footer}>
                {currentStep > 0 && (
                    <button className={styles.backButton} onClick={handleBack}>
                        Terug
                    </button>
                )}
                {currentStep < steps.length - 1 ? (
                    <button className={styles.button} onClick={handleNext}>
                        Volgende
                    </button>
                ) : (
                    <button className={styles.button} onClick={handleSubmit}>
                        Opslaan
                    </button>
                )}
            </div>
        </div>
    );
}