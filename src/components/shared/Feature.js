import React from 'react';

//styles
import styles from './Feature.module.css';

const Feature = ({ icon, title, desc }) => {
    return (
        <div className={`col-lg-3 col-md-6 col-12 d-flex align-items-center justify-content-center my-3 ${styles.feature}`}>
            {icon}
            <div className='ms-2'>
                <p className='mb-0 fw-bold'>{title}</p>
                <p className='mb-0 text-muted'>{desc}</p>
            </div>
        </div>
    );
};

export default Feature;