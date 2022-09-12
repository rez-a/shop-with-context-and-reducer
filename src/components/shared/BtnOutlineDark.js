import React from 'react';

//styles
import styles from './BtnOutlineDark.module.css';

const BtnOutlineDark = ({ width, text }) => {
    return (
        <button className={`${styles.btnOutlineDark} ${width}`}>{text}</button>
    );
};

export default BtnOutlineDark;