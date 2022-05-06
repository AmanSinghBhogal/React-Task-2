import React from 'react';
import './ProfilePic.css';

const ProfilePic = ({link}) => {
    
    return (
        <div className='ProfilePic__Container'>
            <img src={link} alt="Ops"/>   
        </div>
    );
};

export default ProfilePic;