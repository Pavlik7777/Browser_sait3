import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Page2 from './Pages/Menu/menu'
import Header from './Header/header'
import Page1 from './Pages/Home/Home'
import Page3 from './Pages/About_us/about_us'
export default function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' index element ={<Page1/>}/>
          <Route path='/Page2' element ={<Page2/>}/> 
          <Route path='/Page3' element ={<Page3/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


