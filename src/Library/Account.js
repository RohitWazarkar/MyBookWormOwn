import React, { useState } from 'react';
import './Account.css'; // Import the CSS file

const Account = ({ user, onLogout, onTogglePremium }) => {
    const [isPremium, setIsPremium] = useState(user.isPremium);

    const togglePremium = () => {
        setIsPremium(!isPremium);
        onTogglePremium(!isPremium);
    };

    return (
        <div className="account">
            <h2>Account Details</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email Address:</strong> {user.email}</p>
            <p><strong>Phone Number:</strong> {user.phone}</p>
            <p><strong>Premium User:</strong><div className='isPremium'>{isPremium ? 'Yes' : 'No'}</div></p>

            <button onClick={onLogout}>Logout</button>
            <button onClick={togglePremium}>
                {isPremium ? 'Switch to Basic' : 'Switch to Premium'}
            </button>
        </div>
    );
};

// Define default user details
Account.defaultProps = {
    user: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        isPremium: true,
    },
};

export default Account;