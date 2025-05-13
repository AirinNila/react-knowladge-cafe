
import './App.css'
import Blogs from './component/blogs/blogs'
import BookMarks from './component/bookMarks/bookMarks'
import Header from './component/header/header'

function App() {
 

  return (
    <>
     
    <Header></Header>
    <div className='md:flex'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
    </div>
    
    </>
  )
}

export default App
