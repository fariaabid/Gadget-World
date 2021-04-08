import React from 'react';

const Footer = () => {
    return (
        <div className="text-center my-5 py-5">
            <h2> &copy; All rights reserved by Gadget World, {new Date().getFullYear()}</h2>
        </div>
    );
};

export default Footer;