import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([])

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogsData(data))
    },[])

    return (
        <div className='md:w-2/3'>
            <h2>Blogs: {blogsData.length}</h2>
        </div>
    );
};

export default Blogs;