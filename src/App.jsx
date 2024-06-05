import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Classes from './pages/Classes'
import  { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Trainer from './pages/Trainer'
import Schedule from './pages/Schedule'
import Bodybuilding from './pages/Bodybuilding'
import Martialarts from './pages/Martialarts'
import Crossfit from './pages/Crossfit'
import Karate from './pages/Karate'
import Yoga from './pages/Yoga'
import Fitness from './pages/Fitness'
import Login from './pages/Login'
import Register from './pages/Register'
import Payment from './pages/Payment'
import Plan2 from './pages/Plan2'
import Plan3 from './pages/Plan3'


function App() {
 

  return (
    <>
      <div className=' App'>
        <Header />
     
        <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/about'  element={<About />}/>
          <Route path='/contact'  element={<ContactUs/>}/>
          <Route path='/classes'  element={<Classes />}/>
          <Route path='/martialarts'  element={<Martialarts />}/>
          <Route path='/crossfit'  element={<Crossfit />}/>
          <Route path='/karate'  element={<Karate />}/>
          <Route path='/yoga'  element={<Yoga />}/>
          <Route path='/bodybuilding'  element={<Bodybuilding />}/>
          <Route path='/fitness'  element={<Fitness />}/>
          <Route path='/schedule'  element={<Schedule />}/>
          <Route path='/trainer'  element={<Trainer />}/>
          <Route path='/login'  element={<Login />}/>
          <Route path='/register'  element={<Register />}/>
          <Route path='/payment'  element={<Payment />}/>
          <Route path='/plan2'  element={<Plan2 />}/>
          <Route path='/plan3'  element={<Plan3 />}/>

          
          
          

        </Routes>
           <Footer />
       
       </div>
    </>
  )
}

export default App
