

export default function Home() {
  return (
    <>
        <div className="h-screen w-full bg-slate-500 flex items-center justify-center">
            <form className="flex flex-col h-96 w-96 bg-white rounded-lg p-6 shadow-lg">
                <h1 className="text-center text-3xl">Sing in With</h1>
                <div className="flex  flex-col items-start mx-auto mt-5">
                    <label className="font-semibold"> Username</label>
                    <input type="text" className="border rounded-lg bg-slate-200 w-60 p-1"/>
                </div>

                <div className="flex flex-col items-start mx-auto mt-5">
                    <label className="font-semibold"> Password </label>
                    <input type="password" className="border rounded-lg bg-slate-200 w-60 p-1"/>
                    <a className="underline text-slate-400 cursor-pointer hover:text-gray-800" href="">Forgot your password?</a>
                </div>
                <div className="flex flex-col items-center justify-center mt-5">
                <button className="bg-gray-900 text-white rounded-lg p-2 w-44 hover:bg-white hover:shadow-xl hover:text-gray-900">Enviar</button> 
                </div>
                <a className="underline text-slate-400 cursor-pointer hover:text-gray-800 mt-5 flex justify-center" href="">Sing up</a>
            </form>
        </div>
    </>
  )
}
