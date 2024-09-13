import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
        <div className='text-4xl py-5 text-center'> 
          <p className='py-2'>Page NotFound.</p>
          <hr />
          <NavLink to="/">
              <p className='py-2'>กลับไปหน้าแรก</p>
          </NavLink>
        </div>
    </Layout>

  )
}

export default NotFound