import React from 'react';
import BookMark from '../bookmark/bookMark';
import PropTypes from 'prop-types';

const BookMarks = ({bookMarks, readingTime}) => {
   
    return (
        <div className='md:w-1/3 mt-4'>
            <div className='flex flex-col gap-4'>
            <div className='p-3 bg-[#6047EC1A] border-2 border-[#6047EC] text-[#6047EC] rounded-lg'>
                <h3>Spend time on read: {readingTime} min</h3>
            </div>
            <div className='flex flex-col gap-4 bg-[#1111110D] rounded-lg p-4 justify-center'>
                <p className='text-2xl font-bold text-start'>Bookmarks Blogs: {bookMarks.length}</p>
                <div className=' flex flex-col gap-3'>
                    {
                        bookMarks.map(blog => <BookMark key= {blog.id} blog = {blog}></BookMark>)
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

BookMarks.PropTypes = {
    readingTime: PropTypes.number.isRequired
}

export default BookMarks;