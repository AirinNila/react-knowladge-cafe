import React from 'react';

const BookMark = ({blog}) => {
    return (
        <div className='bg-white rounded-md p-3'>
            <h3 className='text-xl font-bold text-[#111111] '>{blog.title}</h3>
        </div>
    );
};

export default BookMark;