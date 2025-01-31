import React from 'react'

function Signin() {
  return (
    <>
      <div className="flex flex-col items-center justify-evenly h-20">
        <img src="/logo.jpeg" alt="Logo" className="h-10 flex mt-8" />
        <span className="text-md font-semibold lg:text-2xl text-blue-400">SignIn</span>

        <div>
          <form action="" className='flex flex-col justify-center rounded-2xl bg-gray-700 backdrop-blur-md  p-[40px] h-[400px] mt-4 text-sky-300 border border-zinc-500'>
            <p className='flex justify-center text-blue-300'>Sign in to your account</p>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">Username</span>
              </div>
              <input type="email" placeholder="Enter your username" className="input input-info   bg-transparent w-[310px]" />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="password" placeholder="Enter your password" className="input input-info w-full  bg-transparent" />
            </label>
            
            <button type='submit' className='bg-blue-400 text-white rounded-xl mt-4'>Sign in</button>
            <p className='flex justify-center'>Don't have an account?<a href="/signup" className='text-slate-400 underline'>SignUp</a></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin