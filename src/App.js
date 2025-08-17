
import './App.css';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import InsTructTor from './pages/Instructor'; 
import Student from './pages/Student';
import Login from './pages/Login';
import OTP from './pages/Otp';
function App() {
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route path="/instructtor" element={<InsTructTor />}/>
           <Route path="/student" element={<Student />}/>
           <Route path="/login" element={<Login />}/>
            <Route path="/otp/:phone" element={<OTP />}/>
          {/* <Route path="booking" element={<Booking />} /> */}
          {/* <Route path="testimonial" element={<Testimonial />} /> */}
          
        
      </Route>
    )
  );
  return (
   <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
