import React from 'react';
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='container mx-auto'>
        <div className='flex justify-between items-center border-b-2 p-2 '>
              <h1 className=' text-3xl font-semibold'>Knowladge cafe</h1>
              <img src={profile} alt="" />
        </div>
        </header>
    );
};

export default Header;