
import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/blogs'
import BookMarks from './component/bookMarks/bookMarks'
import Header from './component/header/header'

function App() {
  const [bookMarks , setBookMark] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleReadingTime = time => {
   // console.log(time)
    const newReadingTime = parseInt(readingTime) + parseInt(time)
    setReadingTime(newReadingTime)
  }

  const handleBookMark = blog => {
    //console.log(blog)
    const newBookmark = [...bookMarks, blog]
    setBookMark(newBookmark)
  }

  
  
  return (
    <>
     
    <Header></Header>
    <div className='md:flex container mx-auto'>
      <Blogs handleBookMark={handleBookMark} handleReadingTime={handleReadingTime}></Blogs>
      <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
    </div>
    
    </>
  )
}

export default App
