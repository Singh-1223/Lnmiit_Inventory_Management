
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import lnmiit from "../assets/lnmiit.jfif"
import { Stack } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-zinc-300  '>
      {/* <Navbar/> */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '20px' }}

      >
        <div className="flex flex-col justify-center h-[80vh] items-center mt-50">
          <h1 className='text-center text-teal-700 font-bold pb-10 text-[35px]'>WELL GOODS!</h1>
          <button className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 m-4 rounded" onClick={() => navigate('/adminlogin')}>Admin Login</button>
          <button className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/userlogin')}>User Login</button>
        </div>

        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-white w-[50%]">
          <img className="w-50 h-25 rounded-[12px] mx-auto" src={lnmiit} alt="" width="384" height="512" />
          
        </figure>

    
      </Stack>
      {/* <Footer/> */}
      <div className='border-2 border-red-400 mt-[-15] text-center'>
           <span className='font-bold'>NOTE : For testing purpose , LOGIN as USER with</span>
            <p> 
               <div>Username: <span className='font-bold text-red-500'>testuser</span> </div>
               <div>Password: <span className='font-bold text-red-500'>testuser</span></div>
            </p>
            <span className='font-bold text-center' >Give feedback in CONTACT US section</span>
         </div>
      
    </div>
  )
}

export default Home
