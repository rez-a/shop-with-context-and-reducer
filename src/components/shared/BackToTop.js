import React, { useEffect, useState } from 'react';

//styles
import styles from './BackToTop.module.css';

//icons
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.document.addEventListener('scroll', () => setScroll(document.documentElement.scrollTop))
    }, [])
    const goToTop = () => document.documentElement.scrollTop = 0;
    return (

        <button onClick={goToTop} className={scroll > 300 ? `${styles.backToTop} ${styles.show}` : `${styles.backToTop}`} >
            <FaArrowUp />
        </button>

    );
};

export default BackToTopButton;