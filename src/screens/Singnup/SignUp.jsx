import { useState } from "react"

export default function SignUp() {

    const [dados, setDados] = useState([]);
    const [email, setEmail] = useState([]);
    const [senha, setSenha] = useState([]);
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        let signUp = {
            email: email,
            senha:senha
        };

        setDados([...dados, signUp]);

        console.log(signUp);
        console.log(dados);
    }
    
        const Verificar = confirmarSenha && senha !== confirmarSenha ? "text-red-600" : "hidden";
        const disableButon = Verificar === true ? "opacity-0 pointer-events-none bg-gray-900 text-white rounded-lg p-2 w-44" : " cursor-not-allowed opacity-2 pointer-events-none bg-gray-200 text-white rounded-lg p-2 w-44";

    return (
      <>
          <div className="h-screen w-full bg-slate-500 flex items-center justify-center">
              <form className="flex flex-col h-100 w-96 bg-white rounded-lg p-6 shadow-lg">
                  <h1 className="text-center text-3xl">Sign Up</h1>
                  <div className="flex  flex-col items-start mx-auto mt-3">
                      <label className="font-semibold">Email</label>
                      <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-lg bg-slate-200 w-60 p-1"/>
                  </div>
  
                  <div className="flex flex-col items-start mx-auto mt-5">
                      <label className="font-semibold">Password</label>
                      <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className="border rounded-lg bg-slate-200 w-60 p-1"/>

                      <label className="font-semibold mt-5">Confirm your password</label>
                      <input type="password" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}  className="border rounded-lg bg-slate-200 w-60 p-1"/>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-5">
                    <p className={Verificar}>senha incorreta</p>
                  <button onClick={handleSubmit} className= {disableButon}>Sign up</button> 
                  <p className="text-slate-400 mt-2 flex justify-center text-sm" href=""><a className="underline px-1 cursor-pointer hover:text-gray-800" href="/">Sign in</a></p>
                  </div>
              </form>
          </div>
      </>
    )
  }
  