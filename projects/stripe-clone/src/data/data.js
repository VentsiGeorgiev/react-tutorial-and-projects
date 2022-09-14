import { FaCarrot } from 'react-icons/fa';
import { MdOutlinePayments, MdPayment, MdPayments, MdDeveloperMode } from 'react-icons/md';
import { AiOutlineShoppingCart, } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';
import { HiTemplate } from 'react-icons/hi';
import { FaPhoneSquare, FaPlusSquare, FaReceipt, FaGripLines, FaShoppingBasket } from 'react-icons/fa';



import React from 'react';
const navLinksData = [
    {
        page: 'Products',
        pageUrl: '/products',
        links: [
            { label: 'Payments', icon: <MdOutlinePayments className='link-icon' />, url: '/products/payments' },
            { label: 'Checkout', icon: <MdPayments className='link-icon' />, url: '/products/checkout' },
            { label: 'Elements', icon: <MdPayment className='link-icon' />, url: '/products/elements' },

        ],
    },
    {
        page: 'Solutions',
        pageUrl: '/solutions',
        links: [
            { label: 'Ecommerce', icon: <AiOutlineShoppingCart className='link-icon' />, url: '/solutions/ecommerce' },
            { label: 'SaaS', icon: <BiRefresh className='link-icon' />, url: '/solutions/saas' },
        ],
    },
    {
        page: 'Developers',
        pageUrl: '/developers',
        links: [
            { label: 'Prebuilt checkout', icon: <MdDeveloperMode className='link-icon' />, url: '/developers/prebuilt-checkout' },
            { label: 'Libraries and SDKs', icon: <HiTemplate className='link-icon' />, url: '/developers/documentation' },
            { label: 'Plugins', icon: <FaCarrot className='link-icon' />, url: '/developers/documentation' },
        ],
    },
    {
        page: 'Resources',
        pageUrl: '/resources',
        links: [
            { label: 'Support Center', icon: <FaPhoneSquare className='link-icon' />, url: '/resources/support-center' },
            { label: 'Support Plans', icon: <FaPlusSquare className='link-icon' />, url: '/resources/support-plans' },
            { label: 'Guides ', icon: <FaReceipt className='link-icon' />, url: '/resources/guides' },
            { label: 'Customer Stories  ', icon: <FaGripLines className='link-icon' />, url: '/resources/customer-stories ' },
            { label: 'Contact Sales', icon: <FaShoppingBasket className='link-icon' />, url: '/resources/contact-sales  ' },
        ],
    },
];

export default navLinksData;