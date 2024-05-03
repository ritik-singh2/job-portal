import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Dashboard></Dashboard>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
