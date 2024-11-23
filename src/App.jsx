import Template from './Pages/Templates-page/AddNewTemplates'
import Dashboard from './Pages/Templates-page/AllTemplates'
import AllBlogs from './Pages/Blogs-page/AllBlogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from './Pages/Blogs-page/AddNewBlogs'
import AllTemplates from './Pages/Templates-page/AllTemplates'
import AddNewTemplates from './Pages/Templates-page/AddNewTemplates'
import Pricing from './Pages/Pricing-page/Pricing'
import EditTemplates from './Pages/Templates-page/EditTemplate'
import AddNewBlogs from './Pages/Blogs-page/AddNewBlogs'
import User from './Pages/User-page/User'
import Template4 from './Pages/Templates-page/Template4'
import InputData from './Pages/Templates-page/EditTemplate4'
import Template5 from './Pages/Templates-page/Template5'
import EditTemplate5 from './Pages/Templates-page/EditTemplate5'
import Template6 from './Pages/Templates-page/Template6'
import EditTemplate6 from './Pages/Templates-page/EditTemplate6'
import Template7 from './Pages/Templates-page/Template7'
import EditTemplate7 from './Pages/Templates-page/EditTemplate7'
import Template8 from './Pages/Templates-page/Template8'
import EditTemplate8 from './Pages/Templates-page/EditTemplate8'
import HackedPage from './Pages/Hacked-page/HackedPage'



function App() {

  return (
    <>
    {/* <Dashboard/> */}
    {/* <Template/> */}
    
    <BrowserRouter>
    <Routes>
   
    <Route exact path='/' element={<InputData/>}/>
    <Route exact path='/template8' element={<Template8/>}/>
    <Route exact path='/editTemplate7' element={<EditTemplate7/>} />
    <Route exact path='/template7' element={<Template7/>} />

    <Route exact path='/editTemplate6' element={<EditTemplate6/>} />

      <Route exact path='/template6' element={<Template6/>} />
      <Route exact path='/editTemplate4' element={<InputData/>} />
      <Route exact path='/allTemplates' element={<AllTemplates/>} />
      <Route exact path='/addnewblogs' element={<AddNewBlogs/>} />
      <Route exact path='/allblogs' element={<AllBlogs/>} />
      <Route exact path='/pricing' element={<Pricing/>} />
      <Route exact path='/user' element={<User/>} />
      
      <Route exact path='/addTemplates' element={<AddNewTemplates/>} />
      <Route path="/edit/:_id" element={<EditTemplates/>} />
      <Route path="/template4" element={<Template4/>} />
      <Route path="/template5" element={<Template5/>} />
      <Route path="/editTemplate5" element={<EditTemplate5/>} />
     
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
