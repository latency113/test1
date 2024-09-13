import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
      <div className='flex py-5 flex-col items-center'>
        <h1 className='text-2xl'>Contact</h1>
          <div className='py-5 flex'>
            <div className='bg-red-400 text-white p-5'>
                <p>ติดต่อได้ที่ เพจ NVC Training Center</p>
                <p>Adress: 90 Tesa Rd. Mueang, Nakhon Pathom 73000</p>
                <p>Tel : 032-252790</p>
                <p>E-mail: admin@nvctrainingcenter.com</p>
            </div>
          </div>
      </div>

    </Layout>

  )
}

export default Contact