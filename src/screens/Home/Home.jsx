import { useState } from "react"

export default function Home() {

  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const [dados, setDados] = useState([]);

  function handleSubmit(e){
    e.preventDefault();

    const novoLogin = {
      email: email,
      senha: senha
    };

    setDados([...dados, novoLogin]);

    console.log(novoLogin)
    console.log(dados)
    
 
  }
  return (
    <>
        <div className="h-screen w-full bg-slate-500 flex items-center justify-center">
            <form className="flex flex-col h-96 w-96 bg-white rounded-lg p-6 shadow-lg">
                <h1 className="text-center text-3xl">Sign in With</h1>
                <div className="flex  flex-col items-start mx-auto mt-5">
                    <label className="font-semibold">Email</label>
                    <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="border rounded-lg bg-slate-200 w-60 p-1"/>
                </div>

                <div className="flex flex-col items-start mx-auto mt-5">
                    <label className="font-semibold">Password</label>
                    <input type="password" value={senha} onChange={(e) => {setSenha(e.target.value)}} className="border rounded-lg bg-slate-200 w-60 p-1"/>
                    <a className="underline text-slate-400 text-sm cursor-pointer hover:text-gray-800" href="">Forgot your password?</a>
                </div>
                <div className="flex flex-col items-center justify-center mt-5">
                <button onClick={handleSubmit} className="bg-gray-900 text-white rounded-lg p-2 w-44 hover:bg-white hover:shadow-xl hover:text-gray-900">Sign in</button> 
                </div>
                <p className="text-slate-400 mt-5 flex justify-center text-sm" href="">Not a member? <a className="underline px-1 cursor-pointer hover:text-gray-800" href="/signup">Sign up now</a></p>
            </form>
        </div>
    </>
  )
}
