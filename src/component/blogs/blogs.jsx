import React, { useEffect, useState } from 'react';
import Blog from '../blog/blog';

const Blogs = ({handleBookMark}) => {
    
    const [blogsData, setBlogsData] = useState([])

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogsData(data))
    },[])

    return (
        <div className='md:w-2/3'>
            
            <div className='flex flex-col gap-6'>
            {
                blogsData.map(blog => 
                <Blog 
                key={blog.id}
                handleBookMark={handleBookMark} 
                blog={blog}
                >
                
                </Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;