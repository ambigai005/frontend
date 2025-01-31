import React from 'react'

function Signup() {
  return (
   <>
     <div className="flex flex-col items-center justify-evenly h-20">
        <img src="/logo.jpeg" alt="Logo" className="h-10 flex mt-8" />
        <span className="text-md font-semibold lg:text-2xl text-blue-400">SignUp</span>

        <div>
          <form action="" className='flex flex-col justify-center rounded-2xl bg-gray-700 backdrop-blur-md  p-[40px] h-[400px] mt-4 text-sky-300 border border-zinc-500'>
            <p className='flex justify-center text-blue-300'>Sign Up to your account</p>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">Email</span>
              </div>
              <input type="email" placeholder="Enter your mail" className="input input-info   bg-transparent w-[310px]" />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="password" placeholder="Enter your password" className="input input-info w-full  bg-transparent" />
            </label>
            <div className="form-control">
              <label className="cursor-pointer label ">
                <input type="checkbox" defaultChecked className="checkbox checkbox-info "/><span className="text-gray-400">Remember me</span>
                
                <a href="" className='hover:underline'>Forgot Password?</a>
              </label>
            </div>
            <button type='submit' className='bg-blue-400 text-white rounded-xl'>Login</button>
          </form>
        </div>
      </div>
   </>
  )
}

export default Signup;