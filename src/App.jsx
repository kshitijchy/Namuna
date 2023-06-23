import { useState } from 'react'
import reactLogo from './assets/react.svg'
import UserLayout from './User/Layout'
import UserAppBar from './User/Layout'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './User/Home/Home'
import About from './User/About/About'
import SingleBlog from './User/Blog/SingleBlog'
import AdminLayout from './Admin/Adminlayout'
import AdminBlogs from './Admin/Home/AdminBlogs'
import AddBlog from './Admin/Blog/Addblog'
import EditBlog from './Admin/Blog/EditBlog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog/:id" element={<SingleBlog />} />
        </Route>
        <Route path="/admin/" element={<AdminLayout />} >
        <Route path="home" element={<AdminBlogs />} />
        <Route path="add" element={<AddBlog />} />
        <Route path="edit/:id" element={<EditBlog />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
