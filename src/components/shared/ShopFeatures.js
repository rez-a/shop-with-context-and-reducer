import React from 'react';

//components
import Feature from './Feature';

//icons
import { FaShoppingBasket, FaRegCreditCard, FaShieldAlt, FaHeadphonesAlt } from "react-icons/fa";

const ShopFeatures = () => {
    return (
        <div className='border-top'>
            <div className='container my-3'>
                <div className="row align-items-center justify-content-between">
                    <Feature icon={<FaShoppingBasket />} title='FREE SHIPPING' desc='Capped at $10 per order' />
                    <Feature icon={<FaRegCreditCard />} title='SECURE PAYMENTS' desc='Up to 6 months installments' />
                    <Feature icon={<FaShieldAlt />} title='15-DAYS RETURNS' desc='Shop with fully confidence' />
                    <Feature icon={<FaHeadphonesAlt />} title='24X7 FULLY SUPPORT' desc='Get friendly support' />
                </div>
            </div>
        </div>
    );
};

export default ShopFeatures;