import React from 'react';

//styles
import styles from './BtnDark.module.css';

const BtnDark = ({ width, text }) => {
    return (
        <button className={`${styles.btnDark} ${width}`}>{text}</button>
    );
};

export default BtnDark;