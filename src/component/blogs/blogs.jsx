import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([])

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogsData(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Blogs;