import React from 'react';
import "../styles/contacts.css"

const Contacts = (props) => {
    return (
        <div className='contacts_page'>
            <h1 className='contacts_header'>{`<Let's Chat/>`}</h1>
            <button className='contact_button' onClick={() => window.open('https://calendly.com/acaoy2/30min', '_blank')}>
                Schedule a meeting
            </button>
        </div>
    ); 
};

export default Contacts;