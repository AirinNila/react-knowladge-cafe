import React from 'react';
import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa'

const Blog = ({blog, handleBookMark}) => {
    //console.log(handleBookMark)
    const {cover,author, title, author_img, posted_date, reading_time, hashtags} = blog;

    return (
        <div>
            <div className='flex flex-col gap-4 border-b-2 p-3'>
                <img src={cover} alt="" className='rounded-lg'/>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <img src={author_img} alt="" className='rounded-full' />
                        <div className='flex flex-col gap-2'>
                            <p>{author}</p>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-2'><p>{reading_time} nin read </p>
                        <button onClick={() => handleBookMark(blog)}>
                        <FaBookmark></FaBookmark>
                        </button>
                    </div>
                </div>
                <h3 className='md:text-3xl'>{title}</h3>
                <p>{hashtags}</p>
                <div>
                <button className='btn'>Mark as Read</button>
                </div>
            
            </div>
        </div>
    );
};


Blog.propTypes = {
    Blog: PropTypes.object.isRequired
}
export default Blog;