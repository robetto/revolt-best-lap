import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>
            <h1 className="text-2xl font-bold py-2">Sign in to you account</h1>
            <p className="py-2">Hai già un account? Fai il <Link to="/" className='underline'>log-in</Link></p>
        </div>
        <form>
            <div className='flex flex-col py-2'>
                <label htmlFor="" className='py-2 font-medium'>Indirizzo Email</label>
                <input className='border p-3' type="email" />
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor="" className='py-2 font-medium'>Password</label>
                <input className='border p-3' type="password" />
            </div>
            <div>
                <button className='border border-blue-500 bg-blue-600 hover:bg-blue-700 p-4 my-2 text-white'>Iscriviti</button>
            </div>
        </form>
    </div>
  )
}

export default Signup