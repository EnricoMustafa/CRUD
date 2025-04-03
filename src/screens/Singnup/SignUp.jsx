
export default function SignUp() {
    return (
      <>
          <div className="h-screen w-full bg-slate-500 flex items-center justify-center">
              <form className="flex flex-col h-100 w-96 bg-white rounded-lg p-6 shadow-lg">
                  <h1 className="text-center text-3xl">Sign Up</h1>
                  <div className="flex  flex-col items-start mx-auto mt-3">
                      <label className="font-semibold">Email</label>
                      <input type="Email" className="border rounded-lg bg-slate-200 w-60 p-1"/>
                  </div>
  
                  <div className="flex flex-col items-start mx-auto mt-5">
                      <label className="font-semibold">Password</label>
                      <input type="password" className="border rounded-lg bg-slate-200 w-60 p-1"/>

                      <label className="font-semibold mt-5">Confirm your password</label>
                      <input type="password" className="border rounded-lg bg-slate-200 w-60 p-1"/>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-5">
                  <button className="bg-gray-900 text-white rounded-lg p-2 w-44 hover:bg-white hover:shadow-xl hover:text-gray-900">Sign up</button> 
                  <p className="text-slate-400 mt-2 flex justify-center text-sm" href=""><a className="underline px-1 cursor-pointer hover:text-gray-800" href="/">Sign in</a></p>
                  </div>
              </form>
          </div>
      </>
    )
  }
  