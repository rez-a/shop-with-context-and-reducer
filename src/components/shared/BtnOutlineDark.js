import React from 'react';

//styles
import styles from './BtnOutlineDark.module.css';

const BtnOutlineDark = ({ width }) => {
    return (
        <button className={`${styles.btnOutlineDark} ${width}`}>Checkout Now</button>
    );
};

export default BtnOutlineDark;