import React, { useEffect, useState } from 'react';

export const Bio = () => {
    const [displayedText, setDisplayedText] = useState("");
    const bioText = [
        "Hi, I'm Lahzami Med Hosni, a dedicated Full-Stack JavaScript Developer with a rich background in business management. My journey from managing administrative tasks to solving technical challenges as a developer has been driven by my passion for problem-solving, innovation, and continuous learning.",
        "With a strong command of technologies like React, Node.js, and JavaScript, I thrive on creating solutions that merge efficiency with user-friendly designs. I enjoy collaborating within dynamic teams and always aim to contribute to high-quality, impactful projects.",
        "I'm constantly refining my skills and currently exploring the exciting world of TypeScript. Whether it's building efficient web apps, working on logistics and distribution systems like Tnature, or managing my own business ventures, I believe in the power of technology to transform ideas into reality.",
        "When I'm not coding, you'll probably find me leveling up in the latest video game or brainstorming new business strategies. My values of integrity, innovation, and a dedication to lifelong learning keep me motivated as I work toward mastering full-stack development and leading in dynamic environments.",
        "Key Highlights:",
        "Technical Skills: JavaScript, React.js, Node.js, MySQL, MongoDB, HTML, CSS",
        "Projects: Tnature (React Native app for logistics & distribution with map & chat features)",
        "Experience: Transitioned from business management to full-stack development, with expertise in building both frontend and backend solutions",
        "Certifications: Fullstack JavaScript Web Developer - RebootKamp (April 2024 - September 2024)"
    ];

    useEffect(() => {
        let index = 0;
        let wordIndex = 0;
        const interval = setInterval(() => {
            if (index < bioText.length) {
                const words = bioText[index].split(" ");
                if (wordIndex < words.length) {
                    setDisplayedText((prev) => prev + " " + words[wordIndex]);
                    wordIndex++;
                } else {
                    wordIndex = 0;
                    index++;
                    setDisplayedText((prev) => prev + "\n\n");
                }
            } else {
                clearInterval(interval);
            }
        }, 300); // Adjust the interval time as needed
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ marginTop:'100px',padding: '20px', maxWidth: '600px', margin: 'auto', whiteSpace: 'pre-wrap', opacity: 1, transition: 'opacity 2s', fontFamily: 'Noto Sans JP', lineHeight: '1.6', wordSpacing: '0.1em' }}>
            {displayedText}
        </div>
    );
};
