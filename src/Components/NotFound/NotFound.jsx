/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return <>
      <div className='flex flex-column justify-center items-center py-5'>
        <h3 className='text-4xl text-black-900'>404 Not Found</h3>
        <p className='text-xl py-3'>Your visited page not found. You may go home page.</p>
        <div>
          <Link to='/'>
            <button className='btn btn-danger px-4 py-3'>Back to home page</button>
          </Link>
        </div>
      </div>
    </>
}
