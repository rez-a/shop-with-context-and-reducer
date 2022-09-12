import React from 'react';

//style
import styles from './Category.module.css';

const Category = ({ category }) => {
    return (
        <div className={styles.category}>
            {category}
        </div>
    );
};

export default Category;