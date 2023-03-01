import NavBar from '@/components/NavBar';
import { useState } from 'react';
// import '../styles/globals.css'; //동작 x
// Global CSS cannot be imported from files other than your Custom <App>. 

export default function Home() {
  return(
    <div>
        {/* <NavBar/> */}
        <h1>Hello</h1>
        {/* <style jsx global>{`a{color:white}`}</style> */}
    </div>
  )
}