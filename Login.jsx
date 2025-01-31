
import LoginCounts from '../components/LoginCounts'

function Login() {
  return (
  <>
  <div className="flex overflow-y-scroll min-h-[70vh]">
  <div className="flex flex-col items-center w-2/3 h-full">

   <div className="flex justify-evenly w-full items-center mt-4 ms-[530px]">
                    <LoginCounts type="Admin" count="200" />
                    <LoginCounts type="Students" count="20" />
                    <LoginCounts type="Teachers" count="10" />
            
                </div >
                </div>
                </div>
         </>
  )
}

export default Login