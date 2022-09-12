import React from 'react';

//components
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import BackToTopButton from '../components/shared/BackToTop';
import ShopFeatures from '../components/shared/ShopFeatures';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <BackToTopButton />
            <ShopFeatures />
            <Footer />
        </>
    );
};

export default Layout;