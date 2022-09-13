import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const navLinksData = [
    {
        page: 'Products',
        pageUrl: '/products',
        links: [
            { label: 'Payments', icon: <FaCreditCard />, url: '/products/payments' },

        ],
    },
    {
        page: 'Solutions',
        pageUrl: '/solutions',
        links: [
            { label: 'Ecommerce', icon: <FaCreditCard />, url: '/solutions/ecommerce' },
        ],
    },
    {
        page: 'Developers',
        pageUrl: '/developers',
        links: [
            { label: 'Documentation', icon: <FaBook />, url: '/developers/documentation' },
        ],
    },
    {
        page: 'Resources',
        pageUrl: '/resources',
        links: [
            { label: 'Support Center', icon: <FaBriefcase />, url: '/resources/support-center' },
        ],
    },
    {
        page: 'Pricing',
        pageUrl: '/pricing',
    },
];

export default navLinksData;