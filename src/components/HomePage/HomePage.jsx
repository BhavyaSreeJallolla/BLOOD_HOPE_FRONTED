// src/components/HomePage/HomePage.jsx

import React from 'react';
import styles from './HomePage.module.css'; // Import CSS module

const HomePage = () => {
    console.log("HomePage component is rendering");

    const quotes = [
        "Every donation matters. Every donor is a hero.",
        "You don’t have to be a doctor to save lives—just give blood.",
        "Blood donation is a simple act that can make a big difference.",
        "Be a blood donor. It’s a great feeling. Save life.",
                    "Your blood could be the lifeline for someone in need.",
    ];

    const images = [
        'https://twopackage.com/wp-content/uploads/2021/11/Blood-Donation-Flyer-Template-Free-Download-1st-Wonderful-Design.jpg',
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/world-blood-donor-day-design-template-4eef437756094781a7876dbe2f9f0928_screen.jpg?ts=1624979803',
        'https://th.bing.com/th/id/OIP.Cf-_w7ZyVGGSyACXgyEMUAHaJl?rs=1&pid=ImgDetMain',
        'https://static.vecteezy.com/system/resources/previews/002/530/919/original/save-lives-by-donating-your-blood-poster-free-vector.jpg',
    ];

    return (
        <div className={styles.homepage}>
            <header>
                <h2>WELCOME TO BLOOD HOPE</h2>
            </header>
            <section className={styles.quotes}>
                <h2>BE A HUMAN</h2>
                <ul>
                    {quotes.map((quote, index) => (
                        <li key={index}>{quote}</li>
                    ))}
                </ul>
            </section>
            <section className={styles.imageGallery}>
                <h2>THINK......</h2>
                <div className={styles.images}>
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Gallery ${index + 1}`} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
